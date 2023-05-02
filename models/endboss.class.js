class Endboss extends MovableObject {
  y = 170;
  height = 300;
  width = 150;
  x = 2000;

  IMAGES_WALKING = [
    "img/gangster/png/3/Attack3/3_terrorist_3_Attack3_000.png",
    "img/gangster/png/3/Attack3/3_terrorist_3_Attack3_001.png",
    "img/gangster/png/3/Attack3/3_terrorist_3_Attack3_002.png",
    "img/gangster/png/3/Attack3/3_terrorist_3_Attack3_003.png",
    "img/gangster/png/3/Attack3/3_terrorist_3_Attack3_004.png",
    "img/gangster/png/3/Attack3/3_terrorist_3_Attack3_005.png",
  ];
  IMAGES_SPAWING = [
    "img/gangster/png/3/jump/3_terrorist_3_Jump_000.png",
    "img/gangster/png/3/jump/3_terrorist_3_Jump_001.png",
    "img/gangster/png/3/jump/3_terrorist_3_Jump_002.png",
    "img/gangster/png/3/jump/3_terrorist_3_Jump_003.png",
    "img/gangster/png/3/jump/3_terrorist_3_Jump_004.png",
    "img/gangster/png/3/jump/3_terrorist_3_Jump_005.png",
    "img/gangster/png/3/jump/3_terrorist_3_Jump_006.png",
    "img/gangster/png/3/jump/3_terrorist_3_Jump_007.png",
  ];

  constructor() {
    super().loadImage(this.IMAGES_WALKING[0]);
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_SPAWING);
    this.world = null;

    this.animate();
  }

  hadFirstContact = false;

  animate() {
    let i = 0;

    setInterval(() => {
      if (i < 10) {
        this.playAnimation(this.IMAGES_SPAWING);
      } else {
        this.playAnimation(this.IMAGES_WALKING);
      }

      i++;

      if (
        world &&
        world.character &&
        world.character.x > 1600 &&
        !this.hadFirstContact
      ) {
        i = 0;
        this.hadFirstContact = true;
      }
    }, 100);
  }
}
