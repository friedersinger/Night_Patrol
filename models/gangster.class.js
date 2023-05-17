class Gangster extends MovableObject {
  y = 300;
  height = 150;
  width = 80;
  IMAGES_WALKING = [
    "img/gangster/png/3/walk/3_terrorist_3_Walk_000.png",
    "img/gangster/png/3/walk/3_terrorist_3_Walk_001.png",
    "img/gangster/png/3/walk/3_terrorist_3_Walk_002.png",
    "img/gangster/png/3/walk/3_terrorist_3_Walk_003.png",
    "img/gangster/png/3/walk/3_terrorist_3_Walk_004.png",
    "img/gangster/png/3/walk/3_terrorist_3_Walk_005.png",
    // "img/gangster/png/3/walk/3_terrorist_3_Walk_006.png",
    // "img/gangster/png/3/walk/3_terrorist_3_Walk_007.png",
  ];
  IMAGE_DEATH = ["img/gangster/png/3/hurt/3_terrorist_3_Hurt_008.png"];
  isDead = false;

  constructor() {
    super().loadImage("img/gangster/png/3/walk/3_terrorist_3_Walk_000.png");
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGE_DEATH);

    this.x = 200 + Math.random() * 3500; // Zahl zwischen 200 und 3300
    this.speed = 0.4 + Math.random() * 0.5;
    this.animate();
  }

  /**
   * Make the gangsters moving
   *
   *
   */
  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);

    this.animateGangsterDeadOrWalking();
  }

  /**
   * Play animation if gangster is dead or walking
   *
   *
   */
  animateGangsterDeadOrWalking() {
    setInterval(() => {
      if (this.isDead) {
        this.playAnimation(this.IMAGE_DEATH);
      }
      // Chicken WALKING
      else {
        this.playAnimation(this.IMAGES_WALKING);
      }
    }, 125);
  }
}
