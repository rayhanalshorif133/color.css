import { colors } from './colors.js'
const randomBGColorHandler = () => {
    console.log("randomBGColorHandler");
    $(".color__colored").each(function () {
        if ($(this).hasClass("color__random-bg")){
            const color = colors[Math.floor(Math.random() * colors.length)];
            const bg_color = `color__${color}-bg`;
            $(this).removeClass(function (index, className) {
                return (className.match(/(^|\s)color__\S+-bg/g) || []).join(' ');
            });
            $(this).addClass("color__random-bg");
            $(this).addClass(bg_color);
        }
    });
}

export default randomBGColorHandler;