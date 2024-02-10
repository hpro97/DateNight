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

$("#foodSearchButton1").on("click", foodSearch);

function foodSearch(event) {
  event.preventDefault();
  $("#foodColumnDisplay").empty();
  let inputVal = $("#foodSearchBar1").val();
  //
  console.log("value inputVal: ");
  console.log(inputVal);

  createFoodButton(inputVal);
  const foodUrl =
    "https://tasty.p.rapidapi.com/recipes/list?from=0&size=" +
    numRecipes +
    "&tags=&q=" +
    inputVal;

  fetch(foodUrl, recipeOptions)
    .then(function (resFood) {
      return resFood.json();
    })
    .then(function (foodData) {
      console.log(foodData);
      console.log(foodData.results);
      console.log(foodData.results[0]);
      console.log(foodData.results[0].name);

      // filters to only shows objects with the key imageurl and has a value inside of the array
      let foodLink = foodData.results;
      // let foodLink = foodData.results.filter(
      //   (x) => x.hasOwnProperty("imageurl") && x.thumbnail_url.length !== 0
      // );

      for (let i = 0; i < 5; i++) {
        let resultButton = $("<button>");
        console.log("value of link:");
        console.log(foodLink);

        resultButton.addClass("image");
        console.log(resultButton);
        resultButton.text(foodLink[i].name);
        resultButton.css(
          "background-image",
          `url(${foodLink[i].thumbnail_url})`
        );
        resultButton.attr("foodData-id", foodLink[i].name);
        resultButton.addClass("foodSummary");
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
            // event.target.backgroundImage = `url("https://t4.ftcdn.net/jpg/02/97/01/65/360_F_297016511_NWrJG1s3mpyjqD3hwdKidfYsvhEnrPm4.jpg")`;
            event.onerror = null;
          });
        });

        $("#foodColumnDisplay").append(resultButton);
      }
    });
}

