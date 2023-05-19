class Character extends MovableObject {
  speed = 10;
  height = 200;

  offset = {
    top: 130,
    bottom: 15,
    left: 40,
    right: 40,
  };

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

  IMAGES_STAND = [
    "img/policeman/png/3/idle/3_police_Idle_000.png",
    "img/policeman/png/3/idle/3_police_Idle_001.png",
    "img/policeman/png/3/idle/3_police_Idle_002.png",
    "img/policeman/png/3/idle/3_police_Idle_003.png",
    "img/policeman/png/3/idle/3_police_Idle_004.png",
    "img/policeman/png/3/idle/3_police_Idle_005.png",
    "img/policeman/png/3/idle/3_police_Idle_006.png",
    "img/policeman/png/3/idle/3_police_Idle_007.png",
  ];

  world;
  walking_sound = new Audio("audio/walking.mp3");
  collect_sound = new Audio("audio/collect.mp3");
  hurt_sound = new Audio("audio/hurt.mp3");
  jump_sound = new Audio("audio/jump.mp3");
  win_sound = new Audio("audio/win.mp3");
  lost_sound = new Audio("audio/lost.mp3");
  shot_sound = new Audio("audio/shot.mp3");

  constructor() {
    super().loadImage("img/policeman/png/3/walk/3_police_Walk_000.png");
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_JUMPING);
    this.loadImages(this.IMAGES_DEAD);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_ATTACK);
    this.loadImages(this.IMAGES_STAND);
    this.applyGravity();
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.handleMovement();
      this.updateCameraPosition();
    }, 1000 / 60);

    this.intervalMovments();
  }

  isWalking() {
    return this.world.keyboard.RIGHT || this.world.keyboard.LEFT;
  }

  handleMovement() {
    this.walking_sound.pause();

    const { keyboard, level } = this.world;
    const { RIGHT, LEFT, UP, SPACE } = keyboard;
    const { level_end_x } = level;

    if (RIGHT && this.x < level_end_x) {
      this.moveRight();
      this.otherDirection = false;
      this.playWalkingSound();
    }

    if (LEFT && this.x > -500) {
      this.moveLeft();
      this.playWalkingSound();
      this.otherDirection = true;
    }

    if ((UP || SPACE) && !this.isAboveGround()) {
      this.jump();
      this.playJumpingSound();
    }
  }

  intervalMovments() {
    setInterval(() => {
      if (this.isDead()) {
        this.playDead();
      } else if (this.isHurt()) {
        this.playAnimation(this.IMAGES_HURT);
        this.playHurtSound();
      } else if (this.isAboveGround()) {
        this.playAnimation(this.IMAGES_JUMPING);
      } else if (this.world.keyboard.D) {
        this.playAnimation(this.IMAGES_ATTACK);
        this.playWaterBomb();
      } else {
        if (this.isWalking()) {
          this.playAnimation(this.IMAGES_WALKING);
        } else {
          this.playAnimation(this.IMAGES_STAND);
        }
      }
    }, 50);
  }

  updateCameraPosition() {
    this.world.camera_x = -this.x + 100;
  }

  /**
   * Plays a sound effect for when the character is dead.
   *
   *
   */
  playDead() {
    this.playAnimation(this.IMAGES_DEAD);
    this.playLostSound();
    setTimeout(() => {
      clearInterval(this.interval);
    }, 300);
    this.world.gameOver = true;
  }

  /**
   * Plays a sound effect for when the character is walking.
   *
   *
   */
  playWalkingSound() {
    if (this.world.soundOn) {
      this.walking_sound.play();
    }
  }

  /**
   * Makes the character jump.
   *
   *
   */
  jump() {
    this.speedY = 30;
  }

  /**
   * Plays a sound effect for jumping.
   *
   *
   */
  playJumpingSound() {
    if (this.world.soundOn) {
      this.jump_sound.play();
    }
  }

  /**
   * Plays a sound effect for when the character collects an item.
   *
   *
   */
  playCollectSound() {
    if (this.world.soundOn) {
      this.collect_sound.play();
    }
  }

  /**
   * Plays a sound effect for when the character uses a water bomb.
   *
   *
   */
  playWaterBomb() {
    if (this.world.soundOn) {
      this.shot_sound.play();
    }
  }

  /**
   * Plays a sound effect for when the character loses the game.
   *
   *
   */
  playLostSound() {
    if (this.world.soundOn) {
      this.lost_sound.play();
    }
  }

  /**
   * Plays a sound effect for when the character wins the game.
   *
   *
   */
  playWinSound() {
    if (this.world.soundOn) {
      this.win_sound.play();
    }
  }

  /**
   * Plays a sound effect for when the character gets hurt.
   *
   *
   */
  playHurtSound() {
    if (this.world.soundOn) {
      this.hurt_sound.play();
    }
  }
}
