//-----------------------food section-----------------------//

let foodSection = $('#food');

	//-----------------------food display-------------------//

	let foodDisplay = $(`<div class="container text-center custom-container"></div>`);
	foodSection.append(foodDisplay);

		//------------------search section-------------------//
		let foodSearchArea = $(`<div class="row"></div>`);
		foodDisplay.append(foodSearchArea);
			//------------------search display---------------//
			let foodSearchDisplay = $(`<div class="col" id="foodColumnSearch"></div>`);
			foodSearchArea.append(foodSearchDisplay);
			
				//------------------search fields/buttons------//
				let searchField1 = $(`<input type="text" class="searchField" id="searchField1" placeholder="By Cuisine Type"></input>`);
				foodSearchDisplay.append(searchField1);

				let searchBtn1 = $(`<button class="btn btn-primary" id="searchBtn1">Search</button>`);
				foodSearchDisplay.append(searchBtn1);
        
        let searchField2 = $(`<input type="text" class="searchField" id="searchField2" placeholder="By Dish name"></input>`);
				foodSearchDisplay.append(searchField2);

				let searchBtn2 = $(`<button class="btn btn-primary" id="searchBtn2">Search</button>`);
				foodSearchDisplay.append(searchBtn2);

        let searchField3 = $(`<input type="text" class="searchField" id="searchField3" placeholder="By ingredients"></input>`);
				foodSearchDisplay.append(searchField3);

				let searchBtn3 = $(`<button class="btn btn-primary" id="searchBtn3">Search</button>`);
				foodSearchDisplay.append(searchBtn3);
				

		//------------------display section-------------------//
		let foodDisplayArea = $(`<div class="col" id="foodColumnDisplay"></div>`);
		foodDisplay.append(foodDisplayArea);
        
			// Result buttons with food selected
			//------------------buttons section---------------//
// 			let resultButton1 = $(`<button class="btn btn-primary" id="resultButton1">${foodName[0]}</button>`);
// 			let path1 = result.poster.url[0];
// 			let imageUrl1 = path1;
// 			resultButton1.css('background-image', `url("${imageUrl1}")`);
// 			displayArea.append(resultButton1);

// 			// Repeat for resultButton2 to resultButton5
// 			let resultButton2 = $(`<button class="btn btn-primary" id="resultButton2">${foodName[1]}</button>`);
// 			let path2 = result.poster.url[1];
// 			let imageUrl2 = path2;
// 			resultButton2.css('background-image', `url("${imageUrl2}")`);
// 			displayArea.append(resultButton2);

// 			let resultButton3 = $(`<button class="btn btn-primary" id="resultButton3">${foodName[2]}</button>`);
// 			let path3 = result.poster.url[2];
// 			let imageUrl3 = path3;
// 			resultButton3.css('background-image', `url("${imageUrl3}")`);
// 			displayArea.append(resultButton3);

// 			let resultButton4 = $(`<button class="btn btn-primary" id="resultButton4">${foodName[3]}</button>`);
// 			let path4 = result.poster.url[3];
// 			let imageUrl4 = path4;
// 			resultButton4.css('background-image', `url("${imageUrl4}")`);
// 			displayArea.append(resultButton4);

// 			let resultButton5 = $(`<button class="btn btn-primary" id="resultButton5">${foodName[4]}</button>`);
// 			let path5 = result.poster.url[4];
// 			let imageUrl5 = path5;
// 			resultButton5.css('background-image', `url("${imageUrl5}")`);
// 			displayArea.append(resultButton5);



		//------------------food description section-------------------//
		let foodDescriptionArea = $(`<div class="col" id="foodColumnDescription"></div>`);
		foodDisplay.append(foodDescriptionArea);
			// ----------------info dump-------------------------//
			// let titleDisplay = $(`<h3>${film.title}</h3>`);
			// descriptionArea.append(titleDisplay);

// 			let synopsisDisplay = $(`<p>${film.synopsis}</p>`);
// 			descriptionArea.append(synopsisDisplay);

// 			let yearDisplay = $(`<p>Year: ${film.year}</p>`);
// 			descriptionArea.append(yearDisplay);

// 			let imdbRatingDisplay = $(`<p>IMDb Rating: ${film.imdbRating}</p>`);
// 			descriptionArea.append(imdbRatingDisplay);

		//------------------saved section--------------------------//
		let foodSavedArea = $(`<div class="container mt-5 custom-container" id="savedSearchBtns"></div>`);
		foodDisplay.append(foodSavedArea);
			//---------------- Saved searches --------------------//
			let foodSavedSearches = $(`<div class="row" id="foodSavedSearches"></div>`);
			foodSavedArea.append(foodSavedSearches);
				//---------------- Saved individuals --------------------//
				let foodSavedSearch1 = $(`<button class="btn btn-primary" id="foodSavedSearch1">${localStorage.getItem('search1')}</button>`);
				foodSavedSearches.append(foodSavedSearch1);
				// Use local storage to save search

				let foodSavedSearch2 = $(`<button class="btn btn-primary" id="foodSavedSearch2">${localStorage.getItem('search2')}</button>`);
				foodSavedSearches.append(foodSavedSearch2);
				// Use local storage to save search

				let foodSavedSearch3 = $(`<button class="btn btn-primary" id="foodSavedSearch3">${localStorage.getItem('search3')}</button>`);
				foodSavedSearches.append(foodSavedSearch3);
				// Use local storage to save search

				let foodSavedSearch4 = $(`<button class="btn btn-primary" id="foodSavedSearch4">${localStorage.getItem('search4')}</button>`);
				foodSavedSearches.append(foodSavedSearch4);
				// Use local storage to save search

				let foodSavedSearch5 = $(`<button class="btn btn-primary" id="foodSavedSearch5">${localStorage.getItem('search5')}</button>`);
				foodSavedSearches.append(foodSavedSearch5);
				// Use local storage to save search
				
				//---------------- Clear search history --------------------//
				let clearFoodSearch = $(`<button class="btn btn-primary" id="clearFoodSearch">Clear Search History</button>`);
				foodSavedSearches.append(clearFoodSearch);
				// Link function to clear saved searches from local storage