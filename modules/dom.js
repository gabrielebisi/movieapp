const apikey = "78c925e7";
const URL_base = `https://www.omdbapi.com/?apikey=${apikey}&`;


/* Film */
export const movieSearch = (t, type,indice) => {
    let url = `${URL_base}t=${t}&type=${type}`;
    if(indice == 3 && url.includes("star%20wars")){
        url = `${URL_base}t=star%20wars&type=${type}`;
    }
    fetch(url)
        .then(response => response.json())
        .then(result => {
            viewItems(result,indice);
        })
}

const viewItems = (item,indice) => {
    const div_ID = `film-${indice+1}`;
    const title_ID = `film-title-${indice+1}`;
    const year_ID = `film-year-${indice+1}`;
    replaceMovieContent(item,div_ID,title_ID,year_ID);
}

const replaceMovieContent = (movie, divider_ID, title_ID, year_ID) => {
    const div = document.getElementById(divider_ID);
    const title_child = document.getElementById(title_ID);
    const year_child = document.getElementById(year_ID);

    const h3 = document.createElement("h3");
    const text = document.createTextNode(movie.Title);
    h3.appendChild(text);

    const h4 = document.createElement("h4");
    const text2 = document.createTextNode(movie.Year);
    h4.appendChild(text2);

    div.replaceChild(h3,title_child);
    div.replaceChild(h4,year_child);
    div.style.backgroundImage = `url(${movie.Poster})`;
}






/* Serie TV */
export const serieSearch = (s, type,indice) => {
    let url = `${URL_base}t=${s}&type=${type}`;

    fetch(url)
        .then(response => response.json())
        .then(result => {
            viewItemsSerie(result,indice);
        })
}

const viewItemsSerie = (item,indice) => {
    const rowID_1 = `row-titolo-${indice+1}`;
    const title_ID = `serie-titolo-${indice+1}`;
    replaceSerieTitle(item,rowID_1,title_ID);

    const rowID_2 = `row-anno-${indice+1}`;
    const year_ID = `serie-anno-${indice+1}`;
    replaceSerieYear(item,rowID_2,year_ID);

    const rowID_3 = `row-plot-${indice+1}`;
    const plot_ID = `serie-plot-${indice+1}`;
    replaceSeriePlot(item,rowID_3,plot_ID);

    const poster_ID = `poster-${indice+1}`;
    replaceSeriePoster(item,poster_ID);
}

const replaceSerieTitle = (serie, rowID, titleID) => {
    const row = document.getElementById(rowID);
    const title_child = document.getElementById(titleID);

    const h3 = document.createElement("h3");
    const text = document.createTextNode(serie.Title);
    h3.appendChild(text);

    row.replaceChild(h3,title_child);
}

const replaceSerieYear = (serie, rowID, yearID) => {
    const row = document.getElementById(rowID);
    const year_child = document.getElementById(yearID);

    const h4 = document.createElement("h4");
    const text = document.createTextNode(serie.Year);
    h4.appendChild(text);

    row.replaceChild(h4,year_child);
}

const replaceSeriePlot = (serie, rowID, plotID) => {
    const row = document.getElementById(rowID);
    const plot_child = document.getElementById(plotID);

    const p = document.createElement("p");
    const text = document.createTextNode(serie.Plot);
    p.appendChild(text);

    row.replaceChild(p,plot_child);
}

const replaceSeriePoster = (serie,posterID) => {
    const div = document.getElementById(posterID);
    div.style.backgroundImage = `url(${serie.Poster})`;
}




/* Carousel usando la ricerca con S */
export const carouselSearch = (s) => {
    let url = `${URL_base}s=${s}`;

    fetch(url)
        .then(response => response.json())
        .then(results => {
            viewItemsCarousel(results.Search);
        })
}

const viewItemsCarousel = (items) => {
    let i = 1;
    items.map((item) => {
        let div_ID = `car-item-${i}`;
        let title_ID = `car-title-${i}`;
        let img_ID = `car-img-${i}`;

        replaceCarouselContent(item,div_ID,title_ID,img_ID,i);
        i++;
    })
}

const replaceCarouselContent = (item, divider_ID, title_ID,img_ID,i) => {
    const div = document.getElementById(divider_ID);
    const title_child = document.getElementById(title_ID);

    const h3 = document.createElement("h3");
    const text = document.createTextNode(item.Title);
    h3.appendChild(text);

    searchPlotByTitle(item.Title,divider_ID,i);

    div.replaceChild(h3,title_child);

    document.getElementById(img_ID).src=`${item.Poster}`;
}

