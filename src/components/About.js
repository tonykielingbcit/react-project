import "../styles/about.css";
const About = () => {
    return(
        // <div>
        
            <div className = "ab-container">
                <div className="ab-left">
                    <h3>Welcome to MVDB!</h3>
                    <h4>About the Project</h4>
                    <p>MVDB is a Movie Database listing the movies based on popularity, rating, and release date. Browse for your favourite film, add it to the Favourite List, and save it for the Watch Later list!</p>
                    <p>This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
                    <div className="ab-img-left"><img src="2.png" alt="TMDB LOGO" ></img></div>
                </div>
                <div className="ab-right">
                    <h3>Team</h3>
                    <h4>Meet the Team</h4>
                    <p>MVDB is a React JS project proudly created by
                        <span style={{color: "rgb(42, 165, 56)"}}>Tony</span> & 
                        <span style={{color: "rgb(165, 42, 144)"}}> Ginni</span>.
                    We are an ambitious web development team who love coding, designing best user experience, and challenging!</p>
                </div>
            </div>
        // </div>
    );
}
export default About;







