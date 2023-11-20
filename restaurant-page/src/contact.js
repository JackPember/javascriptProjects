import './style.css';
import clear from './clear';
import renderHeader from './main-header';


const renderContactCard = (name, role, phone, email) => {
    const main = document.querySelector("#main");
    const card = document.createElement("div");
    const title = document.createElement("h4");
    title.textContent = name;
    card.appendChild(title);
    const text = document.createElement("p");
    text.textContent = `${role}\nPhone: ${phone}\nEmail: ${email}`;
    card.appendChild(text);
    card.classList.add('box');
    main.appendChild(card);
}

const contact = () => {
    clear();
    renderHeader("Contact Us");
    renderContactCard("Tony", "Owner", "123-456-7890", "definatelylegit@realmail.com");
    renderContactCard("Maria", "Manager", "123-789-9841", "realemailtrustme@notfake.com");
    renderContactCard("Mario", "Head Chef", "123-987-0091", "seriouslythisisreal@notfake.com");
}

export default contact;