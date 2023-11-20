
const clearMain = () => {
    const main = document.querySelector("#main");
    while (main.hasChildNodes()) {
        main.removeChild(main.lastChild);
    }
}

export default clearMain;