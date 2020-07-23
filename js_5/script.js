const main = document.getElementById("main");
main.style.position = "absolute";
main.style.height = "100%";
main.style.width = "100%";
let colors = ["red", "orange", "green", "yellow", "royalblue", "rebeccapurple", "blue"], delay = 0;

function create(){
    let wh = `${randNum(5, 70)}px`;
    let ball = document.createElement("div");
    ball.className = "balls";
    ball.style.animationDelay = `${delay}ms`;
    // ball.style.animation = "fall 4s linear forwards";
    ball.style.height = wh;
    ball.style.width = wh;
    ball.style.borderRadius = "50%";
    ball.style.position = "absolute";
    ball.style.top = "0";
    ball.style.left = `${randNum(0, 100)}%`;
    ball.style.backgroundColor = colors[randNum(0, 6)];
    main.append(ball);
}
function randNum(max, min){
    return Math.round(Math.random()*(max-min)+min);
}
for(let i=0; i<15; i++){
    for(let j=0; j<20; j++)
        create();
    delay+=300;
}
document.getElementById("main").addEventListener("click", function(e){
    if(e.target.className == "balls")
    e.target.style.backgroundColor = "transparent";
});