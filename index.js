var randomNumber1 = Math.floor((Math.random() * 6) + 1);
let txt1 = "./images/dice"+randomNumber1+".png"

document.querySelector(".img1").setAttribute("src",txt1)

var randomNumber2 = Math.floor((Math.random() * 6) + 1);

let txt2 = "./images/dice"+randomNumber2+".png"

document.querySelector(".img2").setAttribute("src",txt2)

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Won!"
}
else if (randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML= "Player 2 Won!"
}
else{
    document.querySelector("h1").innerHTML= "It's a Draw"
}