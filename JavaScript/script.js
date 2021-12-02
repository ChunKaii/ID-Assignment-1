//Function to check with user if they want to submit the email
//and should they confirm, it will send them to the thank you page
function alertuser(){
    let answer = confirm("Are you ready to submit with all your desired information inputted?");
    if (answer){
        window.location.href='thank you page.html';
    }
}