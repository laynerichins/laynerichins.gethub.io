var userAge = prompt("What is your age?");
if (userAge >= 65) {
    document.getElementById("verify").innerHTML = "Free Friday Coffee Night for Seniors!";
}
else {
    document.getElementById("verify").innerHTML = "Enjoy Music and Make Memories!";
}