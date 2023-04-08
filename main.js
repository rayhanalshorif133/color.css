import randomBGColorHandler from "./dist/js/randomBGColorHandler.js";
import rangeSlider from "./dist/js/rangeSlider.js";
import sideBarClickHandler from "./dist/js/sideBarClickHandler.js";
import sideBarColorGroupInjector from "./dist/js/sideBarColorGroupInjector.js";
import toggleCheckboxLatter from "./dist/js/toggleCheckboxLatter.js";


$(function () {
    sideBarColorGroupInjector();
    sideBarClickHandler();
    // Intervals
    setInterval(() => {
        randomBGColorHandler();
    }, 3000);
    rangeSlider();
    toggleCheckboxLatter();
});