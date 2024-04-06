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
		this.crono.start(this.handleCountDownFinished.bind(this),Phaser.Math.RND.between(8500,15000)); 			  
		this.face = this.scene.add.image(this.position.x, this.position.y, this.face).setOrigin(0.5);
		this.face.setDisplaySize(160,200);
		this.face.setInteractive();
		this.face.on('pointerdown', () => this.faceClicked());
	}
	
	update()
	{		 
	    this.crono.update();	 
	}	
	
	handleCountDownFinished()
	{
	  this.face.destroy();	   
	}

	faceClicked()
	{
	  this.crono.destroy();
	  this.showCoins();
	  this.face.destroy();		
	}
	
	showCoins()
	{
	  //código para mostrar las monedas
	}
	
	
}
