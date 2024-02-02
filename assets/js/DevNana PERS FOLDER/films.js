const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '20d6a28e37mshb3aada0fe204a5cp1d1a43jsnfd23db6971f8',
		'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
	}
};


function start(event){
    event.preventDefault()
    // will not by in the start function

   // getGenre()

   search()
}









//function for Search
function search(){
    let inputVal = $('#input-val').val()
    



    const url = `https://ott-details.p.rapidapi.com/search?title=${inputVal}&page=1&type=movie`






    fetch(url,options)
    .then(function(response){
     return response.json()
      })
   .then(function(data){

console.log(data)
    // filters to only shows objects with the key imageurl and has a value inside of the array
    let link = data.results.filter(x=>x.hasOwnProperty('imageurl') && x.imageurl.length !== 0)

     for(let i = 0; i< link.length; i++){

        //creating a div card
        let placeHolder  = $('<div>')
        
        //create image placeholder
        let image = $('<img>')
        image.attr('id','image')


        //button to show cast
        let summary = $('<button>')

       





    
        // if image url doesn't work loads a replacement image
        const img = $("#image")
img.each (function(){
img.on("error", function(event) {
  event.target.src = "https://t4.ftcdn.net/jpg/02/97/01/65/360_F_297016511_NWrJG1s3mpyjqD3hwdKidfYsvhEnrPm4.jpg"
  event.onerror = null
})

})


      // create title
        let title = $('<p>')



        // adds title of thee movie from the api
        title.text(link[i].title)

        //adds image link to src so image shows
        image.attr('src',link[i].imageurl[0])

        summary.addClass('summary')
        summary.text('summary')
        summary.attr('data-id', link[i].imdbid)
        


        

// appending image and title into the div card
        placeHolder.append(title)
        placeHolder.append(image)
        placeHolder.append(summary)

        //appending into the div
        $('#movie-info').append(placeHolder)
        


     }

     
      })


}





// function for genre 
function getGenre(){
    



    // url to get list of genres in an array
 let url =  'https://ott-details.p.rapidapi.com/getParams?param=genre';



fetch(url,options)
    .then(function(response){
       return response.json()
  })
  .then(function(data){
      //console.log(data)
      

      // for loop to create options element for  the dropdown menu
      for(let i = 0; i < data.length; i++){

        let tag = $('<option>')
         tag.text(data[i])
         tag.attr("data-num",data[i])
         $('#genre-input').append(tag)

     }
   })
}



// Targets the select element where the dropdown options are
let test = $('#genre-input')

// added an eventlistener that launches when an option is change
      test.change(function(){
       let selectedOption = $(this).val()

       // finds the dataset for the option selected
      let selectedOptionData = $(this).find('option:selected').data('num')


     // pushes the result to a function
      movieOption(selectedOptionData)
 })





 function movieOption(genre){

//gets the genre parameter and puts it into the link
     const url = `https://ott-details.p.rapidapi.com/advancedsearch?start_year=1970&end_year=2024&min_imdb=0&max_imdb=10&genre=${genre}&language=english&type=movie&sort=latest&page=1`;
    
    
    
              fetch(url,options)
             .then(function(response){
              return response.json()
               })
            .then(function(data){


                    // filters to only shows objects with the key imageurl and has a value inside of the array
    let link = data.results.filter(x=>x.hasOwnProperty('imageurl') && x.imageurl.length !== 0)

    console.log(link)
    for(let i = 0; i< link.length; i++){

       //creating a div card
       let placeHolder  = $('<div>')
       
       //create image placeholder
       let image = $('<img>')
       image.attr('id','image')

        //button to show cast
        let summary = $('<button>')


       // if image url doesn't work loads a replacement image
       const img = $("#image")
       img.each (function(){
      img.on("error", function(event) {
      event.target.src = "https://t4.ftcdn.net/jpg/02/97/01/65/360_F_297016511_NWrJG1s3mpyjqD3hwdKidfYsvhEnrPm4.jpg"
      event.onerror = null
})

})


     // create title
       let title = $('<p>')



       // adds title of thee movie from the api
       title.text(link[i].title)

       //adds image link to src so image shows
       image.attr('src',link[i].imageurl[0])

       
       summary.addClass('summary')
       summary.text('summary')
       summary.attr('data-id', link[i].imdbid)
       


       

// appending image and title into the div card
       placeHolder.append(title)
       placeHolder.append(image)
       placeHolder.append(summary)

       //appending into the div
       $('#movie-info').append(placeHolder)


    }

    
     
      })


            
    
     }


     $('#movie-info').on('click','.summary',findCast)



     function findCast(info){


        
      let parent = $(this).parent()

         const url = `https://ott-details.p.rapidapi.com/gettitleDetails?imdbid=${currentButton}`

console.log(url)



         fetch(url,options)
          .then(function(response){
              return response.json()
          })
          .then(function(data){
            let rating = $('<p>')
            let released = $('<p>')
            let runtime = $('<p>')
            let synopsis = $('<p>')

            rating.text(`Rating: ${data.imdbrating}/10 stars` )
            released.text(`Release Year: ${data.released}`)
            runtime.text(`Runtime: ${data.runtime}`)
            synopsis.text(`Synopsis ${data.synopsis}`)






          

            parent.append(rating)
            parent.append(released)
            parent.append(runtime)
            parent.append(synopsis)
          })

     }

