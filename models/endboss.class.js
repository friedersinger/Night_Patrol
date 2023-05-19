class Endboss extends MovableObject {
  height = 400;
  width = 200;
  y = 100;
  speed = 1;
  firstContactEndboss = false;
  isAngry = false;

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
  IMAGES_ANGRY = [
    "img/gangster/png/3/Angry/3_terrorist_3_Angry3_000.png",
    "img/gangster/png/3/Angry/3_terrorist_3_Angry3_001.png",
    "img/gangster/png/3/Angry/3_terrorist_3_Angry3_002.png",
    "img/gangster/png/3/Angry/3_terrorist_3_Angry3_003.png",
    "img/gangster/png/3/Angry/3_terrorist_3_Angry3_004.png",
    "img/gangster/png/3/Angry/3_terrorist_3_Angry3_005.png",
  ];
  IMAGES_DEAD = [
    "img/gangster/png/3/hurt/3_terrorist_3_Hurt_000.png",
    "img/gangster/png/3/hurt/3_terrorist_3_Hurt_001.png",
    "img/gangster/png/3/hurt/3_terrorist_3_Hurt_002.png",
    "img/gangster/png/3/hurt/3_terrorist_3_Hurt_003.png",
    "img/gangster/png/3/hurt/3_terrorist_3_Hurt_004.png",
    "img/gangster/png/3/hurt/3_terrorist_3_Hurt_005.png",
    "img/gangster/png/3/hurt/3_terrorist_3_Hurt_006.png",
    "img/gangster/png/3/hurt/3_terrorist_3_Hurt_007.png",
    "img/gangster/png/3/hurt/3_terrorist_3_Hurt_008.png",
  ];

  win_sound = new Audio("audio/win.mp3");

  constructor() {
    super().loadImage(this.IMAGES_WALKING[0]);
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_SPAWNING);
    this.loadImages(this.IMAGES_ANGRY);
    this.loadImages(this.IMAGES_DEAD);
    // this.applyGravity();

    this.x = 2600;
    this.world = null;

    this.animate();
  }

  /**
   * Animates the endboss if walking, angry or dead
   *
   *
   */
  animate() {
    this.startEndboss();

    let IDOfInterval = setInterval(() => {
      if (this.energy == 100) {
        this.playAnimation(this.IMAGES_WALKING);
      } else if (this.energy < 100 && this.energy > 0 && this.isAngry) {
        this.playAnimation(this.IMAGES_ANGRY);
        this.speed = 2;
      } else if (this.energy <= 0) {
        this.endbossIsDead();
      }
    }, 150);
  }

  /**
   * if character is near enough the endboss starts walking
   * if the character is behind the endboss it is gameover
   *
   */
  startEndboss() {
    setInterval(() => {
      if (this.firstContactEndboss) {
        // if (this.x > this.world.character.x + this.world.character.width) {
        this.moveToLeft();
      } else if (this.world.character.x > this.x + this.width) {
        this.world.gameOver = true;
      }
    }, 20);
  }

  /**
   * endboss walks left
   *
   *
   */
  moveToLeft() {
    this.moveLeft();
  }
  /**
   * Play animation for dead endboss
   *
   *
   */
  endbossIsDead() {
    this.playAnimation(this.IMAGES_DEAD);
    this.speed = 0;
    this.playWinSound();
    setTimeout(() => {
      this.world.gameOver = true;
      clearInterval(this.IDOfInterval);
    }, 2000);
  }

  /**
   * Play sound for dead endboss
   *
   *
   */
  playWinSound() {
    if (this.world.soundOn) {
      this.win_sound.play();
    }
  }
}
