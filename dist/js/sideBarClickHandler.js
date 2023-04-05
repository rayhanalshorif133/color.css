const sideBarClickHandler = () => {
    $(".color-item").on("click", function () {
        let class_title = $(this).find('.color-item--title').text();
        $(".callout-title").removeClass().addClass('callout-title color__colored').addClass(class_title);
    });
}

export default sideBarClickHandler;