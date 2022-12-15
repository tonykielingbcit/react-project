/*
* auxiliary functions to handle browser local storage
*/

const LS_KEY = "favourite_movies";


export const getAllFavouritesOnLocalStorage = () => {
    try {
        return localStorage.getItem(LS_KEY);
    } catch (err) {
        console.log("###ERROR on quering local storage: ", err.message || err);
        return;
    }
};


export const addMovieToLocalStorage = movie => {
    try {
        let tempArray = [movie];

        const ls = JSON.parse(localStorage.getItem(LS_KEY));

        if (ls)
            tempArray = [...tempArray, ...ls];

        const toBeAdded = JSON.stringify(tempArray);

        localStorage.setItem(LS_KEY, toBeAdded);

    } catch (err) {
        console.log("###ERROR on adding item to local storage: ", err.message || err);
    }

    return;
}


export const removeMovieFromLocalStorage = movieId => {
    try {
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
    } catch (err) {
        console.log("###ERROR on removing item from local storage: ", err.message || err);
    }

    return;
}

