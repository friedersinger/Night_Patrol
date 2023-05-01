class Character extends MovableObject {
  speed = 10;
  height = 200;

  IMAGES_WALKING = [
    "img/policeman/png/3/walk/3_police_Walk_000.png",
    "img/policeman/png/3/walk/3_police_Walk_001.png",
    "img/policeman/png/3/walk/3_police_Walk_002.png",
    "img/policeman/png/3/walk/3_police_Walk_003.png",
    "img/policeman/png/3/walk/3_police_Walk_004.png",
    "img/policeman/png/3/walk/3_police_Walk_005.png",
    "img/policeman/png/3/walk/3_police_Walk_006.png",
    "img/policeman/png/3/walk/3_police_Walk_007.png",
  ];

  IMAGES_JUMPING = [
    "img/policeman/png/3/jump/3_police_Jump_000.png",
    "img/policeman/png/3/jump/3_police_Jump_001.png",
    "img/policeman/png/3/jump/3_police_Jump_002.png",
    "img/policeman/png/3/jump/3_police_Jump_003.png",
    "img/policeman/png/3/jump/3_police_Jump_004.png",
    "img/policeman/png/3/jump/3_police_Jump_005.png",
    "img/policeman/png/3/jump/3_police_Jump_006.png",
    "img/policeman/png/3/jump/3_police_Jump_007.png",
  ];

  IMAGES_DEAD = [
    "img/policeman/png/3/hurt/3_police_Hurt_000.png",
    "img/policeman/png/3/hurt/3_police_Hurt_001.png",
    "img/policeman/png/3/hurt/3_police_Hurt_002.png",
    "img/policeman/png/3/hurt/3_police_Hurt_003.png",
    "img/policeman/png/3/hurt/3_police_Hurt_004.png",
    "img/policeman/png/3/hurt/3_police_Hurt_005.png",
    "img/policeman/png/3/hurt/3_police_Hurt_006.png",
    "img/policeman/png/3/hurt/3_police_Hurt_007.png",
    "img/policeman/png/3/hurt/3_police_Hurt_008.png",
  ];

  IMAGES_HURT = [
    "img/policeman/png/3/hurt/3_police_Hurt_000.png",
    "img/policeman/png/3/hurt/3_police_Hurt_001.png",
    "img/policeman/png/3/hurt/3_police_Hurt_002.png",
    "img/policeman/png/3/hurt/3_police_Hurt_003.png",
  ];

  IMAGES_ATTACK = [
    "img/policeman/png/3/attack3/3_police_attack_Attack3_000.png",
    "img/policeman/png/3/attack3/3_police_attack_Attack3_001.png",
    "img/policeman/png/3/attack3/3_police_attack_Attack3_002.png",
    "img/policeman/png/3/attack3/3_police_attack_Attack3_003.png",
    "img/policeman/png/3/attack3/3_police_attack_Attack3_004.png",
    "img/policeman/png/3/attack3/3_police_attack_Attack3_005.png",
  ];

  world;
  walking_sound = new Audio("audio/walking.mp3");

  constructor() {
    super().loadImage("img/policeman/png/3/walk/3_police_Walk_000.png");
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_JUMPING);
    this.loadImages(this.IMAGES_DEAD);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_ATTACK);
    this.applyGravity();
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.walking_sound.pause();
      if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
        this.moveRight();
        this.otherDirection = false;
        this.walking_sound.play();
      }
      if (this.world.keyboard.LEFT && this.x > 0) {
        this.moveLeft();
        this.walking_sound.play();
        this.otherDirection = true;
      }

      if (
        (this.world.keyboard.UP || this.world.keyboard.SPACE) &&
        !this.isAboveGround()
      ) {
        this.jump();
      }

      this.world.camera_x = -this.x + 100;
    }, 1000 / 60);

    setInterval(() => {
      if (this.isDead()) {
        this.playAnimation(this.IMAGES_DEAD);
      } else if (this.isHurt()) {
        this.playAnimation(this.IMAGES_HURT);
      } else if (this.isAboveGround()) {
        this.playAnimation(this.IMAGES_JUMPING);
      } else if (this.world.keyboard.D) {
        this.playAnimation(this.IMAGES_ATTACK);
      } else {
        if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
          this.playAnimation(this.IMAGES_WALKING);
        }
      }
    }, 50);
  }

  jump() {
    this.speedY = 30;
  }
}
