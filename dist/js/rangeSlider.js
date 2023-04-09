const rangeSlider = () => {
    var newSize = 0;
    var newSizeMargin = 0;
    $("#range").on("change", function () {
        newSize = $(this).val() + "rem";
        newSizeMargin = $(this).val() + "rem";

        if (parseInt($(this).val()) > 12) {
            newSizeMargin = "12rem";
        }
        if (parseInt($(this).val()) < 8) {
            newSizeMargin = "12rem";
        }
        $(".callout-title").css('font-size', newSize);
        $(".callout-title").css('margin-top', newSizeMargin);
    });
};

export default rangeSlider;