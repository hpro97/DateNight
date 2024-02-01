//this doc shows an example of how to fetch data from the film API whilst appending a search bar used for the input data

$(document).ready(function() {
  // Create the form structure
  let formHtml = '<form>' +
                    '<div class="form-group">' +
                      '<label for="exampleInputFilm">film</label>' +
                      '<input type="search" class="form-control" id="exampleInputFilm" placeholder="Enter Film">' +
                    '</div>' +
                    '<button type="submit" class="btn btn-primary">Submit</button>' +
                  '</form>';

  // Append the form to the #film container
  $(formHtml).appendTo("#film");

  $(".btn").on("click", function(event) {
    event.preventDefault();
    // Get the value from the input field
    let film = $('#exampleInputFilm').val();

    // Format user input
    let spacesApplied = formatUserInput(film);

    let url = `https://streaming-availability.p.rapidapi.com/search/title?title=${spacesApplied}&country=gb&show_type=all&output_language=en`;

    let options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '12c3195dadmsh5f855125ceaedc8p1487e6jsnefb14484a6af',
        'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
      }
    };

    fetch(url, options) // Fetch the URL
      .then(function(response) {
        // Return the JSON data
        return response.json();
      })
      .then(function(data) {
        // Log the JSON data to the console
        console.log(data);
      })
      .catch(function(error) {
        // Handle errors if needed
        console.error(error);
      });
  });

  function formatUserInput(film) {
    let spacesApplied = film.replace(/\s/g, "%20"); // %20 is space
    return spacesApplied;
  }
});
