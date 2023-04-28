class World {
  character = new Character();
  enemies = [new Gangster(), new Gangster(), new Gangster()];
  clouds = [new cloud()];
  backgroundObjects = [
    new BackgroundObject("img/background/PNG/City2/Bright/Sky.png", 0),
    new BackgroundObject("img/background/PNG/City2/Bright/back.png", 0),
    new BackgroundObject("img/background/PNG/City2/Bright/houses3.png", 0),
    new BackgroundObject("img/background/PNG/City2/Bright/houses1.png", 0),
    new BackgroundObject(
      "img/background/PNG/City2/Bright/minishop&callbox.png",
      0
    ),
    new BackgroundObject("img/background/PNG/City2/Bright/road&lamps.png", 0),
  ];

  canvas;
  ctx;

  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.addObjectsToMap(this.backgroundObjects);
    this.addObjectsToMap(this.clouds);
    this.addToMap(this.character);
    this.addObjectsToMap(this.enemies);

    // Draw() wird immer wieder aufgerufen
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  addToMap(mo) {
    this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
  }
}
