let level1;
function initLevel() {
  level1 = new Level(
    // const level1 = new Level(
    [
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
      new Endboss(),
    ],
    [new cloud(), new cloud(), new cloud()],
    [
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
      new BackgroundObject(
        "img/background/PNG/City2/Bright/road&lamps.png",
        720
      ),
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
    ],
    [
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
    ]
  );
}
