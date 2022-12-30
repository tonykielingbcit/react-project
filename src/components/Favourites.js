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
