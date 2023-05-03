class World {
  character = new Character();
  endboss = new Endboss();
  level = level1;
  backgroundObjects = this.level.backgroundObjects;
  canvas;
  ctx;
  keyboard;
  camera_x = 0;
  statusBar = new StatusBar();
  throwableObjects = [];
  fullscreen = new Fullscreen();
  hitOneTime = false;
  gameOver = false;
  soundOn = false;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
    this.gameIsOver();
    this.checkSoundOn();
  }

  setWorld() {
    this.character.world = this;
    this.endboss.world = this;
  }

  checkSoundOn() {
    if (soundIsOn) {
      this.soundOn = true;
    }
  }

  gameIsOver() {
    setInterval(() => {
      if (this.gameOver) {
        //console.log('GameOver')
        document.getElementById("endScreen").style.display = "flex";
      }
    }, 200);
  }

  run() {
    setInterval(() => {
      this.checkCollisions();
      this.checkThrowObjects();
    }, 200);
  }

  checkThrowObjects() {
    if (this.keyboard.D) {
      let waterBomb = new ThrowableObject(
        this.character.x + 60,
        this.character.y
      );
      this.throwableObjects.push(waterBomb);
    }
  }

  checkCollisions() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        // console.log("Collision with Character ", enemy);
        this.character.hit();
        this.statusBar.setPercentage(this.character.energy);
        // console.log(
        //   "Collision with Character, energy: ",
        //   this.character.energy
        // );
      }
    });
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.camera_x, 0);

    this.addObjectsToMap(this.level.backgroundObjects);
    this.addObjectsToMap(this.level.clouds);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.throwableObjects);
    this.addToMap(this.character);
    this.addToMap(this.endboss);

    // this.addObjectsToMap(this.level.coins);

    this.ctx.translate(-this.camera_x, 0); // Back
    // -------- SPACE FOR FIXED OBJECTS ------------
    this.addToMap(this.statusBar);
    this.addToMap(this.fullscreen);
    this.ctx.translate(this.camera_x, 0); // Forward

    this.ctx.translate(-this.camera_x, 0);

    // Draw() wird immer wieder aufgerufen
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addObjectsToMap(objects) {
    if (!Array.isArray(objects)) {
      return;
    }
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }

    mo.draw(this.ctx);
    mo.drawFram(this.ctx);

    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }

  /* Alternative (quick and dirty), um alle Intervalle zu beenden. */
  clearAllIntervals() {
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
  }
}
