//-----------------------film section-----------------------//

let filmSection = $('#film');

	//-----------------------film display-------------------//

	let filmDisplay = $(`<div class="container text-center custom-container"></div>`);
	filmSection.append(filmDisplay);

		//------------------search section-------------------//
		let searchArea = $(`<div class="row"></div>`);
		filmDisplay.append(searchArea);
			//------------------search display---------------//
			let searchDisplay = $(`<div class="col" id="columnSearch"></div>`);
			searchArea.append(searchDisplay);
			
				//------------------search bars/buttons------//
				let searchBar1 = $(`<input type="text" class="searchBar" id="searchBar1" placeholder="Search 1"></input>`);
				searchDisplay.append(searchBar1);

				let searchButton1 = $(`<button class="btn btn-primary" id="searchButton1">Search</button>`);
				searchDisplay.append(searchButton1);

				let searchBar2 = $(`<input type="text" class="searchBar" id="searchBar2" placeholder="Search 2"></input>`);
				searchDisplay.append(searchBar2);

				let searchButton2 = $(`<button class="btn btn-primary" id="searchButton2">Search</button>`);
				searchDisplay.append(searchButton2);

		//------------------display section-------------------//
		let displayArea = $(`<div class="col" id="columnDisplay"></div>`);
		filmDisplay.append(displayArea);
			// Result buttons with movie posters
			//------------------buttons section---------------//
			let resultButton1 = $(`<button class="btn btn-primary" id="resultButton1">${filmName[0]}</button>`);
			let path1 = result.poster.url[0];
			let imageUrl1 = path1;
			resultButton1.css('background-image', `url("${imageUrl1}")`);
			displayArea.append(resultButton1);

			// Repeat for resultButton2 to resultButton5
			let resultButton2 = $(`<button class="btn btn-primary" id="resultButton2">${filmName[1]}</button>`);
			let path2 = result.poster.url[1];
			let imageUrl2 = path2;
			resultButton2.css('background-image', `url("${imageUrl2}")`);
			displayArea.append(resultButton2);

			let resultButton3 = $(`<button class="btn btn-primary" id="resultButton3">${filmName[2]}</button>`);
			let path3 = result.poster.url[2];
			let imageUrl3 = path3;
			resultButton3.css('background-image', `url("${imageUrl3}")`);
			displayArea.append(resultButton3);

			let resultButton4 = $(`<button class="btn btn-primary" id="resultButton4">${filmName[3]}</button>`);
			let path4 = result.poster.url[3];
			let imageUrl4 = path4;
			resultButton4.css('background-image', `url("${imageUrl4}")`);
			displayArea.append(resultButton4);

			let resultButton5 = $(`<button class="btn btn-primary" id="resultButton5">${filmName[4]}</button>`);
			let path5 = result.poster.url[4];
			let imageUrl5 = path5;
			resultButton5.css('background-image', `url("${imageUrl5}")`);
			displayArea.append(resultButton5);



		//------------------description section-------------------//
		let descriptionArea = $(`<div class="col" id="columnDescription"></div>`);
		filmDisplay.append(descriptionArea);
			// ----------------info dump-------------------------//
			let titleDisplay = $(`<h3>${film.title}</h3>`);
			descriptionArea.append(titleDisplay);

			let synopsisDisplay = $(`<p>${film.synopsis}</p>`);
			descriptionArea.append(synopsisDisplay);

			let yearDisplay = $(`<p>Year: ${film.year}</p>`);
			descriptionArea.append(yearDisplay);

			let imdbRatingDisplay = $(`<p>IMDb Rating: ${film.imdbRating}</p>`);
			descriptionArea.append(imdbRatingDisplay);

		//------------------saved section--------------------------//
		let savedArea = $(`<div class="container mt-5 custom-container" id="savedSearchButtons"></div>`);
		filmDisplay.append(savedArea);
			//---------------- Saved searches --------------------//
			let savedSearches = $(`<div class="row" id="savedSearches"></div>`);
			savedArea.append(savedSearches);
				//---------------- Saved individuals --------------------//
				let savedSearch1 = $(`<button class="btn btn-primary" id="savedSearch1">${localStorage.getItem('search1')}</button>`);
				savedSearches.append(savedSearch1);
				// Use local storage to save search

				let savedSearch2 = $(`<button class="btn btn-primary" id="savedSearch2">${localStorage.getItem('search2')}</button>`);
				savedSearches.append(savedSearch2);
				// Use local storage to save search

				let savedSearch3 = $(`<button class="btn btn-primary" id="savedSearch3">${localStorage.getItem('search3')}</button>`);
				savedSearches.append(savedSearch3);
				// Use local storage to save search

				let savedSearch4 = $(`<button class="btn btn-primary" id="savedSearch4">${localStorage.getItem('search4')}</button>`);
				savedSearches.append(savedSearch4);
				// Use local storage to save search

				let savedSearch5 = $(`<button class="btn btn-primary" id="savedSearch5">${localStorage.getItem('search5')}</button>`);
				savedSearches.append(savedSearch5);
				// Use local storage to save search
				
				//---------------- Clear search history --------------------//
				let clearSearch = $(`<button class="btn btn-primary" id="clearSearch">Clear Search History</button>`);
				savedSearches.append(clearSearch);
				// Link function to clear saved searches from local storage
