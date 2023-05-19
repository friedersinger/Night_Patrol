let level1;
function initLevel() {
  level1 = new Level(
    // const level1 = new Level(
    createGangster(),
    createEndboss(),
    createClouds(),
    createBackground(),
    createEndLevel(),
    createCoins(),
    createWaterbombs()
  );
}

function createGangster() {
  return [
    new Gangster(),
    new Gangster(),
    new Gangster(),
    new Gangster(),
    new Gangster(),
    new Gangster(),
    new Gangster(),
    new Gangster(),
    new Gangster(),
    new Gangster(),
    new Gangster(),
    new Gangster(),
  ];
}

function createEndboss() {
  return [new Endboss()];
}

function createClouds() {
  return [(new cloud(), new cloud(), new cloud(), new cloud(), new cloud())];
}

function createBackground() {
  return [
    new BackgroundObject("img/background/PNG/City2/Bright/Sky.png", -720),
    new BackgroundObject("img/background/PNG/City2/Bright/back.png", -720),

    new BackgroundObject("img/background/PNG/City2/Bright/houses3.png", -720),
    new BackgroundObject("img/background/PNG/City2/Bright/houses1.png", -720),
    new BackgroundObject(
      "img/background/PNG/City2/Bright/minishop&callbox.png",
      -720
    ),
    new BackgroundObject(
      "img/background/PNG/City2/Bright/road&lamps.png",
      -720
    ),
    new BackgroundObject("img/background/PNG/City2/Bright/Sky.png", 0),
    new BackgroundObject("img/background/PNG/City2/Bright/back.png", 0),
    new BackgroundObject("img/background/PNG/City2/Bright/houses3.png", 0),
    new BackgroundObject("img/background/PNG/City2/Bright/houses1.png", 0),
    new BackgroundObject(
      "img/background/PNG/City2/Bright/minishop&callbox.png",
      0
    ),
    new BackgroundObject("img/background/PNG/City2/Bright/road&lamps.png", 0),
    new BackgroundObject("img/background/PNG/City2/Bright/Sky.png", 720),
    new BackgroundObject("img/background/PNG/City2/Bright/back.png", 720),
    // new BackgroundObject("img/background/PNG/City2/Bright/houses3.png", 720),
    new BackgroundObject("img/background/PNG/City2/Bright/houses1.png", 720),
    // new BackgroundObject(
    //   "img/background/PNG/City2/Bright/minishop&callbox.png",
    //   720
    // ),
    new BackgroundObject("img/background/PNG/City2/Bright/road&lamps.png", 720),
    new BackgroundObject("img/background/PNG/City2/Bright/Sky.png", 720 * 2),
    new BackgroundObject("img/background/PNG/City2/Bright/back.png", 720 * 2),
    new BackgroundObject(
      "img/background/PNG/City2/Bright/houses3.png",
      720 * 2
    ),
    new BackgroundObject(
      "img/background/PNG/City2/Bright/houses1.png",
      720 * 2
    ),
    new BackgroundObject(
      "img/background/PNG/City2/Bright/minishop&callbox.png",
      720 * 2
    ),
    new BackgroundObject(
      "img/background/PNG/City2/Bright/road&lamps.png",
      720 * 2
    ),
    new BackgroundObject("img/background/PNG/City2/Bright/Sky.png", 720 * 3),
    new BackgroundObject("img/background/PNG/City2/Bright/back.png", 720 * 3),
    new BackgroundObject(
      "img/background/PNG/City2/Bright/houses3.png",
      720 * 3
    ),
    new BackgroundObject(
      "img/background/PNG/City2/Bright/houses1.png",
      720 * 3
    ),
    new BackgroundObject(
      "img/background/PNG/City2/Bright/minishop&callbox.png",
      720 * 3
    ),
    new BackgroundObject(
      "img/background/PNG/City2/Bright/road&lamps.png",
      720 * 3
    ),
    new BackgroundObject("img/background/PNG/City2/Bright/Sky.png", 720 * 4),
    new BackgroundObject("img/background/PNG/City2/Bright/back.png", 720 * 4),
    new BackgroundObject(
      "img/background/PNG/City2/Bright/houses3.png",
      720 * 4
    ),
    new BackgroundObject(
      "img/background/PNG/City2/Bright/houses1.png",
      720 * 4
    ),
    new BackgroundObject(
      "img/background/PNG/City2/Bright/minishop&callbox.png",
      720 * 4
    ),
    new BackgroundObject(
      "img/background/PNG/City2/Bright/road&lamps.png",
      720 * 4
    ),
  ];
}

function createEndLevel() {
  return [2900];
}

function createCoins() {
  return [
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
  ];
}

function createWaterbombs() {
  return [
    new Waterbomb(),
    new Waterbomb(),
    new Waterbomb(),
    new Waterbomb(),
    new Waterbomb(),
    new Waterbomb(),
    new Waterbomb(),
    new Waterbomb(),
    new Waterbomb(),
    new Waterbomb(),
    new Waterbomb(),
    new Waterbomb(),
    new Waterbomb(),
    new Waterbomb(),
    new Waterbomb(),
  ];
}
