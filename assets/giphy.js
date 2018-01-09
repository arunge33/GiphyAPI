
var marvel = [];

function displayMarvelName() {}

$("button").on("click", function() {

  var hero = $(this).data("search");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    hero + "&api_key=dc6zaTOxFJmzC&limit=10";

  // Performing our AJAX GET request
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
      var heroImage = $("<img>");

      heroImage.attr("src", results[i].images.fixed_height.url);
      gifDiv.append(p);
      gifDiv.append(heroImage);

    $("#gifSpace").prepend(gifDiv);


      }
    });


function renderButtons(){

  $("myButtons").empty();
  for (var i = 0; i < marvel.length; i++) {
    var a = $('<button class="btn btn-primary">');
    a.addClass("comic");
    a.attr("data-search", marvel[i]);
    a.text(marvel[i]);
    $("#myButtons").append(a);

  }
}

$("addMarvel").on("click", function(event) {
  event.preventDefault();
  var guys = $("#characterInput").val().trim();
  marvel.push(guys);


  renderButtons();



});


$(document).on("click", ".comic", displayMarvelName);

renderButtons();

})
