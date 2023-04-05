const sideBarColorGroupInjector = () => {
    let color_group = '';
        let colors = ['red','orange','yellow','green','blue','indigo','violet','purple','pink','black','white','gray','brown']
    for (let index = 0; index < colors.length; index++) {
        const color = colors[index];
        color_group = `
                    <li class="color-item" data-color="color__${color}">
                        <span class="color-item--title">color__${color}</span>
                        <button class="copy-icon" type="button">
                            <span class="tooltip">Copy class name to
                                clipboard</span>
                        </button>
                    </li>
            `;
        $(".color-group").append(color_group);
    }
}

export default sideBarColorGroupInjector;