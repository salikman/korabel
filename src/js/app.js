import * as flsFunctions from "./modules/functions.js";
import * as lazyLoad from "./modules/lazyload.js";

flsFunctions.isWebp();
lazyLoad.lazyLoad();

$('.header__collapse').on('click', function() {
    $('.header').toggleClass('open');
});
