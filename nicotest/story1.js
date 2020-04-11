class Story1 extends Phaser.Scene {
constructor() {
    super("story1");
  }

preload(){
	this.load.image("thesecondstory", "assets/secondstory.png");
}
create(){
	this.bgspr = this.add.sprite(config.width/2, config.height/2, "thesecondstory");
	this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
}
update(){
	if (Phaser.Input.Keyboard.JustDown(this.spacebar)){
    this.scene.start("playScene3");
	}
}
}
