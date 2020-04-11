class Nico extends Phaser.Scene {
constructor() {
    super("titleScreen");
  }

preload(){
	this.load.image("nico", "assets/title2.png");
}
create(){
	this.nicospr = this.add.image(config.width/2, config.height/2, "nico");
	this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

	//Initialise the black rectangle that's used to make the fade effect, covering up the entire screen
    this.fademask = this.add.rectangle(400, 300, 800, 600, 0x0, 1)
	//Set its alpha/transparency value to 0 to "hide" it
	this.fademask.setAlpha(1);
	//Make the fading-in state
	this.fadingIn = true;
	//Make the fading-out state
	this.fadingOut = false;
	//Speed at which the fade effect will occur
	this.fadeSpeed = 0.02;
}
update(){
	if (Phaser.Input.Keyboard.JustDown(this.spacebar)){
		//When space bar is hit, begin fading out
		this.fadingOut = true;
	}

	//While fading in
	if (this.fadingIn) {
		//Reduces the original alpha value, by the value of fadeSpeed, to gradually decrease the fade
		this.fademask.setAlpha(this.fademask.alpha-this.fadeSpeed);
		//Once alpha is 0 (rectangle is no longer visible) it is no longer fading-in
		if (this.fademask.alpha <= 0)
			this.fadingIn = false;
	}
	//While fading out
	if (this.fadingOut) {
		//Adds to the original alpha value, by the value of fadeSpeed, to gradually increase the fade
		this.fademask.setAlpha(this.fademask.alpha+this.fadeSpeed);
		//Once alpha is 1 (rectangle is completely visible) it calls endScene
		if (this.fademask.alpha >= 1)
			this.endScene();
	}
}

endScene(){
	//Add whatever code needs to be done when transitioning to the next scene here
	this.scene.start("firstStory");
}
}
