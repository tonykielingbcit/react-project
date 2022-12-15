import { useEffect, useState } from "react";
import "../styles/home.css";
import env from "react-dotenv";
import MovieCards from "./MovieCards";
import { getAllFavouritesOnLocalStorage } from "../helpers.js/handleLocalStorage";

// all fetch data options to get and display list of movies
const LIST_OF_OPTIONS = [
    {
        // https://developers.themoviedb.org/3/movies/get-popular-movies
        key: 0,
        label: "Top Most Popular",
        url: `https://api.themoviedb.org/3/movie/popular?api_key=${env.TMDB_KEY}&language=en-US&page=1`
    },
    {
        // https://developers.themoviedb.org/3/movies/get-top-rated-movies
        key: 1,
        label: "Top Rated",
        url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${env.TMDB_KEY}&language=en-US&page=1`
    },
    {
        // label: "RECENTLY RELEASED",
        // url: "https://developers.themoviedb.org/3/movies/get-latest-movie"
        // url: `https://api.themoviedb.org/3/movie/latest?api_key=${env.TMDB_KEY}&language=en-US`
        
        // https://developers.themoviedb.org/3/movies/get-now-playing
        key: 2,
        label: "Now Playing",
        url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${env.TMDB_KEY}&language=en-US&page=1`
    },
    {
        // https://developers.themoviedb.org/3/movies/get-upcoming
        key: 3,
        label: "Upcoming Movies",
        url: `https://api.themoviedb.org/3/movie/upcoming?api_key=${env.TMDB_KEY}&language=en-US&page=1`
    }
];


const Home = () => {
    const [titles, setTitles] = useState(null);
    const [favouritesOnLocalStorage, setFavouritesOnLocalStorage] = useState(null);
    const [dropdownOptions, setDropdownOptions] = useState(null);
    const [currentDropDownOption, setCurrentDropDownOption] = useState(null);
        
    // it fetches new movie list 
    // and update the variable responsable to hold them (titles)
    const fetchMovies = async(url) => {
        const getMovies = await fetch(url)
            .then((response) => response.json());
            // (`https://api.themoviedb.org/3/movie/popular?api_key=${env.TMDB_KEY}&language=en-US&page=1`)
        
        // console.log("url:: ", url, getMovies.results.length);
        return getMovies.results;
        // setTitles(getMovies.results);
    };


    // first run
    useEffect(() => {
        // get data from localstorage
        // the purpose is to pass this data down to <MovieCards>
        const allFavouriteMoviesOnLocalStorage = getAllFavouritesOnLocalStorage();
        if (allFavouriteMoviesOnLocalStorage) {
            const tempFavourites = JSON.parse(allFavouriteMoviesOnLocalStorage);
            const fols = tempFavourites.map(e => ({movieId: e.id})); // make it a small object, only ids
            setFavouritesOnLocalStorage(fols);
        }
        
        // it calls and set movies to titles variable
        const callFetchMovies = async() => {
            const movies = await fetchMovies(LIST_OF_OPTIONS[0].url);
            setTitles(movies);
        }

        callFetchMovies();
        setCurrentDropDownOption(LIST_OF_OPTIONS[0]);
        setDropdownOptions(LIST_OF_OPTIONS.filter(e => e.key !== 0));
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


    const handleMovieListOptions = async(ev) => {
        const tempObjectOption = LIST_OF_OPTIONS.filter(e => e.label === ev.target.value)[0];
        const movies = await fetchMovies(tempObjectOption.url);
        console.log("changemenu - movies", tempObjectOption.url, movies);
        setTitles(movies);
        setDropdownOptions(LIST_OF_OPTIONS.filter(e => e.label !== ev.target.value));
        setCurrentDropDownOption(tempObjectOption);
    };

    const ButtonMovieListOptions = () => {
        if (currentDropDownOption && dropdownOptions)
            return (
                <select 
                    onChange = {handleMovieListOptions}
                    className = "hm-drop-down" 
                >
                    <option key={currentDropDownOption.key} value={currentDropDownOption.label}> { currentDropDownOption.label } </option>
                        {dropdownOptions.map((item, i) => <option key={i} value={item.label}> {item.label} </option>)}
                </select>
            );
    };

    return(
        <>
            <ButtonMovieListOptions />
            <article className = "hm-cards-frame">
                <MoviesList />
            </article>
        </>
    );
}

export default Home;