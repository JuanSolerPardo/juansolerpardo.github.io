import CountDownController from "./CountDownController.js"

export default class faceController  
{
	 
	/** @type {Phaser.Scene} */
	scene
		
	/** @type {CountDownController}*/
        crono	
	
	
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
		this.position = this.scene.add.image(this.position.x, this.position.y, this.face).setOrigin(0.5);
		this.position.setDisplaySize(160,200);
      		this.position.setInteractive();
      		//this.position.on('pointerdown', this.sumaalgo());
	}
	
	update()
	{		 
	    this.crono.update();	 
	}	
	
	handleCountDownFinished()
	{
	   this.scene.start('GameOver');
	}

	
	
}
