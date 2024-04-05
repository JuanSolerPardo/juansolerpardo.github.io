export default class cronometroJuego
{

/** @param {Phaser.Graphics} circle */
esfera
/** @type {Phaser.Scene} */
scene
/** @param {Phaser.Graphics} */
  graphics;
/** @param {number} xPosition */
xPosition

/** @param {number} yPosition */
yPosition

/** @param {number} radius */
radius

/** @param {number} lineThick */
lineThick

/** @param {number} lineColor */
lineColor

/** 
* @param {Phaser.Scene} scene 	
*/
constructor(scene)
{		 
	this.scene = scene	
	this.graphics = this.scene.add.graphics();        
	this.xPosition = 1000 
	this.yPosition = 50
	this.radius = 40
	this.lineColor = 0x08D017
	this.lineThick = 20	 
	this.esfera = new Phaser.Curves.Ellipse(this.xPosition, this.yPosition, this.radius);

}

/**
* @param {() => void} callback
* @param {number} duration 
*/
start()
{
	this.stop()
}

stop()
{

}

update()
{
	this.graphics.clear();
	
	this.graphics.lineStyle(this.lineThick, this.lineColor, 1);
	
	this.esfera.draw(this.graphics, 64);
}
}
