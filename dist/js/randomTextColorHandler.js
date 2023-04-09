import { colors } from './colors.js'
const randomTextColorHandler = () => {
  $(".color__colored").each(function () {
    if ($(this).hasClass("color__random")) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      const text_color = `color__${color}`;
      $(this).removeClass(function (index, className) {
        return (className.match(/(^|\s)color__\S+/g) || []).join(' ');
      });
      $(this).addClass(text_color);
      $(this).addClass("color__colored color__random");
    }
  });
};

export default randomTextColorHandler;
