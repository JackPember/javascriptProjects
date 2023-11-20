
const loadPage = () => {
    const content = document.createElement("content");
    content.id = "content";
    document.body.appendChild(content);
    const header = document.createElement("header");
    const homeBtn = document.createElement("button");
    homeBtn.textContent = "Home";
    homeBtn.id = "home";
    const menuBtn = document.createElement("button");
    menuBtn.textContent = "Menu";
    menuBtn.id = "menu";
    const contactBtn = document.createElement("button");
    contactBtn.textContent = "Contact";
    contactBtn.id = "contact";
    header.appendChild(homeBtn);
    header.appendChild(menuBtn);
    header.appendChild(contactBtn);
    content.appendChild(header);
    const main = document.createElement("div");
    main.id = "main";
    content.appendChild(main);
    const footer = document.createElement("footer");
    const link = document.createElement("a");
    link.href = "https://www.dreamstime.com/pizza-pattern-pizza-background-doodle-style-vector-illustration-pizza-pattern-pizza-background-doodle-style-vector-image113322562";
    link.textContent = "Background image courtesy of dreamstime.com";
    link.target = "blank";
    const iconLink = document.createElement("a");
    iconLink.href = "https://www.flaticon.com/free-icon/pizza_4952486?term=pizza&page=1&position=5&origin=style&related_id=4952486" 
    iconLink.textContent="Pizza icons created by Smashicons - www.flaticon.com";
    iconLink.target = "blank";
    footer.appendChild(link);
    footer.appendChild(iconLink);
    content.appendChild(footer);
}

export default loadPage;