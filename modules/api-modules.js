import {URL_base} from "./config.js";

export const apiList = (s,type) => {
    const url = `${URL_base}s=${s}&type=${type}`;
    fetch(url)
    .then(response => response.json())
    .then(results => {
        const final_result = results.Search;
        //console.log(final_result);
        viewItems(final_result);
    })
}

const viewItems = (items) => {
    items.map((item) => {
        console.group(item.Title);
        console.log(item.Year);
        console.log(item.Type);
        console.log(item.Poster);
        console.groupEnd();
    })
}