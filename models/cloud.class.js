class cloud extends MovableObject {
  y = 0;
  width = 300;
  height = 150;

  constructor() {
    super().loadImage("img/background/PNG/City2/Bright/cloud-dark.png");

    this.x = -200 + Math.random() * 4000; // Zahl zwischen 200 und 3800
    this.animate();
  }

  /**
   * Animates the clouds by moving them to the left.
   * Runs every 1/60th of a second. 60 FPS
   *
   */
  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);
  }
}
