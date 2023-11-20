const validatePassword = () => {
    
    const text = document.getElementById("error_msg");
    const pwText = document.getElementById("password").value;
    const confirmedpwText = document.getElementById("password_confirm").value;
    const pwboxes = document.querySelectorAll('.error')
    const validStyle = "border: 1.5px solid #E5E7EB"
    const invalidStyle = "border: 1.5px solid crimson"
    
    if(pwText === confirmedpwText) {
        pwboxes.forEach(value => { value.style.cssText = validStyle;})
        text.textContent = "";
    } else {
       pwboxes.forEach(value => { value.style.cssText = invalidStyle;})
       text.textContent = "*Passwords do not match";
    }
}

const pw = document.getElementById("password");
const confirmedpw = document.getElementById("password_confirm");
pw.addEventListener("change", validatePassword);
confirmedpw.addEventListener("change", validatePassword);