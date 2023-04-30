class Character extends MovableObject {
  speed = 10;

  IMAGES_WALKING = [
    "img/policeman/png/3/walk/3_police_Walk_000.png",
    "img/policeman/png/3/walk/3_police_Walk_001.png",
    "img/policeman/png/3/walk/3_police_Walk_002.png",
    "img/policeman/png/3/walk/3_police_Walk_003.png",
    "img/policeman/png/3/walk/3_police_Walk_004.png",
    "img/policeman/png/3/walk/3_police_Walk_005.png",
    "img/policeman/png/3/walk/3_police_Walk_006.png",
    "img/policeman/png/3/walk/3_police_Walk_007.png",
  ];
  world;
  currentImage = 0;

  constructor() {
    super().loadImage("img/policeman/png/3/walk/3_police_Walk_000.png");
    this.loadImages(this.IMAGES_WALKING);

    this.animate();
  }

  animate() {
    setInterval(() => {
      if (this.world.keyboard.RIGHT) {
        this.x += this.speed;
        this.otherDirection = false;
      }
      if (this.world.keyboard.LEFT) {
        this.x -= this.speed;
        this.otherDirection = true;
      }
    }, 1000 / 60);

    setInterval(() => {
      if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
        // WALK ANIMATION
        // % - is the rest modulo
        let i = this.currentImage % this.IMAGES_WALKING.length; // let i = 8 % 7; => 1, Rest 1 =>
        // i = 0, 1, 2, 3, 4, 5, 6 , 7, 0, 1, 2, 3, 4, 5, 6, 7, 0
        let path = this.IMAGES_WALKING[i];
        this.img = this.imageCache[path];
        this.currentImage++;
      }
    }, 50);
  }

  jump() {}
}
