/*!
* Start Bootstrap - Freelancer v7.0.5 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});




export const movieSearch = (t, type, indice) => {
    let url = `${URL_base}t=${t}&type=${type}`;
    if(indice == 3 && url.includes("star%20wars")){
        url = `${URL_base}t=star%20wars&type=${type}`;
    }

    fetch(url)
        .then(response => response.json())
        .then(result => {
            viewItems(result, indice);
        })
}

const viewItems = (item, indice) => {
    const div_ID = `film-${indice+1}`;
    const title_ID = `film-title-${indice+1}`;
    const year_ID = `film-year-${indice+1}`;
    replaceMovieContent(item, div_ID, title_ID, year_ID);
}

const replaceMovieContent = (movie, divider_ID, title_ID, year_ID) => {
    const div = document-getElementById(divider_ID);
    const title_child = document.getElementById(title_ID);
    const year_child = documento.getElementById(year_ID);

    const h3 = document.createElement("h3");
    const text = document.createTextNode(movie.Title);
    h3.appendChild(text);

    const h4 = document.createElement("h4");
    const text2 = document.createTextNode(movie.Year);
    h4.appendChild(text2);

    div.replaceChild(h3,title_child);
    div.replaceChild(h4,year_child);
    div.style.backgroudImage = `url(${movie.Poster})`;
}