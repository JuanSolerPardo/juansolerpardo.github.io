import import CountDownController from "./CountDownController.js"

export default class cronometroJuego
{

/** @param {Phaser.Graphics} circle */
esfera
/** @type {Phaser.Scene} */
scene
/** @param {Phaser.Graphics} */
reloj;
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
/** @type {CountDownController} */
  cronometro
/** 
* @param {Phaser.Scene} scene 	
*/
constructor(scene)
{		 
	this.scene = scene	
	this.reloj = this.scene.add.graphics();  
	this.sombraReloj = this.scene.add.graphics();  
	this.xPosition = 540 
	this.yPosition = 75
	this.radius = 40
	this.lineColor = 0x08D017
	this.lineThick = 15	
	
	this.cronometro = new CountDownController(this);
       
      


}

/**
* @param {() => void} callback
* @param {number} duration 
*/
start(callback, duracion = 45000)
{
	this.stop();
	this.cronometro.start(this.handleCountDownFinished.bind(this), duracion);
	this.sombraReloj.clear();
	this.sombraReloj.lineStyle(this.lineThick, 0xD9EAD3, 1);	       
        this.sombraReloj.arc(this.xPosition, this.yPosition, this.radius, Phaser.Math.DegToRad(0), Phaser.Math.DegToRad(360), false);
	this.sombraReloj.strokePath();
	
	this.reloj.clear();
	this.reloj.lineStyle(this.lineThick, this.lineColor, 1);	        
        this.reloj.arc(this.xPosition, this.yPosition, this.radius, Phaser.Math.DegToRad(0), Phaser.Math.DegToRad(360), false);
        this.reloj.strokePath();
}

stop()
{
  return;
}

update()
{
	this.cronometro.update();
        const endArc = (360 * this.cronometro.percentRemain);
	this.reloj.clear();
	this.reloj.lineStyle(this.lineThick, this.lineColor, 1);	
        this.reloj.beginPath();           
        this.reloj.arc(this.xPosition, this.yPosition, this.radius, Phaser.Math.DegToRad(0), Phaser.Math.DegToRad(endArc), false);
        this.reloj.strokePath();
	
}

handleCountDownFinished()
{
	this.stop()
}
}
