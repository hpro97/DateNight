const recipeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2c8b78a2cfmshaa2e0ba5e7a7c9ep1530e1jsn942d7f6e4a3f",
    "X-RapidAPI-Host": "tasty.p.rapidapi.com",
  },
};
var numRecipes = 5;
var ingredient = $("#foodSearchButton1").val();
// Grab text the user typed into the search input, add to the queryParams object
//var q = $("#search-term").val().trim();

console.log("Ingredient selected: ");
console.log(ingredient);

$("#foodSearchButton1").on("click", search);

function search(event) {
  event.preventDefault();
  $("#foodColumnDisplay").empty();
  let inputVal = $("#foodSearchBar1").val();
  //
  console.log("value inputVal: ");
  console.log(inputVal);

  createButton(inputVal);
  const url =
    "https://tasty.p.rapidapi.com/recipes/list?from=0&size=" +
    numRecipes +
    "&tags=&q=" +
    inputVal;

  fetch(url, recipeOptions)
    .then(function (resFood) {
      return resFood.json();
    })
    .then(function (foodData) {
      console.log(foodData);
      console.log(foodData.results);
      console.log(foodData.results[0]);

      // filters to only shows objects with the key imageurl and has a value inside of the array
      let link = foodData.results;
      // let link = foodData.results.filter(
      //   (x) => x.hasOwnProperty("imageurl") && x.thumbnail_url.length !== 0
      // );

      for (let i = 0; i < 5; i++) {
        let resultButton = $("<button>");
        console.log("value of link:");
        console.log(link);

        resultButton.addClass("image");
        console.log(resultButton);
        resultButton.text(link[i].name);
        resultButton.css(
          "background-image",
          `url(${link[i].thumbnail_url[0]})`
        );
        resultButton.attr("foodData-id", link[i].name);
        resultButton.addClass("summary");
        resultButton.css({
          //   width: "182px",
          //   height: "268px",
          //   "background-size": "cover",
          //   "background-position": "center center",
          //   padding: "10px",
          //   margin: "10px",
          //   "border-radius": "10px",
          //   color: "#808080",
          //   "font-family": "Arial, Helvetica, sans-serif",
          //   "text-transform": "uppercase",
          //   "font-weight": "bold",
          //   "font-size": "16px",
          //   "text-align": "center",
          //   display: "inline-block",
          //   "flex-direction": "column",
          //   "justify-content": "flex-end",
        });

        // if image url doesn't work loads a replacement image
        const img = $(".image");
        img.each(function () {
          img.on("error", function (event) {
            event.target.backgroundImage = `url("https://t4.ftcdn.net/jpg/02/97/01/65/360_F_297016511_NWrJG1s3mpyjqD3hwdKidfYsvhEnrPm4.jpg")`;
            event.onerror = null;
          });
        });

        $("#foodColumnDisplay").append(resultButton);
      }
    });
}

$("#searchButton2").on("click", movieOption);
function movieOption(event) {
  event.preventDefault();
  $("#foodColumnDisplay").empty();

  let genre = $("#searchBar2").val();
  createButton(genre);

  const url =
    "https://tasty.p.rapidapi.com/recipes/list?from=0&size=" +
    numRecipes +
    "&tags=&q=" +
    inputVal;

  fetch(url, options)
    .then(function (resFood) {
      return resFood.json();
    })
    .then(function (foodData) {
      let link = foodData.results.filter(
        (x) => x.hasOwnProperty("imageurl") && x.thumbnail_url.length !== 0
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
        resultButton.text(randomLink[i].description);
        resultButton.css(
          "background-image",
          `url(${randomLink[i].thumbnail_url[0]})`
        );
        resultButton.attr("data-id", randomLink[i].name);
        resultButton.addClass("summary");
        resultButton.css({
          width: "182px",
          height: "268px",
          "background-size": "cover",
          "background-position": "center center",
          padding: "10px",
          margin: "10px",
          "border-radius": "10px",
          color: "#808080",
          "font-family": "Arial, Helvetica, sans-serif",
          "text-transform": "uppercase",
          "font-weight": "bold",
          "font-size": "16px",
          "text-align": "center",
          display: "inline-block",
          "flex-direction": "column",
          "justify-content": "flex-end",
        });

        // if image url doesn't work loads a replacement image
        const img = $(".image");
        img.each(function () {
          img.on("error", function (event) {
            event.target.backgroundImage = `url("https://t4.ftcdn.net/jpg/02/97/01/65/360_F_297016511_NWrJG1s3mpyjqD3hwdKidfYsvhEnrPm4.jpg")`;
            event.onerror = null;
          });
        });

        $("#foodColumnDisplay").append(resultButton);
      }
    }); // end of fetch
}

