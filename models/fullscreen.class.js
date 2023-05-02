class Fullscreen extends DrawableObject {
  constructor() {
    super().loadImage("img/general/full-fullscreen.png");
    this.x = 695;
    this.y = 435;
    this.width = 40;
    this.height = 40;
    this.isFullscreen = false;
    this.handleClick = this.handleClick.bind(this);
    this.addClickListener();
  }

  addClickListener() {
    canvas.addEventListener("click", this.handleClick);
  }

  removeClickListener() {
    canvas.removeEventListener("click", this.handleClick);
  }

  handleClick(event) {
    if (this.isClicked(event.offsetX, event.offsetY)) {
      if (this.isFullscreen) {
        exitFullscreen();
      } else {
        fullscreen();
      }
      this.isFullscreen = !this.isFullscreen;
    }
  }

  isClicked(x, y) {
    return (
      x >= this.x &&
      x <= this.x + this.width &&
      y >= this.y &&
      y <= this.y + this.height
    );
  }
}
