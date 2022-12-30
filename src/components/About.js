import "../styles/about.css";

const About = () => {
    return(
        <div className = "ab-container">
            <div className="ab-left">
                <h3>Welcome to MVDB!</h3>
                <h4>About the Project</h4>
                <p>MVDB is a Movie Database listing the movies based on popularity, rating, and release date. Browse for your favourite film, add it to the Favourite List, and save it for the Watch Later list!</p>
                <p>This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
                <div className="ab-img-left">
                    <img src="2.png" alt="TMDB LOGO" />
                </div>
            </div>
            <div className="ab-right">
                <h3>Team</h3>
                <p>Movie App is a React JS project created by
                    <span className = "gc"> Ginni</span> &
                    <span className = "tk"> Tony</span>. </p>
                <p>They are passionate in applying their knowledge and experience to develop solutions that goes beyond the class assignment.</p>
            </div>
        </div>
    );
}

export default About;
