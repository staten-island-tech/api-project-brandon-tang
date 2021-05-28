import { DOMSelectors } from "./DOM";
import { genre } from "./genre";

// let genreNumber = 1;
let genreId = 1;
let pageNo = 1;
const query = async function() {
  // const genreId = genreNumber
    DOMSelectors.grid.innerHTML = "";
    try {
        const response = await fetch(
            `https://api.jikan.moe/v3/genre/anime/${genreId}/${pageNo}`
        );
        const data = await response.json();
        data.anime.forEach((element) => {
          DOMSelectors.grid.insertAdjacentHTML(
            "beforeend",      
            `<div class="anime-card">
            <div class="anime-card-front">
              <img
                src="${element.image_url}"
                alt="Poster of ${element.title}"
                class="poster"
              />
            </div>
            <div class="anime-card-back">
              <h4 class="anime-card-header">${element.title}</h4>
              <div class="score-box">
                <p class="user-score">${element.score}/10</p>
              </div>

              <div class="anime-members-box">
                <p class="anime-members">Members - ${element.members}</p>
              </div>

              <div class="release-box">
                <p class="release-date">${dateFormat(element.airing_start)}</p>
                <p class="release-date">${timeFormat(element.airing_start)}</p>
              </div>
    
              <div class="anime-genres">
                <li class="anime-genre">Action</li>
                <li class="anime-genre">Military</li>
                <li class="anime-genre">Adventure</li>
                <li class="anime-genre">Comedy</li>
                <li class="anime-genre">Drama</li>
                <li class="anime-genre">Magic</li>
                <li class="anime-genre">Fantasy</li>
                <li class="anime-genre">Shounen</li>
              </div>
            </div>
          </div>`
          )
        }); 

    } catch (error) {
        console.log(error);
        alert("Something dun goofed up!");
    }
}

query();

const nextPage = function() {
  DOMSelectors.pageNext.addEventListener("click", function (){
    pageNo ++;
    query();
  })

}

nextPage();

const prevPage = function() {
  DOMSelectors.pagePrev.addEventListener("click", function (){
    pageNo --;
    query();
  })

}

prevPage();

//danger dont go to genreId = 12 lol :/
const nextGenre = function() {
  DOMSelectors.genreNext.addEventListener("click", function(){
    /* if (genreId = 11) {
      genreId += 2;
      query(genreId);
    } else { */
      // working for a while, still could not figure out why applying logic wouldn't work..
    genreId ++;
    query();
  })

}

nextGenre();

const prevGenre = function() {
  DOMSelectors.genrePrev.addEventListener("click", function (){
    genreId --;
    query();
  })

}

prevGenre();


// thank you internet, this formats the datestrings that are used. 
const dateFormat = function (airformat) {
    return new Date(airformat).toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

const timeFormat = function (airformat) {
    return new Date(airformat).toLocaleTimeString(undefined, {
      hour: "numeric",
      minute: "numeric",
    });
  };
