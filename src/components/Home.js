import { useEffect, useState } from "react";
import "../styles/home.css";
import env from "react-dotenv";
import MovieCards from "./MovieCards";
import { getAllFavouritesOnLocalStorage } from "../helpers.js/handleLocalStorage";

const Home = () => {
    const [titles, setTitles] = useState(null);
    const [favouritesOnLocalStorage, setFavouritesOnLocalStorage] = useState(null);
        
    useEffect(() => {
        
        const allFavouriteMoviesOnLocalStorage = getAllFavouritesOnLocalStorage();
        if (allFavouriteMoviesOnLocalStorage) {
            const tempFavourites = JSON.parse(allFavouriteMoviesOnLocalStorage);
            const fols = tempFavourites.map(e => ({movieId: e.id})); // make it a small object, only ids
            setFavouritesOnLocalStorage(fols);
        }

        const fetchData = async() => {
            const getMovies = await fetch
                (`https://api.themoviedb.org/3/movie/popular?api_key=${env.TMDB_KEY}&language=en-US&page=1`)
                    .then((response) => response.json());
                    
            setTitles(getMovies.results);
        };
        
        fetchData();
    }, []);


    const MoviesList = () => {
        let temp = [];
        
        if (titles && titles.length > 0) {
            // in order to get exact 12 movies at a time
            for(let c = 0; c < 12; c++) {
                if (favouritesOnLocalStorage)
                    for (let i of favouritesOnLocalStorage)
                        if (i.movieId === titles[c].id)
                            titles[c] = {...titles[c], isFavourite: true}

                titles[c] = {
                    ...titles[c], 
                    poster_path: `https://image.tmdb.org/t/p/w300/${titles[c].poster_path}`,
                    backdrop_path: `https://image.tmdb.org/t/p/original/${titles[c].backdrop_path}`
                };
                // titles[c] = {...titles[c], poster_path: `https://image.tmdb.org/t/p/w300/${titles[c].poster_path}`};
                // "https://image.tmdb.org/t/p/w300/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg"
                        
                temp.push (
                    <MovieCards
                        movie = { titles[c] }
                        key = { c }
                        index = { c }
                    />
                );
            }
        }
            
            
        return temp;
    }

    return(
        <article className = "hm-cards-frame">
            {
                <MoviesList />
            }
        </article>
    );
}

export default Home;