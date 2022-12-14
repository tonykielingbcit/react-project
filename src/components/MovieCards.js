import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import "../styles/movie-cards.css";

import thumbsEmpty from "../graphics/thumbs-up-empty-1.png";
import thumbsFull from "../graphics/thumbs-up-full-1.png";

const MovieCards = ({movie, index}) => {
    const [movieItems, setMovieItems] = useState(null);
    const [isFavourite, setIsFavourite] = useState(null);


    const formatDate = dt => {
        const d = new Date(dt);
        const year = d.getFullYear();
        const month = d.toLocaleString('default', { month: 'short' });
        const day = d.getDate();

        return `${month} ${day}, ${year}`;
    }


    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        movie = ({
            id: movie.id,
            poster_path: movie.poster_path,
            title: movie.title,
            vote_average: movie.vote_average,
            release_date: formatDate(movie.release_date),
            overview: movie.overview,
            // isFavourite: localStorage.getItem(movie.id) ? true : false
        });

        setIsFavourite(localStorage.getItem(movie.id) ? true : false);
        setMovieItems(movie);
    }, []);
    

    const favoriteAMovie = () => {
        if (isFavourite) {
            localStorage.removeItem(movieItems.id);
            setIsFavourite(false);
        } else {
            localStorage.setItem(movieItems.id, 1);
            // setMovieItems({...movieItems, movieItems.isFavourite})
            setIsFavourite(true);
        }
    }

    const Card = () => {    
        return (
            <section 
                key = { index }
                className = {"mc-frame"}
            >
                <div className = "mc-top-container">
                    <Link 
                        to = {`individual/${movie.id}`}
                        state = {{ movie: JSON.stringify(movieItems)  }}
                        className = "mc-figure"
                    >
                        <figure>
                            <img src = {`https://image.tmdb.org/t/p/w300/${movieItems.poster_path}`} alt={movieItems.title} />
                        </figure>
                    </Link>

                    <div className = {"mc-info-box"}>
                        <div className="mc-info-box-items">
                            <p className = "mc-info-items-title ">{ movieItems.title }</p>


                            <Rating
                                // emptySymbol="fa fa-star-o fa-2x"
                                // fullSymbol="fa fa-star fa-2x"
                                // emptySymbol= <img src={thumbsEmpty} alt="no vote" className="icon" />
                                // fullSymbol= <img src={thumbsFull} alt="voted" className="icon" />
                                //emptySymbol= <img src={"../graphics/thumbs-up-empty.png"} alt="no vote" className="icon" />
                                //fullSymbol= <img src={"../graphics/thumbs-up-full.png"} alt="voted" className="icon" />
                                fractions={3}
                                initialRating={movieItems.vote_average / 2}
                                readonly
                            />

                            <p className = "">{ movieItems.vote_average }</p>
                            <p className = "">
                                { movieItems.release_date }
                            </p>
                            <div>
                                <img 
                                    src = {isFavourite ? thumbsFull : thumbsEmpty} 
                                    alt = "Click to favorite a movie"
                                    onClick = {() => favoriteAMovie() }
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <p className = "mc-item-description">
                        { movieItems.overview }
                    </p>
                    
                    <button className = "mc-button">
                        <Link className = "mc-button-link" to = {`individual/${movieItems.id}`}> 
                            Additional info 
                        </Link>
                    </button>
                </div>
            
            </section>
        );
    }

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