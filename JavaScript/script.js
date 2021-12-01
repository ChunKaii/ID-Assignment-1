function thankyouMessage(){
    let x = document.getElementById("message");
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function reset(){
    let x = document.getElementById("message");
    x.style.display = "none";
}

function displayImage(src, width, height) {
    let img = document.createElement("img");

    img.src = src;
    img.width = width;
    img.height = height;

    document.body.appendChild(img);
}