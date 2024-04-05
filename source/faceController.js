import CountDownController from "./CountDownController.js"

export default class faceController
{
	
	 
	/** @type {Phaser.Scene} */
	scene
		
	/** @type {Phaser.EventTime}*/
        crono
		
	/** @param {number} xPosition */
	xPosition
	
	/** @param {number} yPosition */
	yPosition
	
	/** 
	* @param {Phaser.Scene} scene 	
	*/
	constructor(scene,xPosition, yPosition)
	{		 
		this.scene = scene	
		this.crono = new CountDownController(scene);
		this.crono.start(this.handleCountDownFinished.bind(this));  	        
		this.xPosition = xPosition
		this.yPosition = yPosition
		
	
	}
	
	
	start()
	{	
		 
		
	}
	
	stop()
	{
	  this.destroy();
	  return;
	}
	
	update()
	{		 
		
	}
	handleCountDownFinished()
	{
		this.stop();
	}
	
}
