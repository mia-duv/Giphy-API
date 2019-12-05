$("button").on("click", function() {
    var emotion = $(this).attr("data-emotion");

// Example queryURL for Giphy API
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=sZOZvkLb7ZgMIX9Cjp20eCI5MxeBmlEJ&q=" + emotion + "&limit=10&offset=0&rating=PG&lang=en";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    var results = response;
    console.log(response.data);
    var imageUrl = response.data.image_original_url;
    var gifImage = $("<img>");
    $("#gifImage").attr("src", imageUrl);
    
    });
    
    
  });

   
