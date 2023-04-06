import randomBGColorHandler from "./dist/js/randomBGColorHandler.js";
import sideBarClickHandler from "./dist/js/sideBarClickHandler.js";
import sideBarColorGroupInjector from "./dist/js/sideBarColorGroupInjector.js";

$(function () {
    sideBarColorGroupInjector();
    sideBarClickHandler();
    // Intervals
    setInterval(() => {
        randomBGColorHandler();
    }, 3000);
});



