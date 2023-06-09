class ThrowableObject extends MovableObject {
  bottleHittedEndboss = false;

  IMAGES_WATERBOMB = [
    "img/water/waterbomb.png",
    "img/water/waterbomb2.png",
    "img/water/waterbomb3.png",
    "img/water/waterbomb4.png",
  ];

  IMAGES_WATERSPLASH = [
    "img/water/water_splash/1_bottle_splash.png",
    "img/water/water_splash/2_bottle_splash.png",
    "img/water/water_splash/3_bottle_splash.png",
    "img/water/water_splash/4_bottle_splash.png",
    "img/water/water_splash/5_bottle_splash.png",
    "img/water/water_splash/6_bottle_splash.png",
  ];

  constructor(x, y) {
    super().loadImage("img/water/waterbomb.png");
    this.loadImages(this.IMAGES_WATERBOMB);
    this.loadImages(this.IMAGES_WATERSPLASH);
    this.x = 100;
    this.y = 100;
    this.height = 80;
    this.width = 80;
    this.throw(x, y);
    this.animate();
  }

  throw(x, y) {
    this.x = x;
    this.y = y;
    this.speedY = 30;
    this.applyGravity();
    setInterval(() => {
      this.x += 10;
    }, 25);
  }

  /**
   * Play animation for the object if it hits the endboss or not
   *
   *
   */
  animate() {
    let IDOfWaterbombInterval = setInterval(() => {
      if (this.waterbombHittedEndboss) {
        this.playAnimation(this.IMAGES_WATERSPLASH);
        clearInterval(IDOfWaterbombInterval);
      } else if (!this.waterbombHittedEndboss) {
        this.playAnimation(this.IMAGES_WATERBOMB);
      }
    }, 60);
  }
}
