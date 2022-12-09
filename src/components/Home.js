import { useEffect, useState } from "react";
import "../styles/home.css";
import env from "react-dotenv";

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
            temp = titles.map((e, i) => {
                return (
                    <div key={i} style={{border: "1px solid blue", margin: "1rem 0"}}>
                        <p>Id: { e.id }</p>
                        <p>Name: { e.title }</p>
                        <figure>
                            <img src = {`https://image.tmdb.org/t/p/w300/${e.poster_path}`} alt={e.title} />
                        </figure>
                    </div>
                );
            });

        return temp;
    }

    return(
        <div>
            <p>Hello and welcome for the Home page!</p>
    
            {
                <MoviesList />
            }
        </div>
    );
}

export default Home;