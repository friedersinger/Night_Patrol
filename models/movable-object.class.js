class MovableObject {
  x = 120;
  y = 200;
  img;
  height = 200;
  width = 100;

  // loadImage('img/test.png');
  loadImage(path) {
    this.img = new Image(); // this.img = document.getElementById('image')    <img id="image">
    this.img.src = path;
  }

  moveRight() {
    console.log("Moving right");
  }

  moveLeft() {}
}
