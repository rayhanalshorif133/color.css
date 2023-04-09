import sideBarClickHandler from "./sideBarClickHandler.js";


$(function() {
    handleBoxClick();
    var is_developer = true;
    sideBarClickHandler(is_developer);
});

const handleBoxClick = () => {
    $(".box").click(function () {
        let box = $(this);
        $(".box").removeClass("active__box");
        box.addClass("active__box");
    });
};
// Path: dist\js\developer.js
