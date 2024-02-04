const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '12c3195dadmsh5f855125ceaedc8p1487e6jsnefb14484a6af',
		'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
  },
};

$("#searchButton1").on("click", search);

function search(event) {
  event.preventDefault();
  $("#columnDisplay").empty();
  let inputVal = $("#searchBar1").val();

  createButton(inputVal)
  const url = `https://ott-details.p.rapidapi.com/search?title=${inputVal}&page=1&type=movie`;

  fetch(url, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      // filters to only shows objects with the key imageurl and has a value inside of the array
      let link = data.results.filter(
        (x) => x.hasOwnProperty("imageurl") && x.imageurl.length !== 0
      );

      for (let i = 0; i < 5; i++) {
        let resultButton = $("<button>");

        resultButton.addClass("image");
        resultButton.text(link[i].title);
        resultButton.css("background-image", `url(${link[i].imageurl[0]})`);
        resultButton.attr("data-id", link[i].imdbid);
        resultButton.addClass("summary");

        // if image url doesn't work loads a replacement image
        const img = $(".image");
        img.each(function () {
          img.on("error", function (event) {
            event.target.backgroundImage = `url("https://t4.ftcdn.net/jpg/02/97/01/65/360_F_297016511_NWrJG1s3mpyjqD3hwdKidfYsvhEnrPm4.jpg")`;
            event.onerror = null;
          });
        });

        $("#columnDisplay").append(resultButton);
      }
    });
}

$("#searchButton2").on("click", movieOption);
function movieOption(event) {
  event.preventDefault();
  $("#columnDisplay").empty();

  let genre = $("#searchBar2").val();
  createButton(genre)
  

  const url = `https://ott-details.p.rapidapi.com/advancedsearch?start_year=1970&end_year=2024&min_imdb=0&max_imdb=10&genre=${genre}&language=english&type=movie&sort=latest&page=1`;

  fetch(url, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let link = data.results.filter(
        (x) => x.hasOwnProperty("imageurl") && x.imageurl.length !== 0
      );
      let randomLink = [];

      for (let i = 0; i < link.length; i++) {
        let random = Math.floor(Math.random() * link.length);
        let third = link[random];
        if (i !== 5) {
          randomLink.push(third);
        } else {
          break;
        }
      } // end of first loop

      for (let i = 0; i < 5; i++) {
        let resultButton = $("<button>");

        resultButton.addClass("image");
        resultButton.text(randomLink[i].title);
        resultButton.css(
          "background-image",
          `url(${randomLink[i].imageurl[0]})`
        );
        resultButton.attr("data-id", randomLink[i].imdbid);
        resultButton.addClass("summary");

        // if image url doesn't work loads a replacement image
        const img = $(".image");
        img.each(function () {
          img.on("error", function (event) {
            event.target.backgroundImage = `url("https://t4.ftcdn.net/jpg/02/97/01/65/360_F_297016511_NWrJG1s3mpyjqD3hwdKidfYsvhEnrPm4.jpg")`;
            event.onerror = null;
          });
        });

        $("#columnDisplay").append(resultButton);
      }
    }); // end of fetch
}

$("#columnDisplay").on("click", ".summary", findInfo);

function findInfo() {
  let currentButton = $(this).attr("data-id");

  const url = `https://ott-details.p.rapidapi.com/gettitleDetails?imdbid=${currentButton}`;

  fetch(url, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      $("#info-title").text(`${data.title}`);
      $("#info-synopsis").text(`Synopsis: ${data.synopsis}`);
      $("#info-year").text(`Release Year: ${data.released}`);
      $("#info-imdb").text(`Rating: ${data.imdbrating}/10 stars`);
    });
}



function createButton(value) {
  const buttonData = {
    text: value  
  };

  const existingSearchData = localStorage.getItem('searches');
  const searches = existingSearchData ? JSON.parse(existingSearchData) : [];  // checking to see if there is anything in local storage if so converts it into a javascript object if not places an empty array

  if (searches.length >= 5) { // checking the number of propertys in local storage if equal or greater than five 
    searches.shift(); // if greater than or equal to removes first property
  }

  searches.push(buttonData);  // pushes the value entered to the object 

  const searchesJson = JSON.stringify(searches); // stringifys the key and value in the object
  localStorage.setItem('searches', searchesJson); // saves to local storage

  renderButtons(); // Call renderButtons after creating the new button

  
}

function renderButtons() {
  const existingSearchData = localStorage.getItem('searches');
  const searches = existingSearchData ? JSON.parse(existingSearchData) : []; // checking to see if there is anything in local storage if so converts it into a javascript object if not places an empty array

  $('#savedSearches').empty(); // Clear the container before rendering the buttons

  searches.forEach((buttonData) => {
    const button = $('<button>').text(buttonData.text);
    button.addClass('test');
    $('#savedSearches').append(button);

    // Add event listener to each button
    button.on('click', function() {
      const inputVal = buttonData.text;
      const apiUrl = `https://ott-details.p.rapidapi.com/search?title=${inputVal}&page=1&type=movie`;
      $("#columnDisplay").empty();

      fetch(apiUrl, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      // filters to only shows objects with the key imageurl and has a value inside of the array
      let link = data.results.filter(
        (x) => x.hasOwnProperty("imageurl") && x.imageurl.length !== 0
      );

      for (let i = 0; i < 5; i++) {
        let resultButton = $("<button>");

        resultButton.addClass("image");
        resultButton.text(link[i].title);
        resultButton.css("background-image", `url(${link[i].imageurl[0]})`);
        resultButton.attr("data-id", link[i].imdbid);
        resultButton.addClass("summary");

        // if image url doesn't work loads a replacement image
        const img = $(".image");
        img.each(function () {
          img.on("error", function (event) {
            event.target.backgroundImage = `url("https://t4.ftcdn.net/jpg/02/97/01/65/360_F_297016511_NWrJG1s3mpyjqD3hwdKidfYsvhEnrPm4.jpg")`;
            event.onerror = null;
          });
        });

        $("#columnDisplay").append(resultButton);
      }
    });


    
    });
  });
}

renderButtons();


//notes

//*reminder changed API key to Harrys, reached monthly limit*/
//undefined appears after too many clicks within set secconds (no fix, inherent of API)

//bugs:





  



//buttons need to be larger to display full title and full poster
//local storge needs adding *refer to my weather dashboard with for loop replaced older*
