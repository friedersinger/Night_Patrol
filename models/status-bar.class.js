class StatusBar extends DrawableObject {
  IMAGES = [
    "img/statusbars/1_statusbar/2_statusbar_health/green/0.png", // 0
    "img/statusbars/1_statusbar/2_statusbar_health/green/20.png",
    "img/statusbars/1_statusbar/2_statusbar_health/green/40.png",
    "img/statusbars/1_statusbar/2_statusbar_health/green/60.png",
    "img/statusbars/1_statusbar/2_statusbar_health/green/80.png",
    "img/statusbars/1_statusbar/2_statusbar_health/green/100.png", // 5
  ];

  percentage = 100;

  constructor() {
    super();
    this.loadImages(this.IMAGES);
    this.x = 30;
    this.y = 0;
    this.width = 200;
    this.height = 65;
    this.setPercentage(100);
  }

  /**
   * Set the image of the Statusbar based on the given percentage
   *
   * @param {number} percentage - The percentage to display on the Statusbar
   */
  setPercentage(percentage) {
    this.percentage = percentage; // => 0 .. 5
    console.log(percentage);
    let path = this.IMAGES[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  /**
   * Resolve the index of the picture to use on the Statusbar
   *
   * @returns {number} - The index of the picture in the IMAGES array
   */
  resolveImageIndex() {
    if (this.percentage == 100) {
      return 5;
    } else if (this.percentage > 80) {
      return 4;
    } else if (this.percentage > 60) {
      return 3;
    } else if (this.percentage > 40) {
      return 2;
    } else if (this.percentage > 20) {
      return 1;
    } else {
      return 0;
    }
  }
}
