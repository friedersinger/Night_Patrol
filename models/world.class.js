class World {
  character = new Character();
  endboss = new Endboss();
  level = level1;
  canvas;
  ctx;
  keyboard;
  camera_x = 0;
  statusBar = new StatusBar();
  fullscreen = new Fullscreen();
  throwableObjects = [new ThrowableObject()];
  collectedCoins = 0;
  collectedWaterBombs = 0;
  smallCoin = new SmallCoin();
  smallWaterBomb = new SmallWaterBomb();
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
  }

  setWorld() {
    this.character.world = this;
    this.endboss.world = this;
  }

  run() {
    setInterval(() => {
      this.checkCollisions();
      this.checkThrowObjects();
    }, 200);
  }

  checkThrowObjects() {
    if (this.keyboard.D) {
      let waterbomb = new ThrowableObject(
        this.character.x + 30,
        this.character.y + 30
      );
      this.throwableObjects.push(waterbomb);
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

    this.ctx.translate(-this.camera_x, 0); // Back
    // -------- SPACE FOR FIXED OBJECTS ------------
    this.addToMap(this.statusBar);
    this.addToMap(this.fullscreen);
    this.addToMap(this.smallCoin);
    this.addToMap(this.smallWaterBomb);
    this.ctx.translate(this.camera_x, 0); // Forward

    this.addToMap(this.character);
    this.addObjectsToMap(this.level.clouds);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.throwableObjects);

    this.ctx.translate(-this.camera_x, 0);

    // Draw() wird immer wieder aufgerufen
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addObjectsToMap(objects) {
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
