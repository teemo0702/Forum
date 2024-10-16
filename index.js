const scriptURL = "https://script.google.com/macros/s/AKfycbxsA4SCTmqBVAh_elis_bfuEKQaOrXelng13RdhzZrUcTmsTEfe2VXgefleCWzakNFrXQ/exec";
const form = document.getElementById('user-form');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let requestBody = new FormData(form);
    fetch(scriptURL, {
        method: "POST",
        body: requestBody,
    })
    .then((response) => {
        alert("Success!", response);
    })
    .catch((error) => {
        alert("Error!", error.message);
    });
});