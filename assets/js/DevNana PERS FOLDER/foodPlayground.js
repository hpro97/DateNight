const foodOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0d2479b0d8mshd2a6bf887a9d146p10059fjsnb66549023be2',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};


$('#foodSearchButton1').on('click',searchFood)



function searchFood(event){
event.preventDefault()
    $('#foodColumnDisplay').empty()
    let inputFood = $('#foodSearchBar1').val()

    foodButtonCreate(inputFood)

    const url = `https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&q=${inputFood}`;



fetch(url, foodOptions)
.then(function (response) {
  return response.json();
})
.then(function (data) {
    console.log(data)
    console

    for(let i=0; i<5; i++){
        let foodButton = $('<button>')
        foodButton.text(data.results[i].name)
        foodButton.css('background-image', `url(${data.results[i].thumbnail_url})`)
        foodButton.attr('data-food',data.results[i].id)
        foodButton.addClass('getMore')
        foodButton.css({
            "width": "182px",
            "height": "268px",
            "background-size": "cover",
            "background-position": "center center",
            "padding": "10px",
            "margin": "10px",
            "border-radius": "10px",
            "color": "#808080",
            "font-family": "Arial, Helvetica, sans-serif",
            "text-transform": "uppercase",
            "font-weight": "bold",
            "font-size": "16px",
            "text-align": "center",
            "display": "inline-block",
            "flex-direction": "column",
            "justify-content": "flex-end",
        })


        $('#foodColumnDisplay').append(foodButton)
    }

    });

}



$('#foodColumnDisplay').on('click','.getMore', foodInfo)



function foodInfo(){

    let currentId = $(this).attr('data-food')


//$('#foodColumnDisplay').empty()
    const url = `https://tasty.p.rapidapi.com/recipes/get-more-info?id=${currentId}`;

    
    fetch(url, foodOptions)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        console.log(data)

        

let video = $('<iframe>')
video.attr('height', "420")
video.attr('width', '315')
video.attr('src', data.original_video_url)


$('#video-container').append(video)



let foodName = $('<h2>').text(data.name)
let foodNameDiv = $('#foodColumnDescription').append(foodName)


let foodDescriptionTitle = $('<h2>').text('Food Description')
let foodDescription = $('<p>').text(data.description)

$('#foodColumnDescription').append(foodDescriptionTitle)

 $('#foodColumnDescription').append(foodDescription)

let foodIngredientTitle = $('<h2>').text('Food ingredients')
 $('#foodColumnDescription').append(foodIngredientTitle)

//makes an ul
 let foodIngredientUnlist = $('<ul>')
 foodIngredientUnlist.attr('id','unordered-list')
 $('#foodColumnDescription').append(foodIngredientUnlist)

for(let i = 0; i< data.sections[0].components.length; i++){

    let ingredient = data.sections[0].components[i].ingredient.name

    let unlist = $('<li>')

    unlist.text(ingredient)

    $('#unordered-list').append(unlist)



}


let foodInstructionsTitle = $('<h2>').text('Instructions')
$('#foodColumnDescription').append(foodInstructionsTitle)



let foodInstructionsOrderList = $('<ol>')
foodInstructionsOrderList.attr('id','order-list')
$('#foodColumnDescription').append(foodInstructionsOrderList)



for(let i = 0; i< data.instructions.length; i++ ){

  let int = data.instructions
    let list = $('<li>')


    list.text(int[i].display_text)
    $('#order-list').append(list)

}
    

      
    
        })
    


}


function foodButtonCreate(foodValue){
    const foodButtonData ={
        foodText: foodValue
    }

    const exist = localStorage.getItem('foodSearches')
    const foodSearches = exist ? JSON.parse(exist) : [];

    let already = false

    for(let i = 0; i < foodSearches.length; i++){
        if(foodSearches[i].foodText === foodButtonData.foodText){
            already = true
            break
        }
    }

        if(!already){
            if(foodSearches.length >=5){
                foodSearches.shift()
            }

            foodSearches.push(foodButtonData)

            const foodSearchesJson = JSON.stringify(foodSearches)

            localStorage.setItem('foodSearches', foodSearchesJson)

            foodButtonRender() 
    }
}


function foodButtonRender(){

    const exist = localStorage.getItem('foodSearches')
    const foodSearches = exist ? JSON.parse(exist) : [];

    $('#foodSavedSearches').empty()

    foodSearches.forEach((foodButtonData)=>{
    const btn = $('<button>').text(foodButtonData.foodText)
   $('#foodSavedSearches').append(btn)

   btn.on('click', function(){

    const foodInput = foodButtonData.foodText
    const foodApiUrl = `https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&q=${foodInput}`
   $('#foodColumnDisplay').empty()
   
/////////////////////////////////////////////////////////// here
fetch(foodApiUrl, foodOptions)
.then(function (response) {
  return response.json();
})
.then(function (data) {
    console.log(data)
    console

    for(let i=0; i<5; i++){
        let foodButton = $('<button>')
        foodButton.text(data.results[i].name)
        foodButton.css('background-image', `url(${data.results[i].thumbnail_url})`)
        foodButton.attr('data-food',data.results[i].id)
        foodButton.addClass('getMore')
        foodButton.css({
            "width": "182px",
            "height": "268px",
            "background-size": "cover",
            "background-position": "center center",
            "padding": "10px",
            "margin": "10px",
            "border-radius": "10px",
            "color": "#808080",
            "font-family": "Arial, Helvetica, sans-serif",
            "text-transform": "uppercase",
            "font-weight": "bold",
            "font-size": "16px",
            "text-align": "center",
            "display": "inline-block",
            "flex-direction": "column",
            "justify-content": "flex-end",
        })


        $('#foodColumnDisplay').append(foodButton)
    }

    });
   })



    })

}

foodButtonRender()



$('#foodClearSearch').on('click', function (){

    localStorage.clear('foodSearches')
    foodButtonRender()

})