let foodSection = $('#food');
foodSection.addClass('container-section');

	//-----------------------food display-------------------//

	let foodDisplay = $(`<div class="container text-center custom-container" id="foodDisplay"></div>`);
	foodSection.append(foodDisplay);

		//------------------search section-------------------//
		let foodSearchArea = $(`<div class="row" id="foodSearchArea"></div>`);
		foodDisplay.append(foodSearchArea);
			//------------------search display---------------//
			let foodSearchDisplay = $(`<div class="col" id="foodColumnSearch"></div>`);
			foodSearchArea.append(foodSearchDisplay);
			
				//------------------search bars/buttons------//
				let foodSearchBar1 = $(`<input type="text" class="searchBar" id="foodSearchBar1" placeholder="ingredients/dish"></input>`);
				foodSearchDisplay.append(foodSearchBar1);

				let foodSearchButton1 = $(`<button class="btn btn-primary" id="foodSearchButton1">Search</button>`);
				foodSearchDisplay.append(foodSearchButton1);

			

				


		//------------------display section-------------------//
		let foodDisplayArea = $(`<div class="col" id="foodColumnDisplay"></div>`);
		foodDisplay.append(foodDisplayArea);
			//------------------buttons section---------------//
			
		//------------------video/picture section-------------------//
		let videoArea = $(`<div class="col" id="foodColumnVideoArea"></div>`);
		foodDisplay.append(videoArea);
			//------------------video/picture reuslt section--- ----//
			
			let videoResultArea = $(`
		<div id="video-container">
		</div>`);
			videoArea.append(videoResultArea);

		//------------------description section-------------------//
		let foodDescriptionArea = $(`<div class="col" id="foodColumnDescription"></div>`);
		foodDisplay.append(foodDescriptionArea);
			// ----------------info dump-------------------------//
			

			


		//------------------saved section--------------------------//
		let foodSavedArea = $(`<div class="container mt-5 custom-container" id="foodSavedSearchButtons"></div>`);
		foodDisplay.append(foodSavedArea);
			//---------------- Saved searches --------------------//
			let foodSavedSearches = $(`<div class="row" id="foodSavedSearches"></div>`);
			foodSavedArea.append(foodSavedSearches);
				//---------------- Saved individuals --------------------//
							
							// let foodSavedSearch1 = $(`<button class="btn btn-primary" id="foodSavedSearch1">${localStorage.getItem('foodSearch1')}</button>`);
							// foodSavedSearches.append(foodSavedSearch1);
							// // Use local storage to save search
							// // set local storage to sturcure currentl in use by gaston
			
							// let foodSavedSearch2 = $(`<button class="btn btn-primary" id="foodSavedSearch2">${localStorage.getItem('foodSearch2')}</button>`);
							// foodSavedSearches.append(foodSavedSearch2);
							// // Use local storage to save search
							// // set local storage to sturcure currentl in use by gaston
			
							// let foodSavedSearch3 = $(`<button class="btn btn-primary" id="foodSavedSearch3">${localStorage.getItem('foodSearch3')}</button>`);
							// foodSavedSearches.append(foodSavedSearch3);
							// // Use local storage to save search
							// // set local storage to sturcure currentl in use by gaston
			
							// let foodSavedSearch4 = $(`<button class="btn btn-primary" id="foodSavedSearch4">${localStorage.getItem('foodSearch4')}</button>`);
							// foodSavedSearches.append(foodSavedSearch4);
							// // Use local storage to save search
							// // set local storage to sturcure currentl in use by gaston
			
							// let foodSavedSearch5 = $(`<button class="btn btn-primary" id="foodSavedSearch5">${localStorage.getItem('foodSearch5')}</button>`);
							// foodSavedSearches.append(foodSavedSearch5);
							// // Use local storage to save search
							// // set local storage to sturcure currentl in use by gaston

			//---------------- Clear Saved searches --------------------//				
			let foodClearArea = $(`<div class="container mt-5 custom-container" id="foodClearSearch"></div>`);
			foodDisplay.append(foodClearArea);
							// //---------------- Clear search history --------------------//
							let foodClearSearch = $(`<button class="btn btn-primary" id="foodClearSearch">Clear Search History</button>`);
						foodClearArea.append(foodClearSearch);

				// Link function to clear saved searches from local storage

//to do:

//add function to clear search history
//add function to clear saved searches from local storage
//change to API access logic where stated
//ensure info form food API is displayed where necessary
//line 89 set click event to determine food video link
