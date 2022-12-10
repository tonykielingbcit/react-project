import { useLocation } from "react-router-dom";
import "../styles/individual.css";

const Individual = () => {
    const location = useLocation();
    const movie = JSON.parse(location.state.movie);
    const { title, release_date, vote_average, overview } = movie;
    
    // console.log("id:::::::::::", id, movie);
    return(
        <section>
            <p>{ title }</p>
            <p>{ vote_average }</p>
            <p>{ release_date }</p>
            <p>{ overview }</p>
        </section>
    );
}

export default Individual;