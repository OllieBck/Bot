var host = "job271.itp.io";
var ws = new WebSocket('ws://' + host + ':9111');

function driveForward(){
  ws.send("forward");
  document.getElementById('test').innerHTML="forward";
}

function driveBackward(){
  ws.send("backward");
  document.getElementById('test').innerHTML="backward";
}

function driveStop(){
  ws.send("stop");
  document.getElementById('test').innerHTML="stop";
}

function driveRight(){
  ws.send("right");
  document.getElementById('test').innerHTML="right";
}

function driveLeft(){
  ws.send("left");
  document.getElementById('test').innerHTML="left";
}

function driveBackLeft(){
  ws.send("b_left");
  document.getElementById('test').innerHTML="back left";
}

function driveBackRight(){
  ws.send("b_right");
  document.getElementById('test').innerHTML="back right";
}

function shootString(){
  ws.send("shoot");
  document.getElementById('test').innerHTML="shoot";
}

function init(){
  ws.addEventListener('message', function(event){
    if (event.data == "connected"){
      document.getElementById('nothing').style.backgroundColor="green";
      //alert(event.data); // for debugging, might be good to attach to a page element to alert to connection
    }
    else{
      document.getElementById('nothing').style.backGroundColor="red";
    }

  });

  document.getElementById('forward').addEventListener('touchend', driveForward);
  document.getElementById('backward').addEventListener('touchend', driveBackward);
  document.getElementById('stop').addEventListener('touchend', driveStop);
  document.getElementById('f_right').addEventListener('touchend', driveRight);
  document.getElementById('f_left').addEventListener('touchend', driveLeft);
  document.getElementById('b_right').addEventListener('touchend', driveBackRight);
  document.getElementById('b_left').addEventListener('touchend', driveBackLeft);
  document.getElementById('shoot').addEventListener('touchend', shootString);
}

window.addEventListener('load', init, false);
