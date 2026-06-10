const music = document.getElementById("music");

function toggleMusic(){

if(music.paused){
    music.play();
}else{
    music.pause();
}

}

function createPetal(){

const petal = document.createElement("img");

petal.src = "images/petal.png";

petal.className = "rose";

petal.style.left =
Math.random()*window.innerWidth+"px";

petal.style.animationDuration =
(10+Math.random()*8)+"s";

document.body.appendChild(petal);

setTimeout(()=>{
petal.remove();
},18000);

}

setInterval(createPetal, 300);