const searchPlotByTitle = (title,divider_ID,indice) => {  
    const stringa = createSearchableString(title);
    let url = `${URL_base}t=${stringa}`;
    fetch(url)
        .then(response => response.json())
        .then(result => {
            viewItemsPlot(result,divider_ID,indice);
        });
}

const viewItemsPlot = (item,divider_ID,indice) => {
    let plot_ID = `car-plot-${indice}`;
    replaceCarPlot(item, divider_ID, plot_ID);
}

const replaceCarPlot = (item, divider_ID, plot_ID) => {
    const div = document.getElementById(divider_ID);
    const plot_child = document.getElementById(plot_ID);

    const p = document.createElement("p");
    const text2 = document.createTextNode(item.Plot);
    p.appendChild(text2);

    div.replaceChild(p,plot_child);
}

const createSearchableString = (title) => {
    const stringa = title.replace(/\s/g, '%20');
    return stringa;
}

/* Carousel usando la ricera con T */
export const carouselSearch_t = (t,indice,type) => {
    let url = `${URL_base}t=${t}&type=${type}`;

    fetch(url)
        .then(response => response.json())
        .then(result => {
            viewItemsCarousel_t(result,indice);
        })
}

const viewItemsCarousel_t = (item,indice) => {
    let i = indice+1;
    let div_ID = `car-item-${i}`;
    let title_ID = `car-title-${i}`;        
    let plot_ID = `car-plot-${i}`;
    let img_ID = `car-img-${i}`;

    replaceCarouselContent_t(item,div_ID,title_ID,plot_ID,img_ID);
}

const replaceCarouselContent_t = (item, divider_ID, title_ID, plot_ID, img_ID) => {
    const div = document.getElementById(divider_ID);
    const title_child = document.getElementById(title_ID);
    const plot_child = document.getElementById(plot_ID);

    const h3 = document.createElement("h3");
    const text = document.createTextNode(item.Title);
    h3.appendChild(text);

    const p = document.createElement("p");
    const text2 = document.createTextNode(item.Plot);
    p.appendChild(text2);

    div.replaceChild(h3,title_child);
    div.replaceChild(p,plot_child);

    document.getElementById(img_ID).src=`${item.Poster}`;
}






/* Videogiochi */
export const videogameSearch = (s) => {
    let url = `${URL_base}s=${s}&type=game`;

    fetch(url)
        .then(response => response.json())
        .then(results => {
            secondFetch(results.Search);
        })
}

const secondFetch = (items) => {
    let i = 1;
    items.map((item) =>{
        let url = `${URL_base}i=${item.imdbID}`;
        fetch(url)
            .then(response => response.json())
            .then(result => {
                viewItemsVideogames(result,i);
                i++;
            })
    });
}

const viewItemsVideogames = (item, indice) => {
    const div_ID = `game-${indice}`;
    const title_ID = `game-title-${indice}`;
    const year_ID = `game-year-${indice}`;
    const genre_ID = `game-genre-${indice}`;
    replaceVideoGameContent(item,div_ID,title_ID,year_ID,genre_ID);
}

const replaceVideoGameContent = (item, div_ID, title_ID, year_ID, genre_ID) => {
    const div = document.getElementById(div_ID);
    const title_child = document.getElementById(title_ID);
    const year_child = document.getElementById(year_ID);
    const genre_child = document.getElementById(genre_ID);

    const h3 = document.createElement("h3");
    const text = document.createTextNode(item.Title);
    h3.appendChild(text);

    const h4 = document.createElement("h4");
    const text2 = document.createTextNode(item.Year);
    h4.appendChild(text2);

    const p = document.createElement("p");
    const text3 = document.createTextNode(item.Genre);
    p.appendChild(text3);

    div.replaceChild(h3,title_child);
    div.replaceChild(h4,year_child);
    div.replaceChild(p,genre_child);
    div.style.backgroundImage = `url(${item.Poster})`;
}


export const videogameSearchById = (game_ID,indice) => {
    let url = `${URL_base}i=${game_ID}`;
    let i = indice+1;
    fetch(url)
        .then(response => response.json())
        .then(result => {
            viewItemsVideogames(result,i);
        })
}