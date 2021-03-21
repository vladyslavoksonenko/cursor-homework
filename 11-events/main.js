const row = document.querySelectorAll(".row");
const pads = document.querySelectorAll(".pad");
const music = document.querySelectorAll(".music");

let marginLeft = 20;

addEventListener("keydown", keyDown);
addEventListener("keyup", keyUp);
addEventListener("mousedown", mouseDown);
addEventListener("mouseup", mouseUp);
addEventListener("touchstart", touchStart);
addEventListener("touchend", touchEnd);

row.forEach((element) => {
  element.style.cssText = `margin-left: ${marginLeft}px`;
  marginLeft += 20;
});

function getColor(pad) {
  pad.classList.add("active");
}

function clearColor(pad) {
  pad.classList.remove("active");   
}

function getMusic(pad) {
  music.forEach(element => {
    if (pad.dataset.number === element.dataset.number) {
      element.play();
    }
  })
  getColor(pad);
}

function stopMusic(pad) {
  music.forEach(element => {
    if (pad.dataset.number === element.dataset.number) {
      element.pause();
      element.currentTime = 0;
    }
  })
  clearColor(pad);
}

function keyUp(event) {

  const thisEvent = listenKey(event);

  stopMusic(thisEvent);
}

function keyDown(event) { 

  const thisEvent = listenKey(event);

  getMusic(thisEvent);
}

function mouseDown(event) {
  getMusic(event.target);
}

function mouseUp(event) {
  stopMusic(event.target);
}

function touchStart(event) {
  getMusic(event.target);
}

function touchEnd(event) {
  stopMusic(event.target);
}

function listenKey(event) {
  switch (event.code) {
    case "Digit1":
      return pads[0];
      break;
    case "Digit2":
      return pads[1];
      break;
    case "Digit3":
      return pads[2];
      break;
    case "KeyQ":
      return pads[3];
      break;
    case "KeyW":
      return pads[4];
      break;
    case "KeyE":
      return pads[5];
      break;
    case "KeyA":
      return pads[6];
      break;
    case "KeyS":
      return pads[7];
      break;
    case "KeyD":
      return pads[8];
      break;
    case "KeyZ":
      return pads[9];
      break;
    case "KeyX":
      return pads[10];
      break;
    case "KeyC":
      return pads[11];
      break;
    default:
      break;
}
}


