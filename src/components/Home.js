import { useEffect, useState } from "react";
import "../styles/home.css";
import env from "react-dotenv";
import MovieCards from "./MovieCards";

const Home = () => {
    const [titles, setTitles] = useState();
        
    useEffect(() => {
        
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

        if (titles && titles.length > 0)
            // in order to get exact 12 movies at a time
            for(let c = 0; c < 12; c++)
                temp.push (
                    <MovieCards
                        movie = { titles[c] }
                        key = { c }
                        index = { c }
                    />
                );
            
            
        return temp;
    }

    return(
        <article className = "hm-cards-frame">
            {
                <MoviesList 
                />
            }
        </article>
    );
}

export default Home;