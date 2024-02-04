console.log("Log inititalised"); // added new comment
// new comment -----

// Add your own API key between the ""
var APIKey = "e248b13b3adb6046dcac73b0fc1980f3";

// Here we are building the URL we need to query the database

$("#search-button").on(
  "click",
  function (event) {
    event.preventDefault();
    console.log(event);

    // Empty the section associated with the city variables
    //clear();

    console.log("Contacting API: ");

    const url =
      "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=&q=eggs";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "8b8b0a0f0bmsh3c0b1b63b6e5a85p1cfa40jsn02eb394afe6f",
        "X-RapidAPI-Host": "tasty.p.rapidapi.com",
      },
    };

    fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (resRecipe) {
        console.log("value of result set: ");
        console.log(resRecipe.results);
        console.log("Recipe Name: " + resRecipe.results[3].name);
        console.log("Recipe Name: " + resRecipe.results[3].description);
      }); // End of Resultset function

    //console.log(resRecipe.results);
    // var recipeName = resRecipe.results[3].recipeName;
    // var recipeDesc = resRecipe.results[3].description;
    //console.log(resRecipe.results[3].name);
    // console.log(recipeDesc);
  } // end of function on click event
); // end of on click

//  This API Call goes to obtain the current
console.log("Listing Tags: ");

const tagsUrl = "https://tasty.p.rapidapi.com/tags/list";
const tagsOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "8b8b0a0f0bmsh3c0b1b63b6e5a85p1cfa40jsn02eb394afe6f",
    "X-RapidAPI-Host": "tasty.p.rapidapi.com",
  },
};

fetch(tagsUrl, tagsOptions)
  .then(function (response) {
    return response.json();
  })
  .then(function (resTags) {
    console.log("value of result set: ");
    console.log(resTags.results);
    console.log(resTags.results[200].type);
    //console.log("Tag Name: " + resTags.results.name);
    //console.log("Tag Description Name: " + resTags.results.display_name);
  }); // End of Resultset function
//
//
// Function for displaying recipe data
function renderTagsButton() {
  // Deleting the recipes prior to adding new recipes
  // (this is necessary otherwise you will have repeat buttons)
  $("#buttons-view-Tags").empty();

  // Then dynamicaly generating button
  // This code $("<button>") is all jQuery needs to create the beginning and end tag.
  // (<button></button>)
  var a = $("<button>");
  // Adding a class of tag-btn to our button
  a.addClass("tag-btn");
  // Adding a data-attribute
  a.attr("data-name", "Types of Recipe");
  // Providing the initial button text
  a.text("Types of Recipes");
  // Adding the button to the buttons-view div
  $("#buttons-view-Tags").append(a);
}
//}// --- end of for loop
renderTagsButton();

function renderTagsLabel() {
  // Deleting the recipes prior to adding new recipes
  // (this is necessary otherwise you will have repeat buttons)
  $("#buttons-view-Tags").empty();

  // Then dynamicaly generating button
  // This code $("<button>") is all jQuery needs to create the beginning and end tag.
  // (<button></button>)
  var a = $("<label>");
  // Adding a class of tag-btn to our button
  a.addClass("tag-btn");
  // Adding a data-attribute
  a.attr("data-name", "Types of Recipe");
  // Providing the initial button text
  a.text("Types of Recipes");
  // Adding the button to the buttons-view div
  $("#buttons-view-Tags").append(a);
}
//}// --- end of for loop
renderTagsButton();
