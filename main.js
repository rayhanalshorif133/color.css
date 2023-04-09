import randomBGColorHandler from "./dist/js/randomBGColorHandler.js";
import randomTextColorHandler from "./dist/js/randomTextColorHandler.js";
import rangeSlider from "./dist/js/rangeSlider.js";
import sideBarClickHandler from "./dist/js/sideBarClickHandler.js";
import sideBarColorGroupInjector from "./dist/js/sideBarColorGroupInjector.js";
import toggleCheckboxLatter from "./dist/js/toggleCheckboxLatter.js";


$(function () {
    sideBarColorGroupInjector();
    sideBarClickHandler();
    // Intervals
    setInterval(() => {
        randomTextColorHandler();
        randomBGColorHandler();
    }, 1000);
    rangeSlider();
    toggleCheckboxLatter();
});