$("#foodColumnDisplay").on("click", ".summary", findInfo);

// function findInfo() {
//   let currentButton = $(this).attr("data-id");

//   const url = `https://ott-details.p.rapidapi.com/gettitleDetails?imdbid=${currentButton}`;
//   // "https://tasty.p.rapidapi.com/recipes/list?from=0&size=" +
//   //   numRecipes +
//   //   "&tags=&q=" +
//   //   inputVal;

//   fetch(url, options)
//     .then(function (resFood) {
//       return resFood.json();
//     })
//     .then(function (foodData) {
//       console.log(foodData);

//       $("#info-title").text(`${foodData.description}`);
//       // $("#info-synopsis").text(`Synopsis: ${data.synopsis}`);
//       // $("#info-year").text(`Release Year: ${data.released}`);
//       // $("#info-imdb").text(`Rating: ${data.imdbrating}/10 stars`);
//     });
// }

function createButton(value) {
  const buttonData = {
    text: value,
  };

  const existingSearchData = localStorage.getItem("searches");
  const searches = existingSearchData ? JSON.parse(existingSearchData) : []; // checking to see if there is anything in local storage if so converts it into a javascript object if not places an empty array

  let alreadyExists = false;

  for (let i = 0; i < searches.length; i++) {
    if (searches[i].text === buttonData.text) {
      alreadyExists = true;
      break;
    }
  } // checking to see if the button already exists

  if (!alreadyExists) {
    //makes only happens if the button doesn't already exist
    if (searches.length >= 5) {
      // checking the number of propertys in local storage if equal or greater than five
      searches.shift(); // if greater than or equal to removes first property
    }

    searches.push(buttonData); // pushes the value entered to the object

    const searchesJson = JSON.stringify(searches); // stringifys the key and value in the object
    localStorage.setItem("searches", searchesJson); // saves to local storage

    renderButtons(); // Call renderButtons after creating the new button
  }
}

function renderButtons() {
  const existingSearchData = localStorage.getItem("searches");
  const searches = existingSearchData ? JSON.parse(existingSearchData) : []; // checking to see if there is anything in local storage if so converts it into a javascript object if not places an empty array

  $("#savedSearches").empty(); // Clear the container before rendering the buttons

  searches.forEach((buttonData) => {
    const button = $("<button>").text(buttonData.text);
    button.addClass("test");
    $("#savedSearches").append(button);

    // Add event listener to each button
    button.on("click", function () {
      const inputVal = buttonData.text;
      const apiUrl = `https://ott-details.p.rapidapi.com/search?title=${inputVal}&page=1&type=movie`;
      $("#foodColumnDisplay").empty();

      fetch(apiUrl, options)
        .then(function (resFood) {
          return resFood.json();
        })
        .then(function (foodData) {
          console.log(data);

          // filters to only shows objects with the key imageurl and has a value inside of the array
          let link = foodData.results.filter(
            (x) => x.hasOwnProperty("imageurl") && x.thumbnail_url.length !== 0
          );

          for (let i = 0; i < 5; i++) {
            let resultButton = $("<button>");

            resultButton.addClass("image");
            resultButton.text(link[i].name);
            resultButton.css(
              "background-image",
              `url(${link[i].thumbnail_url[0]})`
            );
            resultButton.attr("data-id", link[i].name);
            resultButton.addClass("summary");
            resultButton.css({
              width: "182px",
              height: "268px",
              "background-size": "cover",
              "background-position": "center center",
              padding: "10px",
              margin: "10px",
              "border-radius": "10px",
              color: "#808080",
              "font-family": "Arial, Helvetica, sans-serif",
              "text-transform": "uppercase",
              "font-weight": "bold",
              "font-size": "16px",
              "text-align": "center",
              display: "inline-block",
              "flex-direction": "column",
              "justify-content": "flex-end",
            });

            // if image url doesn't work loads a replacement image
            const img = $(".image");
            img.each(function () {
              img.on("error", function (event) {
                event.target.backgroundImage = `url("https://t4.ftcdn.net/jpg/02/97/01/65/360_F_297016511_NWrJG1s3mpyjqD3hwdKidfYsvhEnrPm4.jpg")`;
                event.onerror = null;
              });
            });

            $("#foodColumnDisplay").append(resultButton);
          }
        });
    });
  });
}

renderButtons();

$("#clearSearch").on("click", function () {
  localStorage.clear("searches");
  renderButtons();
});

//notes

//*reminder changed API key to Harrys, reached monthly limit*/
//undefined appears after too many clicks within set secconds (no fix, inherent of API)

// git add . && git commit -m "MESSAGE" && git push

//bugs:
