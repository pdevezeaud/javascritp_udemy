
//https://www.youtube.com/watch?v=0ArCFchlTq4 7:20

// Draw canvas
const cvs = document.getElementById("Bird");
const ctx = cvs.getContext("2d");

function draw() {
    ctx.fillStyle = "#70c5ce";
    ctx.fillRect(0, 0,cvs.width, cvs.height);

}

function loop(){
  
    
    draw();


    requestAnimationFrame(loop);
}

loop();