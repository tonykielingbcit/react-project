/*
* auxiliary functions to handle browser local storage
*/

const LS_KEY = "favourite_movies";


export const getAllFavouritesOnLocalStorage = () => {
    return localStorage.getItem(LS_KEY);
};


export const addMovieToLocalStorage = movie => {
    let tempArray = [movie];

    const ls = JSON.parse(localStorage.getItem(LS_KEY));

    if (ls)
        tempArray = [...tempArray, ...ls];

    const toBeAdded = JSON.stringify(tempArray);

    localStorage.setItem(LS_KEY, toBeAdded);

    return;
}


export const removeMovieFromLocalStorage = movieId => {
    const ls = JSON.parse(localStorage.getItem(LS_KEY));

    if (ls) {
        if (ls.length && ls.length > 1) {
            const filterArray = ls.filter(e => e.id !== movieId);
            const result = JSON.stringify(filterArray);
            localStorage.setItem(LS_KEY, result);
        } else {
            if (ls[0].id === movieId)
                localStorage.setItem(LS_KEY, "[]");
        }
    }

    return;
}

