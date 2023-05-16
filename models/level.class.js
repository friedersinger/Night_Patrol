class Level {
  enemies;
  clouds;
  backgroundObjects;
  level_end_x = 2500;
  coins;
  waterbomb;

  constructor(
    enemies,
    clouds,
    backgroundObjects,
    level_end_x,
    coins,
    waterbomb
  ) {
    this.enemies = enemies;
    this.clouds = clouds;
    this.backgroundObjects = backgroundObjects;
    this.level_end_x = level_end_x;
    this.coins = coins;
    this.waterbomb = waterbomb;
  }
}
