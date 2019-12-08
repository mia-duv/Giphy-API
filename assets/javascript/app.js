$("button").on("click", function() {
    var emotion = $(this).attr("data-emotion");

// Example queryURL for Giphy API
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=sZOZvkLb7ZgMIX9Cjp20eCI5MxeBmlEJ&q=" + emotion + "&limit=10&offset=0&rating=PG&lang=en";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    $("#gifImage").empty()
    for (var i = 0; i < response.data.length; i++) {
    var gifList =$("<div>")
    var gifImage = $("<img>");
    gifImage.attr("src", response.data[i].images.fixed_height.url);
    console.log(response);
    gifList.prepend(gifImage)
    $("#gifImage").prepend(gifList);
    }

 
    });
    

  });

   
