class Endboss extends MovableObject {
  y = 170;
  height = 300;
  width = 150;

  IMAGES_WALKING = [
    "img/gangster/png/3/Attack3/3_terrorist_3_Attack3_000.png",
    "img/gangster/png/3/Attack3/3_terrorist_3_Attack3_001.png",
    "img/gangster/png/3/Attack3/3_terrorist_3_Attack3_002.png",
    "img/gangster/png/3/Attack3/3_terrorist_3_Attack3_003.png",
    "img/gangster/png/3/Attack3/3_terrorist_3_Attack3_004.png",
    "img/gangster/png/3/Attack3/3_terrorist_3_Attack3_005.png",
  ];

  constructor() {
    super().loadImage(this.IMAGES_WALKING[0]);
    this.loadImages(this.IMAGES_WALKING);
    this.x = 500;
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES_WALKING);
    }, 100);
  }
}
