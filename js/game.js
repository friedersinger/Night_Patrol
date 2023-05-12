let canvas;
let world;
let keyboard = new Keyboard();
let soundIsOn = false;

let start_sound = new Audio("audio/start-sound.mp3");

/**
 * Initializes the game, creating the world and canvas.
 *
 *
 */
function init() {
  initLevel();
  document.getElementById("game").style.display = "flex";
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("endScreen").style.display = "none";
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
  playSound();
  bindBtnPressEvents();

  console.log("My Character is", world.character);
}

/**
 * Restarts the game by reloading the page.
 *
 *
 */
function replay() {
  world.clearAllIntervals();
  window.location.href = "index.html";
}

window.addEventListener("keydown", (e) => {
  if (e.keyCode == 39) {
    keyboard.RIGHT = true;
  }
  if (e.keyCode == 37) {
    keyboard.LEFT = true;
  }
  if (e.keyCode == 38) {
    keyboard.UP = true;
  }
  if (e.keyCode == 40) {
    keyboard.DOWN = true;
  }
  if (e.keyCode == 32) {
    keyboard.SPACE = true;
  }
  if (e.keyCode == 68) {
    keyboard.D = true;
  }
});

window.addEventListener("keyup", (e) => {
  if (e.keyCode == 39) {
    keyboard.RIGHT = false;
  }
  if (e.keyCode == 37) {
    keyboard.LEFT = false;
  }
  if (e.keyCode == 38) {
    keyboard.UP = false;
  }
  if (e.keyCode == 40) {
    keyboard.DOWN = false;
  }
  if (e.keyCode == 32) {
    keyboard.SPACE = false;
  }
  if (e.keyCode == 68) {
    keyboard.D = false;
  }
});

function bindBtnPressEvents() {
  document.getElementById("btnRight").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.RIGHT = true;
  });

  document.getElementById("btnRight").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.RIGHT = false;
  });

  document.getElementById("btnLeft").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.LEFT = true;
  });

  document.getElementById("btnLeft").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.LEFT = false;
  });

  document.getElementById("btnUp").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.UP = true;
  });

  document.getElementById("btnUp").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.UP = false;
  });

  document.getElementById("btnD").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.D = true;
  });

  document.getElementById("btnD").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.D = false;
  });
}

function fullscreen() {
  let fullscreen = document.getElementById("fullscreen");
  enterFullscreen(fullscreen);
}

function enterFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.msRequestFullscreen) {
    // for IE11 (remove June 15, 2022)
    element.msRequestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    // iOS Safari
    element.webkitRequestFullscreen();
  }
}

function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}

/**
 * This function checks if sound is enabled and plays the start sound if it is.
 *
 *
 */
function playSound() {
  if (soundIsOn) {
    start_sound.play();
  }
}

/**
 * This function sets sound on and updates the corresponding HTML elements.
 *
 *
 */
function soundOn() {
  document.getElementById("soundOff").style.display = "none";
  document.getElementById("soundStartOff").style.display = "none";
  soundIsOn = true;
  world.soundOn = true;
}

/**
 * This function sets sound off and updates the corresponding HTML elements.
 *
 */
function soundOff() {
  document.getElementById("soundOff").style.display = "block";
  document.getElementById("soundStartOff").style.display = "block";
  soundIsOn = false;
  world.soundOn = false;
}
