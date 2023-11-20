const clear = () => {
    const main = document.querySelector("#main");
    while (main.hasChildNodes()) {
        main.removeChild(main.firstChild);
    }
}
export default clear;