import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import "../styles/movie-cards.css";
import { addMovieToLocalStorage, removeMovieFromLocalStorage } from "../helpers.js/handleLocalStorage";

import thumbsEmpty from "../graphics/thumbs-up-empty-1.png";
import thumbsFull from "../graphics/thumbs-up-full-1.png";

const MovieCards = ({movie, index}) => {
    const [movieItems, setMovieItems] = useState(null);

    const formatDate = dt => {
        const d = new Date(dt);
        const year = d.getFullYear();
        const month = d.toLocaleString('default', { month: 'short' });
        const day = d.getDate();

        return `${month} ${day}, ${year}`;
    }


    useEffect(() => {
        // console.log("movie: ", movie);
        const tempMovie = ({
            id: movie.id,
            poster_path: movie.poster_path,
            title: movie.title,
            vote_average: movie.vote_average,
            release_date: formatDate(movie.release_date),
            overview: movie.overview,
            backdrop_path: movie.backdrop_path,
            isFavourite: movie.isFavourite ? true : false
        });

        setMovieItems(tempMovie);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    

    const favoriteAMovie = () => {
        if (movieItems.isFavourite) {
            setMovieItems({...movieItems, isFavourite: false});
            removeMovieFromLocalStorage(movieItems.id);
        } else {
            const newObject = {...movieItems, isFavourite: true};
            setMovieItems(newObject);
            addMovieToLocalStorage(newObject);
        }
    };


    const Card = () => {    
        return (
            <section 
                key = { index }
                className = {"mc-frame"}
            >
                <div className = "mc-top-container">
                    <Link 
                        to = {`/individual/${movie.id}`}
                        state = {{ movie: movieItems }}
                        className = "mc-figure"
                    >
                        <figure>
                            <img src = {movieItems.poster_path} alt={movieItems.title} />
                        </figure>
                    </Link>

                    <div className = {"mc-info-box"}>
                        <p className = "mc-info-items-title ">{ movieItems.title }</p>

                        <div className = "mc-rating-container">
                            <Rating 
                                initialValue={movieItems.vote_average / 2}
                                allowFraction
                                fillColor="gold"
                                readonly
                                size={25}
                            />
                            <span 
                                // title = {`${movieItems.vote_average} out of 10 rating`}
                                title = "Rating"
                            >
                                    { `${movieItems.vote_average * 10}%`}
                            </span>
                        </div>

                        <p title = "Release date">
                            { movieItems.release_date }
                        </p>

                        <div className = "mc-favourite-container">
                            <img 
                                src = {movieItems.isFavourite ? thumbsFull : thumbsEmpty} 
                                alt = "Click to favorite a movie"
                                title = {`Click to ${movieItems.isFavourite ? 'un' : ''}favorite this movie`}
                                onClick = {() => favoriteAMovie() }
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <p className = "mc-item-description">
                        { movieItems.overview }
                    </p>
                    
                    <button className = "mc-button">
                        <Link 
                            to = {`/individual/${movie.id}`}
                            state = {{ movie: movieItems }}
                            className = "mc-button-link"
                        >
                            Additional info 
                        </Link>
                    </button>
                </div>
            
            </section>
        );
    };
    

    return (
        <>
            { movieItems && <Card /> }
        </>
    );
};


export default MovieCards;

// Each movie should display the following information:
//  The movie’s poster
// • If a poster is not available, then you should load a generic placeholder image
//  The movie’s title
//  The movie’s release date
//  The movie’s rating (review rating – example: 67%)
//  A short summary about the movie
//  A “More Info” button that the user can click on to get additional information on the individual movie page
// • Optionally the entire movie listing can be clickable to the individual movie page