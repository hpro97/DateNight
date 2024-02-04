//-----------------------film section-----------------------//

let filmSection = $('#film');
filmSection.addClass('container-section');

	//-----------------------film display-------------------//

	let filmDisplay = $(`<div class="container text-center custom-container" id="filmDisplay"></div>`);
	filmSection.append(filmDisplay);

		//------------------search section-------------------//
		let searchArea = $(`<div class="row" id="searchArea"></div>`);
		filmDisplay.append(searchArea);
			//------------------search display---------------//
			let searchDisplay = $(`<div class="col" id="columnSearch"></div>`);
			searchArea.append(searchDisplay);
			
				//------------------search bars/buttons------//
				let searchBar1 = $(`<input type="text" class="searchBar" id="searchBar1" placeholder="Title"></input>`);
				searchDisplay.append(searchBar1);

				let searchButton1 = $(`<button class="btn btn-primary" id="searchButton1">Search</button>`);
				searchDisplay.append(searchButton1);

				let searchBar2 = $(`<input type="text" class="searchBar" id="searchBar2" placeholder="Genre"></input>`);
				searchDisplay.append(searchBar2);

				let searchButton2 = $(`<button class="btn btn-primary" id="searchButton2">Search</button>`);
				searchDisplay.append(searchButton2);

		//------------------display section-------------------//
		let displayArea = $(`<div class="col" id="columnDisplay"></div>`);
		filmDisplay.append(displayArea);
			// Result buttons with movie posters
			//------------------buttons section---------------//
			


		//------------------description section-------------------//
		let descriptionArea = $(`<div class="col" id="columnDescription"></div>`);
		filmDisplay.append(descriptionArea);
			// ----------------info dump-------------------------//
			let titleDisplay = $(`<h3 id=info-title></h3>`);
			descriptionArea.append(titleDisplay);

			let synopsisDisplay = $(`<p id=info-synopsis></p>`);
			descriptionArea.append(synopsisDisplay);

			let yearDisplay = $(`<p id=info-year></p>`);
			descriptionArea.append(yearDisplay);

			let imdbRatingDisplay = $(`<p id=info-imdb></p>`);
			descriptionArea.append(imdbRatingDisplay);

		//------------------saved section--------------------------//
		let savedArea = $(`<div class="container mt-5 custom-container" id="savedSearchButtons"></div>`);
		filmDisplay.append(savedArea);
			//---------------- Saved searches --------------------//
			let savedSearches = $(`<div class="row" id="savedSearches"></div>`);
			savedArea.append(savedSearches);
				//---------------- Saved individuals --------------------//
			
				// Link function to clear saved searches from local storage
