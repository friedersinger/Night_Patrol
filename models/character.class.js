class Character extends MovableObject {
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
  currentImage = 0;

  constructor() {
    super().loadImage("img/policeman/png/3/walk/3_police_Walk_000.png");
    this.loadImages(this.IMAGES_WALKING);

    this.animate();
  }

  animate() {
    setInterval(() => {
      // % - is the rest modulo
      let i = this.currentImage % this.IMAGES_WALKING.length; // let i = 8 % 7; => 1, Rest 1 =>
      // i = 0, 1, 2, 3, 4, 5, 6 , 7, 0, 1, 2, 3, 4, 5, 6, 7, 0
      let path = this.IMAGES_WALKING[i];
      this.img = this.imageCache[path];
      this.currentImage++;
    }, 100);
  }

  jump() {}
}
