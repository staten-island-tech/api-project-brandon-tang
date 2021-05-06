import { DOMSelectors } from "./DOM";
import { genre } from "./genre";

const key = "YOURKEYHERE";

const query = async function() {
    try {
        const response = await fetch(
            `https://api.jikan.moe/v3/anime/5114`
        );
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
        alert("Something dun goofed up!");
    }
}

query();