import { Link } from "react-router-dom";
import "../styles/movie-cards.css";

const MovieCards = ({movie, index}) => {
    // console.log("movie:::: ", movie);

    return (
        <section 
            key = { index }
            className = "mc-frame items"
        >
            <figure>
                {/* <Link to = {`individual/${movie.id}`}> */}
                <Link 
                    to = {`individual/${movie.id}`}
                    state = {{ movie: JSON.stringify(movie)  }}
                >
                    <img src = {`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} />
                </Link>
            </figure>

            <div className = {`mc-info-box item${index > 9 ? index : ("0" + index)}`}>
                <p className = "info-items">{ movie.title }</p>
                <p className = "info-items">{ movie.vote_average }</p>
                <p className = "info-items">{ movie.release_date }</p>
                <p className = "info-items"
                    style = {{
                        // maxWidth: tdWidth ? `${tdWidth * 0.9}px` : 0,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                    }}
                >{ movie.overview }</p>
                <button><Link to = {`individual/${movie.id}`}> + info </Link></button>
            </div>
        
        </section>
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