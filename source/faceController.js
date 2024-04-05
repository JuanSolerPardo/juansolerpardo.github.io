import CountDownController from "./CountDownController.js"

export default class faceController
{
	
	 
	/** @type {Phaser.Scene} */
	scene
		
	/** @type {CountDownController}*/
        crono
		
	/** @param {number} xPosition */
	xPosition
	
	/** @param {number} yPosition */
	yPosition
	
	/** 
	* @param {Phaser.Scene} scene 	
	*/
	constructor(scene, xPosition, yPosition, face)
	{		 
		this.scene = scene	
		this.crono = new CountDownController(scene);		  	        
		this.xPosition = xPosition
		this.yPosition = yPosition
		this.face = face
	
	}
	
	
	start()
	{	
		this.crono.start(this.handleCountDownFinished.bind(this)); 
		
	}
	
	update()
	{		 
	    this.crono.update();
	    
	}
	
	stop()
	{
	  	
	  this.destroy();
	  
	}
	
	
	handleCountDownFinished()
	{
		this.stop();
	}

	
	
}
