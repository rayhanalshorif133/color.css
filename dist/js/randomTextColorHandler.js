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

    if ($(this).hasClass("color__random-text")){
      const color = colors[Math.floor(Math.random() * colors.length)];
      const text_color = `color__${color}`;
      $(this).removeClass(function (index, className) {
        return (className.match(/(^|\s)color__\S+/g) || []).join(' ');
      });


      const text_length = $(this).text().length;
      const random_index = Math.floor(Math.random() * text_length);
      const text_element = $(this).text()[random_index];
      const text_array = $(this).text().split("");
      text_array[random_index] = `<span class="color__${color}">${text_element}</span>`;
      const text = text_array.join("");
      $(this).html(text);

      $(this).addClass(text_color);
      $(this).addClass("color__colored color__random-text");
    }

  });
};

export default randomTextColorHandler;
