//Choose a random color

const button = document.querySelector("button");
const body = document.querySelector("body");
const colors = ["red","blue","green","pink","yellow"];

body.style.backgroundColor= "violet";
button.addEventListener("click", changeBackgroundColor);


function changeBackgroundColor(){
    const colorIndex =parseInt(Math.random()*colors.length)
    body.style.backgroundColor = colors[colorIndex];
}