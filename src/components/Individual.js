import { useLocation, Navigate } from "react-router-dom";
import "../styles/individual.css";
import { addMovieToLocalStorage, removeMovieFromLocalStorage } from "../helpers.js/handleLocalStorage";
import thumbsEmpty from "../graphics/thumbs-up-empty-1.png";
import thumbsFull from "../graphics/thumbs-up-full-1.png";
import { useState } from "react";

const Individual = () => {
    const location = useLocation();
    const { movie } = location.state || {};
    const [currentMovie, setCurrentMovie] = useState(null);



    useState(() => {
        setCurrentMovie(movie);
    }, []);



    const favoriteAMovie = () => {
        if (currentMovie.isFavourite) {
            setCurrentMovie({...currentMovie, isFavourite: false});
            removeMovieFromLocalStorage(currentMovie.id);
        } else {
            const newObject = {...currentMovie, isFavourite: true};
            setCurrentMovie(newObject);
            addMovieToLocalStorage(newObject);
        }
    }



    const IndividualMovie = () => {
        if (currentMovie)
            return(
                <section 
                    className = "i-container"
                    style={{
                        backgroundImage: `url(${currentMovie.backdrop_path})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <div className = "i-info-container">
                        <div className = "i-info-container-title">
                            <p className = "i-title">{ currentMovie.title }</p>

                            <div className = "i-thumb">
                                <img 
                                    src = {currentMovie.isFavourite ? thumbsFull : thumbsEmpty} 
                                    alt = "Click to favorite a movie"
                                    title = {`Click to ${currentMovie.isFavourite ? 'un' : ''}favorite this movie`}
                                    onClick = {() => favoriteAMovie() }
                                />
                            </div>
                        </div>

                        <div className = "i-info-sub-container">
                            <div>
                                <p className = "i-titles">Overall rating</p>
                                <p>{ `${currentMovie.vote_average * 10}%` }</p>
                            </div>

                            <div>
                                <p className = "i-titles">Released at</p>
                                <p>{ currentMovie.release_date }</p>
                            </div>
                        </div>

                        <p className = "i-titles">Movie's plot</p>
                        <p className = "i-movie-plot">{ currentMovie.overview }</p>
                    </div>

                    <figure className = "i-image-container">
                        <img src = {currentMovie.poster_path} alt={currentMovie.title} />
                    </figure>
                </section>
            );

        else
            return <Navigate to = "/error" />;
    };

    
    return(
        <IndividualMovie />
    );
}

export default Individual;