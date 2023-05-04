const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let coord = { x: 0, y: 0 };
/*
document.addEventListener("mousedown", stop);
document.addEventListener("mouseup", start);
window.addEventListener("resize", resize);

resize();
window.onload = () =>{
    start();
}
function resize() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}
function reposition(event) {
  coord.x = event.clientX - canvas.offsetLeft - 10;
  coord.y = event.clientY - canvas.offsetTop - 10;
}
function start(event) {
  document.addEventListener("mousemove", draw);
  reposition(event);
}
function stop() {
  document.removeEventListener("mousemove", draw);
}
function draw(event) {
  ctx.beginPath();
    ctx.strokeStyle = "rgb(23, 23, 92)";
    ctx.lineWidth = 10;
    ctx.lineJoin = "round";
    ctx.beginPath();
    ctx.moveTo(coord.x, coord.y);
    ctx.stroke();
    reposition(event);
    ctx.lineTo(coord.x, coord.y);
    ctx.stroke();
    setInterval(function(){ 
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        }, 
        4000);
}

*/

const ChangeMode = () => {
    document.getElementById("body").style.backgroundColor = "whitesmoke"
    document.getElementById("particles-js").style.backgroundColor ="whitesmoke"
  }

particlesJS("particles-js", 
{"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},
"color":{"value":"#097969"},
"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},
"polygon":{"nb_sides":5},
"image":{"src":"img/github.svg","width":100,"height":100}},
"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},
"size":{"value":3,"random":true,"anim":{"enable":false,"speed":20,"size_min":0.1,"sync":false}},
"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.2,"width":1},
"move":{"enable":true,"speed":3,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},
"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},
"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},
"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},
"push":{"particles_nb":4},
"remove":{"particles_nb":2}}},
"retina_detect":true});