export default class cronometroJuego
{

  /** @param {Phaser.Graphics} circle */
  esfera

  /** @param {number} xPosition
  xPosition

  /** @param {number} yPosition
  yPosition

  /** @param {number} radius
  radius

  /** @param {number} lineThick
  lineThick

  /** @param {number} lineColor
  lineColor
    
	/** 
	 * @param {Phaser.Scene} scene 	
	 */
	constructor(scene)
	{		 
    this.scene = scene	
    this.graphics = this.scene.add.graphics();        
    this.xPosition = 400 
    this.yPosition = 300
    this.radius = 260
    this.lineColor = 0xffffff
    this.lineThick = 0
    
    //  With minimal arguments it creates a circle of radius 260 centered on 400x300:
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

        this.graphics.lineStyle(2, this.lineColor, 1);

        this.esfera.draw(this.graphics, 64);

	}
}
