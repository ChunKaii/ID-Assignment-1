function alertuser(){
    let answer = confirm("Are you ready to submit with all your desired information inputted?");
    if (answer){
        window.location.href='thank you page.html';
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