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
		this.crono.start(this.handleCountDownFinished.bind(this),Phaser.Math.RND.between(850,1500)); 			  
		this.position = this.scene.add.image(this.position.x, this.position.y -10, this.face).setOrigin(0.5);
		this.position.setDisplaySize(30, 30);
      		this.position.setInteractive();
      		this.position.on('pointerdown', this.sumaalgo());
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
	  this.destroy(true);	  
	}
	
	
	handleCountDownFinished()
	{
	   this.stop();
	}

	sumaalgo(){}
	
}
