
var gameSettings = {
  playerSpeed: 200,
}


var config = {
  width: 800,
  height: 600,
  scene: [Nico, StoryOne, Scene1, Scene2, Story1, Scene3],
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade:{
      debug: false
    }
  }
}
  var game = new Phaser.Game(config);
