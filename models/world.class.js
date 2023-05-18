class World {
  character = new Character();
  level = level1;
  endboss = this.level.endboss[0];
  canvas;
  ctx;
  keyboard;
  camera_x = 0;
  statusBar = new StatusBar();
  throwableObjects = [new ThrowableObject()];
  coin = new Coin();
  waterbomb = new Waterbomb();
  smallCoin = new SmallCoin();
  smallWaterbomb = new SmallWaterbomb();
  collectedCoins = 0;
  collectedWaterbombs = 0;
  fullscreen = new Fullscreen();
  hitOneTime = false;
  gameOver = false;
  soundOn = false;

  collect_sound = new Audio("audio/collect.mp3");
  dead_gangster = new Audio("audio/jump_dead.mp3");
  splashed_waterbomb = new Audio("audio/splash.mp3");

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

  /**
   * Setting the world to Character and Endboss
   *
   */
  setWorld() {
    this.character.world = this;
    this.endboss.world = this;
  }

  /**
   * Checks if the sound is enabled
   *
   */
  checkSoundOn() {
    if (soundIsOn) {
      this.soundOn = true;
    }
  }

  /**
   * Executes game-over animation when the game is over.
   *
   *
   */
  gameIsOver() {
    setInterval(() => {
      if (this.gameOver) {
        //console.log('GameOver')
        document.getElementById("endScreen").style.display = "flex";
      }
    }, 200);
  }

  /**
   * Executes all necessary functions at appropriate intervals.
   *
   *
   */
  run() {
    setInterval(() => {
      this.checkCollisions();
      this.checkThrowObjects();
    }, 200);

    setInterval(() => {
      this.checkCollectCoin();
      this.checkCollectWaterbomb();
      this.checkGangsterDead();
      this.checkWaterbombHitEndboss();
      this.checkPositionForEndboss();
    }, 20);
  }

  /**
   * Ensures that the player has collected Waterbombs before throwing them.
   *
   */
  checkThrowObjects() {
    if (
      this.keyboard.D &&
      this.collectedWaterbombs > 0 &&
      this.character.otherDirection == false
    ) {
      this.throwThisWaterbomb();
    }
  }

  /**
   * Creates a new Waterbomb object and throws it.
   *
   *
   */
  throwThisWaterbomb() {
    let waterbomb = new ThrowableObject(
      this.character.x + 60,
      this.character.y
    );
    this.throwableObjects.push(waterbomb);
    this.collectedWaterbombs -= 1;
  }

  /**
   * Checks for collisions between game objects.
   *
   *
   */
  checkCollisions() {
    this.level.enemies.forEach((enemy) => {
      if (
        this.character.isColliding(enemy) &&
        this.character.speedY >= 0 &&
        !enemy.isDead
      ) {
        this.character.hit();
        this.statusBar.setPercentage(this.character.energy);
        console.log("Collision with character, energy ", this.character.energy);
      }
    });

    this.level.endboss.forEach((endboss) => {
      if (this.character.isColliding(endboss) && this.endboss.energy > 0) {
        this.character.hit();
        this.statusBar.setPercentage(this.character.energy);
        //console.log('Collision with character, energy ', this.character.energy);
      }
    });
  }

  /**
   * This function iterates over all the coins on the map and checks
   * if the character is colliding with any of them. If a collision is
   * detected, the coin is removed from the map, a collect sound is played
   * and the number of collected coins is incremented.
   *
   *
   */
  checkCollectCoin() {
    this.level.coins.forEach((coin, index) => {
      if (this.character.isColliding(coin, index)) {
        console.log("Cointreffer:", index);
        this.removeCoinFromMap(index);
        this.playCollectSound();
        this.collectedCoins++;
      }
    });
  }

  /**
   * Collect waterbomb if character collides with it
   *
   *
   */
  checkCollectWaterbomb() {
    this.level.waterbomb.forEach((waterbomb, index) => {
      if (this.character.isColliding(waterbomb, index)) {
        this.removeWaterbombFromMap(index);
        this.playCollectSound();
        this.collectedWaterbombs++;
      }
    });
  }

  /**
   * Play sound for collecting item
   *
   *
   */
  playCollectSound() {
    if (this.soundOn) {
      this.collect_sound.play();
    }
  }

  /**
   * Check if waterbomb hitted endboss
   *
   *
   */
  checkWaterbombHitEndboss() {
    this.throwableObjects.forEach((waterbomb, index) => {
      if (this.endboss.isColliding(waterbomb) && this.hitOneTime == false) {
        this.waterbombHitEndboss(index);
      }
    });
  }

  /**
   * Actions when waterbomb hits endboss
   *
   * @param {number} index - The index of the waterbomb
   */
  waterbombHitEndboss(index) {
    this.hitOneTime = true;
    this.endboss.energy -= 10;
    this.throwableObjects[index].waterbombHittedEndboss = true;
    this.playSplashWaterbomb();
    this.endboss.isAngry = true;
    setTimeout(() => {
      this.throwableObjects.splice(index, 1);
    }, 200);
    setTimeout(() => {
      this.hitOneTime = false;
    }, 200);
  }

  /**
   * Play sound of splashed waterbomb
   *
   *
   */
  playSplashWaterbomb() {
    if (this.soundOn) {
      this.splashed_waterbomb.play();
    }
  }

  /**
   * Check if gangster is dead by jumping on him
   *
   *
   */
  checkGangsterDead() {
    this.level.enemies.forEach((enemy) => {
      if (
        !enemy.isDead &&
        this.character.isColliding(enemy) &&
        this.character.speedY < 0
      ) {
        enemy.kill();
        this.playGangsterDead();
        this.removeDeadGangster(enemy);
        this.character.jump();
      }
    });
  }

  /**
   * Play sound for dead Gangster
   *
   *
   */
  playGangsterDead() {
    if (this.soundOn) {
      this.dead_gangster.play();
    }
  }

  /**
   * Remove dead Gangster from map
   *
   * @param {object} enemy - Enemy which has been killed
   */
  removeDeadGangster(enemy) {
    setTimeout(() => {
      let index = this.level.enemies.indexOf(enemy);
      this.level.enemies.splice(index, 1);
    }, 1000);
  }

  /**
   * Remove Coin from map
   *
   * @param {number} i - Index of the coin
   */
  removeCoinFromMap(i) {
    this.level.coins.splice(i, 1);
  }

  /**
   * Remove waterbomb from map
   *
   * @param {number} i - Index of the waterbomb     */
  removeWaterbombFromMap(i) {
    this.level.waterbomb.splice(i, 1);
  }

  /**
   * Check the position of the character for starting endboss
   *
   *
   */
  checkPositionForEndboss() {
    setInterval(() => {
      if (this.character.x > 2000) {
        this.level.endboss[0].firstContactEndboss = true;
      }
    }, 200);
  }

  /**
   * Renders all game objects on the canvas.
   *
   *
   */
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.camera_x, 0);

    this.addObjectsToMap(this.level.backgroundObjects);
    this.addObjectsToMap(this.level.clouds);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.level.endboss);
    this.addObjectsToMap(this.throwableObjects);
    this.addObjectsToMap(this.level.coins);
    this.addObjectsToMap(this.level.waterbomb);
    this.addToMap(this.character);

    this.ctx.translate(-this.camera_x, 0); // Back

    // -------- SPACE FOR FIXED OBJECTS ------------
    this.addToMap(this.statusBar);
    this.addToMap(this.fullscreen);
    this.addToMap(this.smallCoin);
    this.addToMap(this.smallWaterbomb);

    this.ctx.translate(this.camera_x, 0); // Forward

    this.drawAmountOfCollectedObjects();

    this.ctx.translate(-this.camera_x, 0);

    // Draw() wird immer wieder aufgerufen
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  /**
   * Draw the number of collected objects
   *
   *
   */
  drawAmountOfCollectedObjects() {
    this.ctx.font = "35px Anton";
    this.ctx.fillStyle = "white";
    this.ctx.fillText("= " + this.collectedCoins, 10 + this.character.x, 92); //number of Coins
    this.ctx.fillText(
      "= " + this.collectedWaterbombs,
      100 + this.character.x,
      92
    );
  }

  /**
   * Adds all objects to the rendering map.
   *
   * @param {object} objects - An array of objects to be added to the map
   * @returns {void}
   * Adds each object in the input array to the rendering map using the addToMap method.
   * If the input is not an array, the function returns without any action.
   */
  addObjectsToMap(objects) {
    if (!Array.isArray(objects)) {
      return;
    }
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  /**
   * Adds a single object to the rendering map, and flips it if necessary.
   *
   * @param {object} mo - The object to be added to the map.
   * @returns {void}
   * Adds the given object to the rendering map using the draw and drawFram methods.
   * If the object's otherDirection property is true, it is flipped using
   * the flipImage and flipImageBack methods.
   */
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

  /**
   * Flip the image horizontally.
   *
   * @param {Object} mo - The object whose image should be flipped.
   */
  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  /**
   * Flip the image back to its original orientation.
   *
   * @param {Object} mo - The object whose image should be flipped back.
   */
  flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }

  /**
   * Stop all intervals running in the window.
   *
   * Note: This is a quick and dirty solution.
   */
  clearAllIntervals() {
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
  }
}
