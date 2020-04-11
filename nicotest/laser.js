class Laser extends Phaser.GameObjects.Sprite{
  constructor(scene){

    var x = scene.playerShip.x;
    var y = scene.playerShip.y - 16;

    super(scene, x, y, "laser");

    scene.add.existing(this);

    this.play("laser_anim");
    scene.physics.world.enableBody(this);
    this.body.velocity.y = - 250;

    scene.projectiles.add(this);

  }


  update(){

    if(this.y < 32 ){
      this.destroy();
    }
  }
}
