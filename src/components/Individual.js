import { useParams } from "react-router-dom";
import "../styles/individual.css";

const Individual = () => {
    let { id } = useParams();
    console.log("id:::::::::::", id);
    return(
        <section>
            This is individual, title id: {id ?? "'actually, so far, no title'"} 
        </section>
    );
}

export default Individual;