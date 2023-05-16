class Coin extends DrawableObject {
  offset = {
    top: 20,
    bottom: 20,
    left: 20,
    right: 20,
  };

  constructor() {
    super().loadImage("img/coin/coin_2.png");
    this.x = 200 + Math.random() * 2500; //Zahl zwischen 200 und 1200
    this.y = 80 + Math.random() * 80;
    this.width = 150;
    this.height = 150;
  }
}
