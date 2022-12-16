import "../styles/header.css";
import { NavLink, useLocation } from "react-router-dom";
import Icon from "../graphics/icon.png";

const Header = () => {
    const currentLocation = useLocation().pathname;
    
    return(
        <header>
            <section className = "left-side">
                <a 
                    href="/react-project"
                    title = "Home"
                >
                    {/* https://iconarchive.com/show/hobbies-icons-by-hadezign/Movies-icon.html */}
                    <figure className = "icon-container">
                        <img src={Icon} alt = "Site's icon"/>
                    </figure>
                </a> 
                
                <a 
                    href="/react-project" 
                    className = {`single-item ${(currentLocation === "/react-project" ? "is-active" : "")}`}

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