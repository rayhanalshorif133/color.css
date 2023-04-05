const sideBarColorGroupInjector = () => {
    let color_group = '';
    let color_group_bg = '';
    let colors = ['red','orange','yellow','green','blue','indigo','violet','purple','pink','black','white','gray','brown']
    for (let index = 0; index < colors.length; index++) {
        const color = colors[index];
        color_group = `
                    <li class="color-item color-item-color" data-color="color__${color}">
                        <span class="color-item--title">color__${color}</span>
                        <button class="copy-icon" type="button">
                            <span class="tooltip">Copy class name to
                                clipboard</span>
                        </button>
                    </li>
            `;
        $(".text_color").append(color_group);
        color_group_bg = `
                    <li class="color-item color-item-bg" data-color="color__${color}-bg">
                        <span class="color-item--title">color__${color}-bg</span>
                        <button class="copy-icon" type="button">
                            <span class="tooltip">Copy class name to
                                clipboard</span>
                        </button>
                    </li>
            `;
        $(".bg_color").append(color_group_bg);
    }
}

export default sideBarColorGroupInjector;