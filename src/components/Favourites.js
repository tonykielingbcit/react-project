import { useEffect, useState } from "react";
import { getAllFavouritesOnLocalStorage } from "../helpers.js/handleLocalStorage";
import MovieCards from "./MovieCards";
import "../styles/favourites.css";


const Favourites = () => {
    const [favMovies, setFavMovies] = useState(null);

    useEffect(() => {
        const allFavouriteMoviesOnLocalStorage = getAllFavouritesOnLocalStorage();
        setFavMovies(JSON.parse(allFavouriteMoviesOnLocalStorage));
    }, []);


    const MoviesList = () => {
        let temp = [];
        
        if (favMovies && favMovies.length > 0)
            for(let c = 0; c < favMovies.length; c++)
                temp.push (
                    <MovieCards
                        movie = { favMovies[c] }
                        key = { c }
                        index = { c }
                    />
                );
            
        return temp;
    }


    return(
        <>
            {favMovies && favMovies.length > 0
                ?
                    <article className = "hm-cards-frame">
                        {
                            <MoviesList />
                        }
                    </article>
                :
                    <div className = "f-no-favourites">
                        <h3>Sorry you have no favourited movies.</h3>
                        <h3>Return to the home page to add a favourite movie.</h3>
                    </div>
            }
        </>
    );
}

export default Favourites;

/*
"[
    {
        "date":"Oct 19, 2022",
        "poster":"https://image.tmdb.org/t/p/w500/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
        "title":"Black Adam",
        "excerpt":"Nearly 5,000 years after he was bestowed with the almighty powers of ...",
        "overview":"Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
        "id":436270,
        "rate":7.3,
        "bgimg":"https://image.tmdb.org/t/p/w1280/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
        "genres":" Action, Fantasy, Science Fiction",
        "rateStars":"/movie-app-01/assets/images/four.png"
    }
]"
*/