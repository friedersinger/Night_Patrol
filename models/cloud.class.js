class cloud extends MovableObject {
  y = 0;
  width = 300;
  height = 150;

  constructor() {
    super().loadImage("img/background/PNG/City2/Bright/cloud-dark.png");

    this.x = -200 + Math.random() * 800; // Zahl zwischen 200 und 700
  }
}
