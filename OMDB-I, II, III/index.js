
async function getData(){
    let movie = document.querySelector("#search").value
   
    const url = `https://www.omdbapi.com/?t=${movie}&apikey=c69ce8b`
   
    
    let res = await fetch(url)
    let data = await res.json()
    console.log(data)

    if(data.Response == 'False'){
        console.log('hello there')
        // alert("movies not found")
        document.querySelector('#container').innerHTML = null
        let err = document.createElement("img")
        err.src = `https://i.gifer.com/origin/b4/b45c26b5f4a2c92454f11adf69eba59e_w200.webp`;
        
        alert("movies not found")
      
        document.querySelector('#container').append(err)
    }
    else{

        append(data)
    }
}

// getData()

function append(data){

    let container = document.querySelector("#container")

    container.innerHTML = null
    
    let poster = document.createElement("img")
    poster.src = data.Poster
    poster.setAttribute("class", 'poster')

    let text = document.createElement("div")
    text.setAttribute('class', 'box')

    let released = document.createElement("p")
    released.innerText = `Released: ${data.Released}`
    released.setAttribute("class", 'date')

    let genre = document.createElement("p")
    genre.innerText = data.Genre
    genre.setAttribute("class", 'genre')

    let name = document.createElement("p")
    name.innerText = data.Title
    name.setAttribute("class", 'name')

    let plot = document.createElement("p")
    plot.innerText = data.Plot
    plot.setAttribute("class", 'plot')

    let rating = document.createElement("p")
    rating.innerText = `IMDB Rating: ${data.imdbRating}`
    rating.setAttribute("class", 'rating')

    if(data.imdbRating > 8.5){
        rating.innerHTML = `<p class="rating">IMDB Rating: ${data.imdbRating} Recommended</p>`
    }

    text.append(released, genre, name, plot, rating)
    container.append(poster,text)
}


document.querySelector("#lh").addEventListener("click", lhFunction);

function lhFunction(){
    
    let sortLow = data.sort(function (x,y){
        return x.released - y.released
    })

    displayData(data)
     
}

document.querySelector("#hl").addEventListener("click", highFunction);

function highFunction(){
    
    let sortHigh = data.sort(function (x,y){
        return y.released - x.released
    })

    append(data)
}