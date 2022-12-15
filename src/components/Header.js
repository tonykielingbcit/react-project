import "../styles/header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {

    return(
        <header>
            <section className = "left-side">
                {/* <Link to = "/" className = "single-item">Home</Link> */}
                <a href="/" className = "single-item">Home</a>
                <Link to = "/favourites" className = "single-item">My Favourites</Link>
            </section>
            <section className="right-side">
                <Link to = "/about" className = "single-item">About</Link>
                {/* <NavLink
                    to = "/about"
                >
                    About
                </NavLink> */}
            </section>
        </header>
    );
}

export default Header;