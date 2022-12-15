import "../styles/header.css";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
    const currentLocation = useLocation().pathname;
    console.log("currentLocation:: ", currentLocation);
    return(
        <header>
            <section className = "left-side">
                <a 
                    href="/" 
                    className = {`single-item ${(currentLocation === "/" ? "is-active" : "")}`}

                >
                    Home
                </a>

                <NavLink 
                    to = "/favourites" 
                    className = {`single-item ${(currentLocation === "/favourites" ? "is-active" : "")}`}
                >
                    My Favourites
                </NavLink>


            </section>
            <section className="right-side">
                <NavLink
                    to = "/about"
                    className = {`single-item ${(currentLocation === "/about" ? "is-active" : "")}`}
                >
                    About
                </NavLink>
            </section>
        </header>
    );
}

export default Header;