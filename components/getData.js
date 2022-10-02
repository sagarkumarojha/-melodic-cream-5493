async function getMovies  (url) {
    try {
        let res = await fetch(url);
        let data = await res.json()
        data= data.results;
       return data;
    } catch (error) {
        console.log("🚀 ~ file: getData.js ~ line 7 ~ getMovies ~ error", error)
        
    }
  
  }
 async function appendMovies(data,data_div) {
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    data_div.innerHTML = null;
    data.forEach(function (ele) {
        
        let div = document.createElement('div');
        div.className = "subDiv"
        div.addEventListener("click",function(){
           
            let movieDeta = {
                name:`${ele.title}`,
                image:`${IMG_URL}${ele.poster_path}`,
                rating:`${ele.vote_average}`,
                details:`${ele.overview}`,
            }
            
            localStorage.setItem("movieDetails",JSON.stringify(movieDeta));
            window.location.href="page2.html"
        })

        let img = document.createElement('img');
        img.src=IMG_URL+ele.poster_path;
        img.style.height="300px";

        div.append(img,);
        data_div.append(div)

    });

}
async function appendMovies3(data,data_div) {
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    data_div.innerHTML = null;
    data.forEach(function (ele) {
        
        let div = document.createElement('div');
        div.className = "BigsubDiv"
        div.addEventListener("click",function(){
           
            let movieDeta = {
                name:`${ele.title}`,
                image:`${IMG_URL}${ele.poster_path}`,
                rating:`${ele.vote_average}`,
                details:`${ele.overview}`,
            }
            
            localStorage.setItem("movieDetails",JSON.stringify(movieDeta));
            window.location.href="page2.html"
        })

        let img = document.createElement('img');
        img.src=IMG_URL+ele.poster_path;
        img.style.height="1000px";

        div.append(img,);
        data_div.append(div)

    });

}

async function appendMovies2(data,data_div) {
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    data_div.innerHTML = null;
    data.forEach(function (ele) {
        
        let div = document.createElement('div');
        div.className = "subDiv"
        div.addEventListener("click",function(){
           
            let movieDeta = {
                name:`${ele.title}`,
                image:`${IMG_URL}${ele.poster_path}`,
                rating:`${ele.vote_average}`,
                details:`${ele.overview}`,
            }
            console.log(movieDeta.image)
            
            localStorage.setItem("movieDetails",JSON.stringify(movieDeta));
            window.location.href="page2.html"
        })

        let img = document.createElement('img');
        img.src=IMG_URL+ele.poster_path;
        img.style.height="300px";


        let rating = document.createElement('p');
        rating.innerText=ele.vote_average;
        rating.className = "rating"
        let name = document.createElement('p');
        name.innerText=ele.title;

        div.append(img,name,rating);
        data_div.append(div)

    });

}

  export {getMovies,appendMovies,appendMovies2,appendMovies3} 