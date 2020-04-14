class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

 //loading assets

preload(){
this.load.image("sky", "assets/sky.png");
this.load.image("sea", "assets/sea2.png");
this.load.spritesheet("ship", "assets/dragonred.png" ,{
frameWidth: 185,
frameHeight: 133
});
this.load.spritesheet("ship2", "assets/dragonred2.png" ,{
frameWidth: 185,
frameHeight: 133
});
this.load.spritesheet("ship3", "assets/dragonred3.png" ,{
frameWidth: 185,
frameHeight: 133
});
this.load.spritesheet("ship4", "assets/dragonred4.png" ,{
frameWidth: 185,
frameHeight: 133
});


this.load.spritesheet("playerShip", "assets/izanami2.png" ,{
frameWidth: 32,
frameHeight: 32
});

this.load.spritesheet("laser", "assets/beam.png" ,{
frameWidth: 16,
frameHeight: 16
});

this.load.audio("lasersound", ["assets/lasersound.mp3"]);
this.load.audio("music", ["assets/gamemusic.mp3"]);
this.load.audio("boomsound", ["assets/boomsound.mp3"]);
}






create() {
this.scene.start("playScene2");

//creating asset animation

this.anims.create({
key: "ship1_anim",
frames: this.anims.generateFrameNumbers("ship"),
frameRate:5,
  repeat: -1
});

this.anims.create({
key: "ship2_anim",
frames: this.anims.generateFrameNumbers("ship2"),
frameRate:5,
  repeat: -1
});

this.anims.create({
key: "ship3_anim",
frames: this.anims.generateFrameNumbers("ship3"),
frameRate:5,
  repeat: -1
});

this.anims.create({
key: "ship4_anim",
frames: this.anims.generateFrameNumbers("ship4"),
frameRate:5,
  repeat: -1
});

this.anims.create({
key: "explode",
frames: this.anims.generateFrameNumbers("explosion"),
frameRate:20,
  repeat: 0,
  hideOnComplete: true
});

this.anims.create({
key:"thrust",
frames: this.anims.generateFrameNumbers("playerShip"),
frameRate: 10,
repeat: -1
})

this.anims.create({
key: "laser_anim",
frames: this.anims.generateFrameNumbers("laser"),
frameRate: 20,
repeat: -1
});

}

}
