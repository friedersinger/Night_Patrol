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
    this.x = 100;
    this.y = 100;
    this.setPercentage(100);
  }

  // Set Perc. 50
  setPercentage(percentage) {
    this.percentage = percentage; // => 0 .. 5
    let imagePath = this.IMAGES[this.resolveImageIndex()];
    this.img = this.imageCache[imagePath];
  }

  resolveImageIndex() {
    if (this.percentage == 100) {
      return 5;
    } else if (this.percentage > 80) {
      return 4;
    } else if (this.percentage > 80) {
      return 3;
    } else if (this.percentage > 80) {
      return 2;
    } else if (this.percentage > 80) {
      return 1;
    } else {
      return 0;
    }
  }
}
