export default class cronometroJuego
{
	
	 
	/** @type {Phaser.Scene} */
	scene
		
	/** @param {Phaser.Graphics} */
	reloj;
	sombraReloj;
		
	/** @param {number} xPosition */
	xPosition
	
	/** @param {number} yPosition */
	yPosition
	
	/** @param {number} radius */
	radius
	
	/** @param {number} lineThick */
	lineThick
	
	/** @param {number} lineColor */
	lineColor;
	lineColorSombra;
	 
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
		this.lineColorSombra = 0xD9EAD3
		this.lineThick = 15	
	}
	
	
	start()
	{
		
		 
		this.sombraReloj.clear();
		this.sombraReloj.lineStyle(this.lineThick, this.lineColorSombra, 1);	       
	        this.sombraReloj.arc(this.xPosition, this.yPosition, this.radius, Phaser.Math.DegToRad(0), Phaser.Math.DegToRad(360), false);
		this.sombraReloj.setDepth(50)
		this.sombraReloj.strokePath();
		
		this.reloj.clear();
		this.reloj.lineStyle(this.lineThick, this.lineColor, 1);	        
	        this.reloj.arc(this.xPosition, this.yPosition, this.radius, Phaser.Math.DegToRad(0), Phaser.Math.DegToRad(360), false);
		this.reloj.setDepth(51)
	        this.reloj.strokePath();
	}
	
	stop()
	{
	  return;
	}
	
	update(percentRemain)
	{
		 
	        const endArc = (360 * percentRemain);
		this.reloj.clear();
		this.reloj.lineStyle(this.lineThick, this.lineColor, 1);	
	        this.reloj.setAngle(180);         
	        this.reloj.arc(this.xPosition, this.yPosition, this.radius, Phaser.Math.DegToRad(0), Phaser.Math.DegToRad(endArc), false);
		this.reloj.setDepth(51);
	        this.reloj.strokePath();
		
	}
	
	
}
