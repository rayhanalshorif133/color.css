const sideBarClickHandler = () => {
    var text_class_title = "";
    $(".color-item-color").on("click", function () {
        text_class_title = $(this).find('.color-item--title').text();
        $(".callout-title").removeClass().addClass('callout-title color__colored').addClass(text_class_title);
        $(".callout-subtitle").removeClass().addClass('callout-subtitle color__colored').addClass(text_class_title);
        $(".callout-showList").removeClass().addClass('callout-showList color__colored').addClass(text_class_title);
    });
    var bg_class_title = "";
    $(".color-item-bg").on("click", function () {
        bg_class_title = $(this).find('.color-item--title').text();
        $(".intro").removeClass().addClass('intro color__colored').addClass(bg_class_title);
    });

    $(".color-item-random").on("click", function () {
        bg_class_title = $(this).find('.color-item--title').text();
        $(".callout-title").removeClass().addClass('callout-title color__colored').addClass(bg_class_title);
        $(".callout-subtitle").removeClass().addClass('callout-subtitle color__colored').addClass(bg_class_title);
        $(".callout-showList").removeClass().addClass('callout-showList color__colored').addClass(bg_class_title);
    });


}

export default sideBarClickHandler;