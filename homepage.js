

async function searchMovies() {
    console.log("Check")

    try {
        let query = document.getElementById("query").value;
        let res = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=1fa8952c&s=${query}`);
        let data = await res.json();
        console.log("➡️   ~ file: search.js ~ line 11 ~ searchMovies ~ data", data);
        let actual_data = data.Search;
        appendMovies(actual_data);
    }
    catch (err) {
        console.log("➡️   ~ file: search.js ~ line 13 ~ searchMovies ~ err", err);
    }
}



function appendMovies(data) {
 
    if(data===undefined){
        return false
    }
    let data_div = document.getElementById("movies") || []

    data_div.innerHTML = null;


    data.forEach(function (ele) {
        if (ele.Poster == "N/A") {
            ele.Poster = "https://lh3.googleusercontent.com/drive-viewer/AJc5JmTP6TOwlyMHtH7CBF4hUZxctAGWua0kyPm5htG0ZzwbnTfUBwMMCDC4Q-txJZ-dQWAa6k-TZo0=w1920-h1007"
        }
        let div = document.createElement('div');
        div.id="main"

        let p_name = document.createElement('p');
        p_name.innerHTML = `Name: ${ele.Title}`;

        let p_rating = document.createElement("p");
        p_rating.innerHTML = `Year: ${ele.Year}`;


        let img = document.createElement('img');
        img.id = "poster";
        img.src = ele.Poster;
        img.addEventListener("click",function(){
            console.log("check")

            let movieDetails = {
                name:`${ele.Title}`,
                image:`${ele.Poster}`,
                year:`${ele.Year}`,
                type:`${ele.Type}`,
            }
            
            localStorage.setItem("movieDetails",JSON.stringify(movieDetails));
            window.location.href="detais.html"
        })

        div.append(img,p_name, p_rating);
        data_div.append(div)
    });
}

let id;
function debaunce(func,delay){

    if(id){
        clearTimeout(id);
    }
   id = setTimeout(function() {
        func()
    }, delay);

}