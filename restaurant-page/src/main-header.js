import Icon from './pizza.png';
import './style.css';

const renderHeader = (headerTitle) => {
    const main = document.querySelector("#main");
    const heading = document.createElement("div");
    const pizzaIcon1 = new Image(35, 35);
    pizzaIcon1.src = Icon;
    heading.appendChild(pizzaIcon1);
    const menu = document.createElement("h1");
    menu.textContent = headerTitle;
    heading.appendChild(menu);
    const pizzaIcon2 = new Image(35, 35);
    pizzaIcon2.src = Icon;
    heading.appendChild(pizzaIcon2);
    heading.classList.add('headerBox');
    main.appendChild(heading);
}

export default renderHeader;