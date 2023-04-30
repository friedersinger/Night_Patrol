class MovableObject {
  x = 120;
  y = 250;
  img;
  height = 200;
  width = 100;
  imageCache = {};
  currentImage = 0;
  speed = 0.4;
  otherDirection = false;
  speedY = 0;
  acceleration = 2.5;

  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }

  isAboveGround() {
    return this.y < 240;
  }

  // loadImage('img/test.png');
  loadImage(path) {
    this.img = new Image(); // this.img = document.getElementById('image')    <img id="image">
    this.img.src = path;
  }

  /**
   *
   * @param {Array} arr - {'img/image1.png', 'img/image2.png', ...}
   */
  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  playAnimation(images) {
    // WALK ANIMATION
    // % - is the rest modulo
    let i = this.currentImage % this.IMAGES_WALKING.length; // let i = 8 % 7; => 1, Rest 1 =>
    // i = 0, 1, 2, 3, 4, 5, 6 , 7, 0, 1, 2, 3, 4, 5, 6, 7, 0
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  moveRight() {
    this.x += this.speed;
    this.otherDirection = false;
    this.walking_sound.play();
  }

  moveLeft() {
    this.x -= this.speed;
    this.otherDirection = true;
  }

  jump() {
    this.speedY = 30;
  }
}
