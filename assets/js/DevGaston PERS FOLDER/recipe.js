/**
 *
 
 * pulls information from the form and build the query URL
 * @returns {string} URL for NYT API based on form inputs
 */

// Calling Jquery Selector to make Dynamic HTML Tags for frontEnd

// page element
console.log("dynamic header");
var rootEl = $("#headerContainer");
var headeerEl = $("<header>");
var titleDashboard = $("<h1>");
titleDashboard.text("Recipe Dashboard");
// Attach the title element to the root element
headeerEl.append(titleDashboard);
// Append the header element to the page
rootEl.append(headeerEl);

// section side bar
{
  /* <section class="sidebar"></section>; */
}
console.log("dynamic header");
var containerEl = $("#Container");
var sidebarEl = $("<section>");
var divEl = $("<div>");
sidebarEl.addClass("search-recipe");
divEl.addClass("container-fluid py-5");
var containerTitleEl = $("<h5>");
containerTitleEl.text("Recipes Search");
divEl.append(containerTitleEl);

var selectItems = {
  none_selected: "Optional selection",
  under_30_minutes: "Recipes under 30 mins",
  "5_ingredients_or_less": "Recipes with 5 Ingredients or less",
  cocktails: "Cocktail Recipes",
  drinks: "Drinks recipes",
  holiday_drinks: "Seasonal Drinks",
  thai: "Thai Food",
  mexican: "Mexican Food",
  indian: "Indian Food",
};

console.log("Log accessing Recipe API:");

$("#run-search").on(
  "click",
  function (event) {
    event.preventDefault();
    console.log(event);

    var numRecipes = $("#recipe-count").val();
    console.log("Number of Recipes: ");
    console.log(numRecipes);

    var ingredient = $("#search-term").val();
    // Grab text the user typed into the search input, add to the queryParams object
    //var q = $("#search-term").val().trim();

    console.log("Ingredient selected: ");
    console.log(ingredient);

    // Empty the section associated with the city variables
    //clear();

    console.log("Contacting API: ");

    const url =
      "https://tasty.p.rapidapi.com/recipes/list?from=0&size=" +
      numRecipes +
      "&tags=&q=" +
      ingredient;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "2c8b78a2cfmshaa2e0ba5e7a7c9ep1530e1jsn942d7f6e4a3f",
        "X-RapidAPI-Host": "tasty.p.rapidapi.com",
      },
    };

    fetch(url, options)
      .then(function (response, index) {
        return response.json();
      })
      .then(function (resRecipe) {
        console.log("value of result set: ");
        console.log(resRecipe.results);
        // console.log("Recipe Name: " + resRecipe.results[3].name);
        // console.log("Recipe Name: " + resRecipe.results[3].description);
        //
        //Loop through and build elements for the defined number of recipes
        var numRecipes = $("#recipe-count").val();
        for (var index = 0; index < numRecipes; index++) {
          // Get specific recipe info for current index
          var recipes = resRecipe.results[index];
          console.log("Value of VAriable recipes:");

          console.log(recipes);

          // Increase the recipe count (track recipe # - starting at 1)
          var numRecipes = index + 1;

          // Create the  list group to contain the articles and add the article content for each
          var $recipeList = $("<ul>");
          $recipeList.addClass("list-group");

          // Add the newly created element to the DOM
          $("#article-section").append($recipeList);

          var $recipeListItem = $("<li class='list-group-item recipeSection'>");

          var recipeName = recipes.name;
          $recipeListItem.append("<h4>" + recipeName + "</h4>");

          // -- abstract Description of Recipe
          var description = recipes.description;
          $recipeListItem.append("<h5>" + description + "</h5>");
          // steps

          var steps = recipes.instructions;
          $recipeListItem.append("<h5>" + "Preparation: " + steps + "</h5>");

          //
          var recipeVideo = recipes.original_video_url;
          $recipeListItem.append(
            "<a href='" + recipeVideo + "'>" + recipeVideo + "</a>"
          );

          console.log("LOcation of Image: ");
          console.log(recipes.thumbnail_url);

          // var recipeImage = recipes.thumbnail_url;
          // // Creating an element to hold the image

          // var image = $("<img>").attr("src", recipeImage);

          // // Appending the image
          // $articleListItem.append(image);

          //
          // Append the recipe to DOM
          $recipeList.append($recipeListItem);
          // // Add the newly created element to the DOM
          // $("#article-section").append($recipeList);

          //
        } // end of for loop

        //
      }); // End of Resultset function

    //console.log(resRecipe.results);
    // var recipeName = resRecipe.results[3].recipeName;
    // var recipeDesc = resRecipe.results[3].description;
    //console.log(resRecipe.results[3].name);
    // console.log(recipeDesc);
  } // end of function on click event
); // end of on click
