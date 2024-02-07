//-----------------------food-----------------------//

let foodSection = $("#food");
foodSection.addClass("container-section");

//-----------------------food display-------------------//

let foodDisplay = $(
  `<div class="container text-center custom-container" id="foodDisplay"></div>`
);
foodSection.append(foodDisplay);

//------------------search section-------------------//
let foodSearchArea = $(`<div class="row" id="foodSearchArea"></div>`);
foodDisplay.append(foodSearchArea);
//------------------search display---------------//
let foodSearchDisplay = $(`<div class="col" id="foodColumnSearch"></div>`);
foodSearchArea.append(foodSearchDisplay);

//------------------search bars/buttons------//
let foodSearchBar1 = $(
  `<input type="text" class="searchBar" id="foodSearchBar1" placeholder="ingredients/dish"></input>`
);
foodSearchDisplay.append(foodSearchBar1);

let foodSearchButton1 = $(
  `<button class="btn btn-primary" id="foodSearchButton1">Search</button>`
);
foodSearchDisplay.append(foodSearchButton1);

let foodSearchBar2 = $(`
			<div class="dropdown">
				<button
				  	class="btn btn-secondary dropdown-toggle"
				  	id="foodSearchBar2"
				  	type="button"
				  	data-bs-toggle="dropdown"
				  	aria-expanded="false"
				>
				  	cuisine/type
				</button>
					<ul class="dropdown-menu">
				  	<li>
						<a class="dropdown-item" href="#">
						Recipes under 30 mins
						</a>
				  	</li>
				  	<li>
						<a class="dropdown-item" href="#">
						Thai Food
						</a>
				  	</li>
				  	<li>
						<a class="dropdown-item" href="#">
						Indian Food
						</a>
				  	</li>
				</ul>
			</div>`);
foodSearchDisplay.append(foodSearchBar2);

let foodSearchButton2 = $(
  `<button class="btn btn-primary" id="foodSearchButton2">Search</button>`
);
foodSearchDisplay.append(foodSearchButton2);

var foodName = "";
var foodData = "";
//------------------display section-------------------//
let foodDisplayArea = $(`<div class="col" id="foodColumnDisplay"></div>`);
foodDisplay.append(foodDisplayArea);
//------------------buttons section---------------//
// gaston pls edit as necessary changing paths
//pls keep in mind data. is already in use for film api, please can you change to foodData.
// let foodResultButton1 = $(
//   `<button class="btn btn-primary" id="foodResultButton1">${foodName[0]}</button>`
// ); //change to API access logic
// let foodPath1 = foodData.name[0]; //change to API access logic
// foodDisplayArea.append(foodResultButton1);

// let foodResultButton2 = $(
//   `<button class="btn btn-primary" id="foodResultButton2">${foodName[1]}</button>`
// ); //change to API access logic
// let foodPath2 = foodData.name[1]; //change to API access logic
// foodDisplayArea.append(foodResultButton2);

// let foodResultButton3 = $(
//   `<button class="btn btn-primary" id="foodResultButton3">${foodName[2]}</button>`
// ); //change to API access logic
// let foodPath3 = foodData.name[2]; //change to API access logic
// foodDisplayArea.append(foodResultButton3);

// let foodResultButton4 = $(
//   `<button class="btn btn-primary" id="foodResultButton4">${foodName[3]}</button>`
// ); //change to API access logic
// let foodPath4 = foodData.name[3]; //change to API access logic
// foodDisplayArea.append(foodResultButton4);

// let foodResultButton5 = $(
//   `<button class="btn btn-primary" id="foodResultButton5">${foodName[4]}</button>`
// ); //change to API access logic
// let foodPath5 = foodData.name[4]; //change to API access logic
// foodDisplayArea.append(foodResultButton5);

//------------------video/picture section-------------------//
// let videoArea = $(`<div class="col" id="foodColumnVideoArea"></div>`);
// foodDisplay.append(videoArea);
// //------------------video/picture reuslt section--- ----//
// let videoSource = foodData.results.original_video_url; // [on click event take id and apply to this logic] //change to API access logic
// let videoResultArea = $(`
// 		<div id="video-container">
// 			<video id="foodVideo">
// 			    <source src= videoSource type="video/mp4">
// 			</video>
// 		</div>`);
// videoArea.append(videoResultArea);

//------------------description section-------------------//
let foodDescriptionArea = $(
  `<div class="col" id="foodColumnDescription"></div>`
);
foodDisplay.append(foodDescriptionArea);
// ----------------info dump-------------------------//
let dishName = $(`<h3 id=dishName>${foodData.name}</h3>`); //change to API access logic
foodDescriptionArea.append(dishName);

let ingredients = $(`<h3 id=ingredients>${foodData.ingredients}</h3>`); //change to API access logic
foodDescriptionArea.append(ingredients);

let recipie = $(`<h3 id=recipie>${foodData.recipie}</h3>`); //change to API access logic
foodDescriptionArea.append(recipie);

//------------------saved section--------------------------//
let foodSavedArea = $(
  `<div class="container mt-5 custom-container" id="foodSavedSearchButtons"></div>`
);
foodDisplay.append(foodSavedArea);
//---------------- Saved searches --------------------//
let foodSavedSearches = $(`<div class="row" id="foodSavedSearches"></div>`);
foodSavedArea.append(foodSavedSearches);
//---------------- Saved individuals --------------------//

let foodSavedSearch1 = $(
  `<button class="btn btn-primary" id="foodSavedSearch1">${localStorage.getItem(
    "foodSearch1"
  )}</button>`
);
foodSavedSearches.append(foodSavedSearch1);
// Use local storage to save search
// set local storage to sturcure currentl in use by gaston

let foodSavedSearch2 = $(
  `<button class="btn btn-primary" id="foodSavedSearch2">${localStorage.getItem(
    "foodSearch2"
  )}</button>`
);
foodSavedSearches.append(foodSavedSearch2);
// Use local storage to save search
// set local storage to sturcure currentl in use by gaston

let foodSavedSearch3 = $(
  `<button class="btn btn-primary" id="foodSavedSearch3">${localStorage.getItem(
    "foodSearch3"
  )}</button>`
);
foodSavedSearches.append(foodSavedSearch3);
// Use local storage to save search
// set local storage to sturcure currentl in use by gaston

let foodSavedSearch4 = $(
  `<button class="btn btn-primary" id="foodSavedSearch4">${localStorage.getItem(
    "foodSearch4"
  )}</button>`
);
foodSavedSearches.append(foodSavedSearch4);
// Use local storage to save search
// set local storage to sturcure currentl in use by gaston

let foodSavedSearch5 = $(
  `<button class="btn btn-primary" id="foodSavedSearch5">${localStorage.getItem(
    "foodSearch5"
  )}</button>`
);
foodSavedSearches.append(foodSavedSearch5);
// Use local storage to save search
// set local storage to sturcure currentl in use by gaston

//---------------- Clear Saved searches --------------------//
let foodClearArea = $(
  `<div class="container mt-5 custom-container" id="foodClearSearch"></div>`
);
foodDisplay.append(foodClearArea);
// //---------------- Clear search history --------------------//
let foodClearSearch = $(
  `<button class="btn btn-primary" id="foodClearSearch">Clear Search History</button>`
);
foodClearArea.append(foodClearSearch);

// Link function to clear saved searches from local storage

//to do:

//add function to clear search history
//add function to clear saved searches from local storage
//change to API access logic where stated
//ensure info form food API is displayed where necessary
//line 89 set click event to determine food video link
