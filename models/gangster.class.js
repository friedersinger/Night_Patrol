class Gangster extends MovableObject {
  constructor() {
    super().loadImage("img/gangster/png/3/walk/3_terrorist_3_Walk_000.png");

    this.x = 200 + Math.random() * 500; // Zahl zwischen 200 und 700
  }
}
