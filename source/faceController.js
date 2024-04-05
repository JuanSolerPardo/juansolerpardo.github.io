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
	constructor(scene, position, face)
	{		 
		this.scene = scene	
		this.crono = new CountDownController(scene);		  	        
		this.position = position		
		this.face = face
    		
	
	}
	
	
	start()
	{	
		this.crono.start(this.handleCountDownFinished.bind(this),Phaser.Math.RND.between(500,1500)); 
		this.position.setTexture(this.face); 
	}
	
	update()
	{		 
	    this.crono.update();
	    if(this.crono.secondsRemain <= 0)
	    {
		this.stop()
	    }
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
