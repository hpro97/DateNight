// https://rapidapi.com/apidojo/api/tasty

const url = 'https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=chicken%20soup';
//auto complete 
//const url = 'https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=chicken%20soup';
//list
//const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes';
//Get more information of recipe if available, such as : ingredients, nutrition info, preparation, etc…
//const url = 'https://tasty.p.rapidapi.com/recipes/get-more-info?id=8138';
//tips
//const url = 'https://tasty.p.rapidapi.com/tips/list?id=3562&from=0&size=30';
//tags
//const url = 'https://tasty.p.rapidapi.com/tags/list';
//feed
//const url = 'https://tasty.p.rapidapi.com/feeds/list?size=5&timezone=%2B0700&vegetarian=false&from=0';
//recipie/detail
//const url = 'https://tasty.p.rapidapi.com/recipes/detail?id=5586';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

//------------------------------------------------//
// https://rapidapi.com/movie-of-the-night-movie-of-the-night-default/api/streaming-availability/

const url = 'https://streaming-availability.p.rapidapi.com/countries';
//countries
// const url = 'https://streaming-availability.p.rapidapi.com/countries';
//genres
// const url = 'https://streaming-availability.p.rapidapi.com/genres';
//get by id
// const url = 'https://streaming-availability.p.rapidapi.com/get?output_language=en';
//search filter
// const url = 'https://streaming-availability.p.rapidapi.com/search/filters?services=netflix&country=%3CREQUIRED%3E&output_language=en&order_by=original_title&genres_relation=and&show_type=all';
//search title
// const url = 'https://streaming-availability.p.rapidapi.com/search/title?title=%3CREQUIRED%3E&country=%3CREQUIRED%3E&show_type=all&output_language=en';
//changes
// const url = 'https://streaming-availability.p.rapidapi.com/changes?change_type=new&services=netflix&target_type=show&country=%3CREQUIRED%3E&output_language=en';
//leaving
// const url = 'https://streaming-availability.p.rapidapi.com/leaving?target_type=show&services=netflix&country=%3CREQUIRED%3E&output_language=en';
//services
// const url = 'https://streaming-availability.p.rapidapi.com/services';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);