import { DOMSelectors } from "./DOM";
import { genre } from "./genre";

const key = "YOURKEYHERE";

const query = async function() {
    try {
        const response = await fetch(
            `https://api.jikan.moe/v3/genre/anime/4/1`
        );
        const data = await response.json();
        data.results.forEach((anime) => {
            "beforeend",      
            `<div class="anime-card">
            <div class="anime-card-front">
              <img
                src="https://cdn.myanimelist.net/images/anime/1208/94745l.jpg"
                alt=""
                class="poster"
              />
            </div>
            <div class="anime-card-back">
              <h3 class="anime-card-header">${anime.title}</h3>
              <div class="score-box">
                <p class="user-score">${anime.score}</p>
              </div>
    
              <div class="release-box">
                <p class="release-date">Finished Airing</p>
                <p class="release-date">${anime.airing_start}</p>
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
        });
    } catch (error) {
        console.log(error);
        alert("Something dun goofed up!");
    }
}

query();