console.log("Log inititalised");

// Initial array of Types of Recipe Tags
var recipeTypeTags = [
  "under_30_minutes",
  "5_ingredients_or_less",
  "Mr. Right",
  "The Lion King",
];

// Here we are building the URL we need to query the database

$("#search-button").on(
  "click",
  function (event) {
    event.preventDefault();
    console.log(event);

    var ingredient = $("#search-input").val();
    console.log("Ingredient selected: ");
    console.log(ingredient);

    // Empty the section associated with the city variables
    //clear();

    console.log("COntacting API: ");

    const url =
      "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=&q=" +
      ingredient;
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

//
var selectItems = {
  none_selected: "No type selected",
  under_30_minutes: "Recipes under 30 mins",
  "5_ingredients_or_less": "Recipes with 5 Ingredients or less",
  cocktails: "Cocktail Recipes",
  drinks: "Drinks recipes",
  holiday_drinks: "Seasonal Drinks",
  thai: "Thai Food",
  mexican: "Mexican Food",
  indian: "Indian Food",
};

//selectItems["newFriend"] = "Niel Goldman";

//
var selectContainer = document.getElementById("selectContainer");
//var selectContainer =4('#selectContainer')
var selectBox = document.createElement("SELECT");
selectBox.id = selectBox.name = "recipeList";
selectContainer.appendChild(selectBox);
for (var key in selectItems) {
  var value = selectItems[key];
  var option = document.createElement("OPTION");
  option.text = value;
  option.value = key;
  selectBox.options.add(option);
}
function getRecipeType() {
  var typeList = document.getELementById("selectContainer");
  var value = typeList.value;
  console.log(value);
}
var a = $("<button>");
// Adding a class of movie-btn to our button
a.addClass("search-type-btn");
// Adding a data-attribute
a.attr("data-name", "Recipe Type");
// Providing the initial button text
a.text("submit");
// Adding the button to the buttons-view div
$("#selectContainer").append(a);
$(".search-type-btn").on("click", function (event) {
  event.preventDefault();
  console.log(event);
  getRecipeType();

  //
  //
  //
}); //-- End of function

// create an Array with the Types of Recipe
// convert the JS/HTML DOM to JQUERY format
