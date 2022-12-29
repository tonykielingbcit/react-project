const PageNotFound = () => {

    return(
        <div>
            <h2>Sorry :(</h2>
            <h3>Page has not been found:</h3>
            <p> { window.location.href } </p>
            <p>* Please, try the header links.</p>
        </div>
    );
}

export default PageNotFound;