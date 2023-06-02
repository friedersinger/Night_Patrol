# Night Patrol Game

Night Patrol is an HTML-based game designed to run in a web browser. It features an immersive gameplay experience where players control a character navigating through a level, avoiding enemies, collecting coins, and defeating bosses.

## Demo

You can play the game by visiting [night-patrol.netlify.app](night-patrol.netlify.app). Give it a try and see how far you can go!

## Game Components

### HTML Structure

The HTML structure defines the layout and elements of the game, including the canvas, buttons, images, and audio elements.

### JavaScript Classes

- **World**: The World class represents the game world and contains instances of other classes and game objects. It handles game logic, collision detection, sound effects, and rendering.

- **Character**: The Character class represents the player character in the game. It has properties and methods related to the character's position, movement, energy, and interactions with other game objects.

- **Endboss**: The Endboss class represents the end boss character in the game. It has properties and methods related to the boss's position, energy, and interactions with other game objects.

- **DrawableObject**: The DrawableObject class is a base class for objects that can be drawn on the canvas. It provides basic properties and methods for positioning and rendering objects.

- **MovableObject**: The MovableObject class extends the DrawableObject class and adds properties and methods for objects that can move, such as enemies, clouds, and background objects.

- **Gangster**: The Gangster class represents enemy characters in the game. It extends the MovableObject class and adds methods for enemy-specific behavior.

- **Cloud**: The Cloud class represents cloud objects in the game. It extends the MovableObject class and adds methods for cloud-specific behavior.

- **StatusBar**: The StatusBar class represents a status bar in the game, displaying the character's energy level. It provides methods for updating and rendering the status bar.

- **Fullscreen**: The Fullscreen class handles fullscreen functionality in the game.

- **BackgroundObject**: The BackgroundObject class represents background objects in the game, such as scenery and decorations. It extends the DrawableObject class.

- **Keyboard**: The Keyboard class handles keyboard input and tracks key states.

- **Level**: The Level class represents a game level and contains information about the level's objects, enemies, and coins.

- **Coins**: The Coins class represents coin objects in the game. It extends the DrawableObject class and provides methods for coin-specific behavior.

- **WaterBomb**: The WaterBomb class represents water bomb objects in the game. It extends the DrawableObject class and provides methods for water bomb-specific behavior.

- **SmallCoin**: The SmallCoin class represents small coin objects in the game. It extends the DrawableObject class and provides methods for small coin-specific behavior.

- **SmallWaterBomb**: The SmallWaterBomb class represents small water bomb objects in the game. It extends the DrawableObject class and provides methods for small water bomb-specific behavior.

- **ThrowableObject**: The ThrowableObject class represents objects that can be thrown by the character, such as water bombs. It extends the DrawableObject class and provides methods for throwable object-specific behavior.

### Other JavaScript Files

- **level1.js**: This file contains the definition of the game level, including information about the level's objects, enemies, and coins.

- **game.js**: This file contains the initialization code for the game, creating instances of the World class and handling game start, restart, and menu functionality.

## Usage

To run the Night Patrol game, simply open the provided HTML file in a web browser that supports JavaScript. The game will load, and you can start playing by following the on-screen instructions and using the keyboard controls.

## License

This game is released under the [MIT License](LICENSE).
