class Endboss extends MovableObject {
  height = 400;
  width = 200;
  x = 2600;
  y = 320;

  IMAGES_WALKING = [
    "img/gangster/png/3/Attack3/3_terrorist_3_Attack3_000.png",
    "img/gangster/png/3/Attack3/3_terrorist_3_Attack3_001.png",
    "img/gangster/png/3/Attack3/3_terrorist_3_Attack3_002.png",
    "img/gangster/png/3/Attack3/3_terrorist_3_Attack3_003.png",
    "img/gangster/png/3/Attack3/3_terrorist_3_Attack3_004.png",
    "img/gangster/png/3/Attack3/3_terrorist_3_Attack3_005.png",
  ];
  IMAGES_SPAWNING = [
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
    this.loadImages(this.IMAGES_SPAWNING);
    // this.applyGravity();

    this.world = null;

    this.animate();
  }

  hadFirstContact = false;

  animate() {
    let i = 0;

    setInterval(() => {
      if (i < 10) {
        this.playAnimation(this.IMAGES_SPAWNING);
        this.jump();
      } else {
        this.playAnimation(this.IMAGES_WALKING);
        this.speed = 1;
        this.moveLeft();
      }

      i++;

      if (
        world &&
        world.character &&
        world.character.x > 2100 &&
        !this.hadFirstContact
      ) {
        i = 0;
        this.hadFirstContact = true;
      }
    }, 100);
  }

  jump() {
    if (this.y < 240) {
      this.speedY = 15;
    } else if (this.y < 300) {
      this.speedY = 10;
    } else {
      this.speedY = 5;
    }

    this.speed = 6; // set horizontal speed during jump
    this.moveLeft(); // move left during jump
    this.y -= this.speedY; // move up during jump
  }
}
