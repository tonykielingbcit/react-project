import "../styles/header.css";
import { Link } from "react-router-dom";

const Header = () => {

    return(
        <header>
            <section className="three-items">
                <Link to="/" className="single-item">Home</Link>
                <Link to="favourites" className="single-item">My Favourites</Link>
                <Link to="individual" className="single-item">Individual Title</Link>
            </section>
            <section className="last-item">
                <Link to="about" className="single-item">About</Link>
            </section>
        </header>
    );
}

export default Header;