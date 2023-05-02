class DrawableObject {
  x = 120;
  y = 250;
  height = 200;
  width = 100;
  img;
  imageCache = {};
  currentImage = 0;

  // loadImage('img/test.png');
  loadImage(path) {
    this.img = new Image(); // this.img = document.getElementById('image')    <img id="image">
    this.img.src = path;
  }

  draw(ctx) {
    try {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    } catch (e) {
      console.warn("Error loading image", e);
      console.log("could not load this img: ", this.img.src);
    }
  }

  drawFram(ctx) {
    if (
      this instanceof Character ||
      this instanceof Gangster ||
      this instanceof Endboss
    ) {
      // HTML canvas rect() Method
      ctx.beginPath();
      ctx.lineWidth = "5";
      ctx.strokeStyle = "red";
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.stroke();
    }
  }

  /**
   *
   * @param {Array} arr - {'img/image1.png', 'img/image2.png', ...}
   */
  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }
}
