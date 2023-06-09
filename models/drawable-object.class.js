class DrawableObject {
  x = 120;
  y = 250;
  height = 200;
  width = 100;
  img;
  imageCache = {};
  currentImage = 0;
  offset = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  };

  /**
   * Load the image from the path
   *
   * @param {string} path - the path of the img
   */
  loadImage(path) {
    this.img = new Image(); // this.img = document.getElementById('image')    <img id="image">
    this.img.src = path;
  }

  /**
   * to draw the context
   *
   * @param {string} ctx - canvas.getContext('2d')
   */
  draw(ctx) {
    try {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    } catch (e) {
      console.warn("Error loading image", e);
      console.log("could not load this img: ", this.img.src);
    }
  }

  /**
   * Draw frames for colliding methodes
   *
   * @param {string} ctx - canvas.getContext('2d')
   */
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
   * Load Images from array
   *
   * @param {Array} arr - {'img/image1.png', 'img/image2.png', ...}
   */
  loadImages(arr) {
    if (!Array.isArray(arr)) {
      console.error("loadImages: expected an array, but received:", arr);
      return;
    }
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }
}
