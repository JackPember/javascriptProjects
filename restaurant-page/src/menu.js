import './style.css';
import clear from './clear';
import renderHeader from './main-header';

const renderMenuSectionHeader = (title) => {
    const main = document.querySelector("#main");
    const element = document.createElement("h3");
    element.textContent = title;
    element.classList.add('menuBox');
    main.appendChild(element);
}

const renderFoodItem = (item, description, price) => {
    const main = document.querySelector("#main");
    const card = document.createElement("div");
    const title = document.createElement("h4");
    title.textContent = item;
    card.appendChild(title);
    const text = document.createElement("p");
    text.textContent = description;
    card.appendChild(text);
    const itemPrice = document.createElement("h5");
    itemPrice.textContent = price;
    card.appendChild(itemPrice);
    card.classList.add('box');
    main.appendChild(card);
}

const menu = () => {
    clear();
    renderHeader("Menu");

    renderMenuSectionHeader("Appetizers");
    renderFoodItem("Green Bean Salad", "Our house-made green bean salad. Green beans with mozzerella cheese, garlic, and tomatoes, tossed in our house balsamic vinagrette", "$9");
    renderFoodItem("Burrata", "A Tony's favorite! Garlic bread, basil, galic-crusted tomatoes, and mozzerella cheese served on a plate.", "$11");

    renderMenuSectionHeader("Signature Pizza")
    renderFoodItem("Tony's Famous Pizza", `Our famous brick-oven pizza! Small: 12\" Medium: 14\" Large: 16\" Family: 18\"\n
    Toppings: pepperoni, sausage, basil, green peppers, mushrooms, onions, anchovies, tomatoes, garlic (Extra toppings are $1.50 each)`,
    "Small $12/Medium $14/Large $16/Family $18");

    renderMenuSectionHeader("Pasta");
    renderFoodItem("Spaghetti & Meatballs", "Delicious spaghetti and meatballs. Our meatballs are home-made and have fresh carrots and zucchini mixed in", 
    "$18");
    renderFoodItem("Linguine Frutti di Mare", "Linguine in a spicy white-wine garlic sauce with shrimp, scallops, grilled calamari, and clams", "$20");
}

export default menu;