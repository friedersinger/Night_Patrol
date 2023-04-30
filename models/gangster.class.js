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
    "img/gangster/png/3/walk/3_terrorist_3_Walk_006.png",
    "img/gangster/png/3/walk/3_terrorist_3_Walk_007.png",
  ];

  constructor() {
    super().loadImage("img/gangster/png/3/walk/3_terrorist_3_Walk_000.png");
    this.loadImages(this.IMAGES_WALKING);

    this.x = 200 + Math.random() * 500; // Zahl zwischen 200 und 700
    this.speed = 0.4 + Math.random() * 0.5;
    this.animate();
  }

  animate() {
    this.moveLeft();

    setInterval(() => {
      this.playAnimation(this.IMAGES_WALKING);
    }, 100);
  }
}
