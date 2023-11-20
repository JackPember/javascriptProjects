import './style.css';
import clear from './clear';
import renderHeader from './main-header';

const renderInfo = (title, text) => {
    const main = document.querySelector("#main");
    const card = document.createElement("div");
    if (title !== "") {
    const cardTitle = document.createElement("h3");
    cardTitle.textContent = title;
    card.appendChild(cardTitle);
    }
    const cardText = document.createElement("p");
    cardText.textContent = text;
    card.classList.add('box');
    card.appendChild(cardText);
    main.appendChild(card);
}

const home = () => {
    clear();
    renderHeader("Tony's Pizza");
    
    renderInfo("", "Tony really has the best pizza in town! The crust is so fluffy, the cheese is perfectly melted and golden brown and the pizza is always hot and fresh, but not so hot that it burns your mouth! This place makes me feel like I'm part of a big italian family sitting down to a nice dinner.\n -Tommy Salami");
    renderInfo("Hours", "Sunday: 11am-9pm\nMonday: Closed\nTuesday: 10am-10pm\nWednesday: 10am-10pm\nThursday: 10am-11pm\nFriday: 10am-12pm\nSaturday: 10am-12pm");
    renderInfo("Location", "123 Fake Street, Newport, Rhode Island");
    
}

export default home;