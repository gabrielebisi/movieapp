const URL_TITANIC = "http://www.omdbapi.com/?apikey=78c925e7&s=titanic";

export const titanic = () => {
    fetch(URL_TITANIC)
    .then(jsonResponse => jsonResponse.json())
    .then(objResult => {
        const movie = objResult.Search;
        console.log(movie);
    });
}


