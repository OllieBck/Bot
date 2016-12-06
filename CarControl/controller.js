var host = "job271.itp.io";
var ws = new WebSocket('ws://' + host + ':9111');

function driveForward(){
  ws.send("forward");
}

function driveBackward(){
  ws.send("backward");
}

function driveStop(){
  ws.send("stop");
}

function driveRight(){
  ws.send("right");
}

function driveLeft(){
  ws.send("left");
}

function driveBackLeft(){
  ws.send("b_left");
}

function driveBackRight(){
  ws.send("b_right");
}

function shootString(){
  ws.send("shoot");
}

function init(){
  document.getElementById('forward').addEventListener('click', driveForward);
  document.getElementById('backward').addEventListener('click', driveBackward);
  document.getElementById('stop').addEventListener('click', driveStop);
  document.getElementById('f_right').addEventListener('click', driveRight);
  document.getElementById('f_left').addEventListener('click', driveLeft);
  document.getElementById('b_right').addEventListener('click', driveBackRight);
  document.getElementById('b_left').addEventListener('click', driveBackLeft);
  document.getElementById('shoot').addEventListener('click', shootString);

}



window.addEventListener('load', init);
