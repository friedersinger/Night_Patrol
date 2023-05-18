class Level {
  enemies;
  endboss;
  clouds;
  backgroundObjects;
  level_end_x;
  coins;
  waterbomb;

  constructor(
    enemies,
    endboss,
    clouds,
    backgroundObjects,
    level_end_x,
    coins,
    waterbomb
  ) {
    this.enemies = enemies;
    this.endboss = endboss;
    this.clouds = clouds;
    this.backgroundObjects = backgroundObjects;
    this.level_end_x = level_end_x;
    this.coins = coins;
    this.waterbomb = waterbomb;
  }
}
