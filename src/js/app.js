import * as flsFunctions from "./modules/functions.js";
import * as lazyLoad from "./modules/lazyload.js";

flsFunctions.isWebp();
lazyLoad.lazyLoad();

$('.header__collapse').on('click', function() {
    $('.header').toggleClass('open');
});

document.addEventListener('DOMContentLoaded', function() {
    let vacanciesList = document.querySelector('.vacancies__list');
    let items = vacanciesList.querySelectorAll('.item');
    let showMoreButton = document.querySelector('.vacancies__more');

    for (var i = 4; i < items.length; i++) {
        items[i].style.display = 'none';
    }

    showMoreButton.addEventListener('click', function(e) {
        e.preventDefault();
        // When the "show more" button is clicked, reveal all previously hidden items.
        for (var i = 3; i < items.length; i++) {
            items[i].style.display = 'flex';
        }

        // Then hide the "show more" button.
        showMoreButton.style.display = 'none';
    });
})