$("#foodSearchButton2").on("click", foodOption);
function foodOption(event) {
  event.preventDefault();
  $("#foodColumnDisplay").empty();

  let recipeType = $("#foodSearchBar2").val();
  createFoodButton(recipeType);

  const foodUrl =
    "https://tasty.p.rapidapi.com/recipes/list?from=0&size=" +
    numRecipes +
    "&tags=&q=" +
    inputVal;

  fetch(foodUrl, recipeOptions)
    .then(function (resFood) {
      return resFood.json();
    })
    .then(function (foodData) {
      let foodLink = foodData.results.filter(
        (x) => x.hasOwnProperty("imageurl") && x.thumbnail_url.length !== 0
      );
      let foodRandomLink = [];

      for (let i = 0; i < foodLink.length; i++) {
        let random = Math.floor(Math.random() * foodLink.length);
        let third = foodLink[random];
        if (i !== 5) {
          foodRandomLink.push(third);
        } else {
          break;
        }
      } // end of first loop

      for (let i = 0; i < 5; i++) {
        let resultButton = $("<button>");

        resultButton.addClass("image");
        resultButton.text(foodRandomLink[i].description);
        resultButton.css(
          "background-image",
          `url(${randomLink[i].thumbnail_url[0]})`
        );
        resultButton.attr("foodData-id", foodRandomLink[i].name);
        resultButton.addClass("foodSummary");
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

$("#foodColumnDisplay").on("click", ".foodSummary", findFoodInfo);

function findFoodInfo() {
  var foodRec = $(this).attr("foodData-id");

  // let currentButton = $(this).attr("foodData-id");

  // //const foodUrl = `https://ott-details.p.rapidapi.com/gettitleDetails?imdbid=${currentButton}`;
  const foodUrl =
    "https://tasty.p.rapidapi.com/recipes/list?from=0&size=" +
    numRecipes +
    "&tags=&q=" +
    foodRec;

  fetch(foodUrl, recipeOptions)
    .then(function (resFood) {
      return resFood.json();
    })
    .then(function (foodData) {
      // console.log("value of foodData:L ");
      // console.log(foodData);
      var dishName = foodData.results[0].name;
      // console.log("value dishName");
      // console.log(dishName);
      $("#dishName").text("Dish Name: " + dishName);

      //$("#recipie").text(`recipe: ${foodData.results.description}`);
      var dishDescription = foodData.results[0].description;
      $("#dishDescription").text("Dish Description: " + dishDescription);
      console.log("Length of Array Instrcutions:");
      var dishRecipe = [foodData.results[0].instructions];
      console.log(dishRecipe);
      console.log(dishRecipe[0].length);
      let foodRecipe = [];

      for (let i = 0; i < dishRecipe[0].length; i++) {
        foodRecipe.push(
          "Step " + (i + 1) + ": " + dishRecipe[0][i].display_text + "\r\n"
        );
      }

      $("#dishRecipe").text(" " + foodRecipe + "\r\n");
      // $("#dishRecipe").text(" : " + dishRecipe[0][1].display_text);
      //
      let videoSource = foodData.results[0].original_video_url;
      console.log(videoSource);
      $("#video-container").text(videoSource);

      return dishName, dishDescription, dishRecipe, foodRecipe;
    });
}

function createFoodButton(value) {
  const buttonData = {
    text: value,
  };

  const existingSearchData = localStorage.getItem("foodSearches");
  const foodSearches = existingSearchData ? JSON.parse(existingSearchData) : []; // checking to see if there is anything in local storage if so converts it into a javascript object if not places an empty array

  let alreadyExists = false;

  for (let i = 0; i < foodSearches.length; i++) {
    if (foodSearches[i].text === buttonData.text) {
      alreadyExists = true;
      break;
    }
  } // checking to see if the button already exists

  if (!alreadyExists) {
    //makes only happens if the button doesn't already exist
    if (foodSearches.length >= 5) {
      // checking the number of propertys in local storage if equal or greater than five
      foodSearches.shift(); // if greater than or equal to removes first property
    }

    foodSearches.push(buttonData); // pushes the value entered to the object

    const foodSearchesJson = JSON.stringify(foodSearches); // stringifys the key and value in the object
    localStorage.setItem("foodSearches", foodSearchesJson); // saves to local storage

    foodRenderButtons(); // Call renderButtons after creating the new button
  }
}

function foodRenderButtons() {
  const existingSearchData = localStorage.getItem("foodSearches");
  const foodSearches = existingSearchData ? JSON.parse(existingSearchData) : []; // checking to see if there is anything in local storage if so converts it into a javascript object if not places an empty array

  $("#savedFoodSearches").empty(); // Clear the container before rendering the buttons

  foodSearches.forEach((buttonData) => {
    const button = $("<button>").text(buttonData.text);
    button.addClass("test");
    $("#savedFoodSearches").append(button);

    // Add event listener to each button
    button.on("click", function () {
      const inputVal = buttonData.text;

      const foodApiUrl =
        "https://tasty.p.rapidapi.com/recipes/list?from=0&size=" +
        numRecipes +
        "&tags=&q=" +
        inputVal;

      $("#foodColumnDisplay").empty();

      fetch(foodApiUrl, recipeOptions)
        .then(function (resFood) {
          return resFood.json();
        })
        .then(function (foodData) {
          console.log(foodData);

          // filters to only shows objects with the key imageurl and has a value inside of the array
          let foodLink = foodData.results.filter(
            (x) => x.hasOwnProperty("imageurl") && x.thumbnail_url.length !== 0
          );

          for (let i = 0; i < 5; i++) {
            let resultButton = $("<button>");

            resultButton.addClass("image");
            resultButton.text(foodLink[i].name);
            resultButton.css(
              "background-image",
              `url(${foodLink[i].thumbnail_url[0]})`
            );
            resultButton.attr("foodData-id", foodLink[i].name);
            resultButton.addClass("foodSummary");
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

foodRenderButtons();

$("#foodClearSearch").on("click", function () {
  localStorage.clear("foodSearches");
  foodRenderButtons();
});

//notes

//*reminder changed API key to Harrys, reached monthly limit*/
//undefined appears after too many clicks within set secconds (no fix, inherent of API)

// git add . && git commit -m "MESSAGE" && git push

//bugs:
