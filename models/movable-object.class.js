class MovableObject extends DrawableObject {
  speed = 0.4;
  otherDirection = false;
  speedY = 0;
  acceleration = 2.5;
  energy = 100;
  lastHit = 0;

  /**
   * Applies gravity to the object to simulate jumping or throwing objects.
   *
   *
   */
  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }

  /**
   * Checks if the object is currently above the ground level.
   * Throwable objects are considered to always be above the ground.
   * @returns {boolean} true if the object is above the ground, false otherwise
   */
  isAboveGround() {
    if (this instanceof ThrowableObject) {
      // Throwable Objects should always fall
      return true;
    } else {
      return this.y < 240;
    }
  }

  /**
   * Check if this object is colliding with another object
   * @param {Object} obj - The object to check collision against
   * @returns {boolean} - True if objects are colliding, false otherwise
   */
  isColliding(mo) {
    return (
      this.x + this.width > mo.x &&
      this.y + this.height > mo.y &&
      this.x < mo.x &&
      this.y < mo.y + mo.height
    );
  }

  /**
   * Decrease energy by hitting and update last hit time
   *
   *
   */
  hit() {
    if (this instanceof Endboss) {
      this.energy -= 100;
    } else {
      this.energy -= 5;
      if (this.energy < 0) {
        this.energy = 0;
      } else {
        this.lastHit = new Date().getTime();
      }
    }
  }

  /**
   * Checks if the character is hurt by comparing the time since the last hit to 0.5 seconds
   *
   * @returns {boolean} Returns true if the time since the last hit is under 0.5 seconds, false otherwise.
   */
  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit; // Difference in ms
    timepassed = timepassed / 1000; // Difference in s
    return timepassed < 0.5;
  }

  /**
   * Check if the object's energy is depleted, which means it is dead
   *
   * @returns {boolean} True if the object's energy is zero (dead), false otherwise
   */
  isDead() {
    return this.energy == 0;
  }

  /**
   * Plays the animation by cycling through an array of images.
   *
   * @param {Array} images - The array of images to use for the animation.
   *                        Each image must be a path to the image file.
   *                        The images will be cycled through in order.
   */
  playAnimation(images) {
    // WALK ANIMATION
    // % - is the rest modulo
    let i = this.currentImage % images.length; // let i = 8 % 7; => 1, Rest 1 =>
    // i = 0, 1, 2, 3, 4, 5, 6 , 7, 0, 1, 2, 3, 4, 5, 6, 7, 0
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  /**
   * Moves the object to the right
   *
   *
   */
  moveRight() {
    this.x += this.speed;
  }

  /**
   * Moves the object to the left
   *
   *
   */
  moveLeft() {
    this.x -= this.speed;
  }

  /**
   * Makes the object jump by setting its vertical speed
   *
   *
   */
  jump() {
    this.speedY = 30;
  }
}
