export { print };

function print(msg, newLine = true) {
    let content = document.getElementById("content");
    if(newLine) {
        msg += "<br>"
    }
    content.innerHTML += msg;
}