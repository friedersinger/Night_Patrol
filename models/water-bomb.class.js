class Waterbomb extends DrawableObject {
  constructor() {
    super().loadImage("img/water/water-drop-png-photo-12.png");
    this.x = 200 + Math.random() * 2500;
    this.y = 400;
    this.width = 30;
    this.height = 40;
  }
}
