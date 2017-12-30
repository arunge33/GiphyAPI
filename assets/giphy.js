
var marvel = ["Hulk", "Ant Man", "Loki", "Shield"];

function alertmarvelName() {
  var marvelName = $(this).attr("data-name");

  alert(marvelName);
}
                    function renderButtons() {
                      $("#buttons-view").empty();

                    for (var i = 0; i < marvel.length; i++) {

                      var button = $("<button>");

                      button.addClass("marvel");

                      button.attr("data-name", marvel[i]);

                      button.text(marvel[i]);

                      $("#buttons-view").append(button);
  }
}

$("#add-marvel").on("click", function(event) {

  event.preventDefault();

  var character = $("#character-input").val().trim();

  marvel.push(character);

renderButtons();

});

$(document).on("click", ".character", alertmarvelName);

renderButtons();

$("button").on("click", function() {
  var person = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    person + "&api_key=dc6zaTOxFJmzC&limit=10";

  $.ajax({
      url: queryURL,
      method: "GET"
    })
    .done(function(response) {
      var results = response.data;

      for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div class='item'>");

        var rating = results[i].rating;

        var p = $("<p>").text("Rating: " + rating);

        var personImage = $("<img>");
        personImage.attr("src", results[i].images.fixed_height.url);

        gifDiv.prepend(p);
        gifDiv.prepend(personImage);

        $("#gifs-go-here").prepend(gifDiv);
      }
    });
});
