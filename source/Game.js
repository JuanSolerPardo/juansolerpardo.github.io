import CountDownController from "./CountDownController.js"
import cronometroJuego from "./cronometroJuego.js"
export class Game extends Phaser.Scene
{
    
    /** @type {CountDownController} */
    cronometro

    constructor ()
    {
        super('Game');
        
        this.increaseScore = this.increaseScore.bind(this);
        
       
    }
    
    create ()
    {
        this.add.image(512, 385, 'congreso');
        
        this.score = 0;
        this.scoreText = this.add.text(16, 16, 'Puntos: 0', { fontSize: '32px', fill: '#FFFF00' });
        this.scoreText.setScrollFactor(0);
        
        this.positionImages = this.createPositionImages();
        
        this.tiempoJuego = new CountDownController(this);
        this.tiempoJuego.start(this.handleCountDownFinished.bind(this));
        this.reloj = new cronometroJuego(this);

         
  
        
        this.soundOpened = this.sound.add('opened');
        this.soundCatched = this.sound.add('catched');
        this.soundOpened.play();
       
    }

  score = 0;
  positionImages = [];
  imagesToDisplay = ['img1', 'img2', 'img3', 'img4', 'img5'];  
  scoreText ="";
  countdownText="";
  soundOpened = null;
  soundCatched = null;

   handleCountDownFinished()
   {
     this.scene.start('GameOver');
   }
    
   update(){
   
        this.tiempoJuego.update();
        this.reloj.update(this.tiempoJuego.percentRemain);
   
   }


  createPositionImages() {
    this.images = [];

    this.positions = [
      { x: 100, y: 105 },
      { x: 250, y: 104 },
      { x: 400, y: 103 },
      { x: 550, y: 103 },
      { x: 700, y: 104 },
      { x: 100, y: 310 },
      { x: 250, y: 315 },
      { x: 400, y: 321 },
      { x: 550, y: 325 },
      { x: 700, y: 327 },     
      { x: 350, y: 500 },
      { x: 500, y: 500 },
      { x: 650, y: 500 }
     
      // ... (agrega las demás posiciones aquí)
    ];

    for (var i = 0; i < this.positions.length; i++) {
      this.position = this.positions[i];
      this.positionImage = this.add.image(this.position.x, this.position.y -10, '').setOrigin(0.5);       
      this.positionImage.setInteractive();
      this.positionImage.on('pointerdown', this.increaseScore);
      this.images.push(this.positionImage);
    }

    return this.images;
  }


  increaseScore() {
   
    this.score += 1;
    this.scoreText.setText('Score: ' + this.score);
    this.soundCatched.play();
    if (this.sound.context.state === 'suspended') {
      this.sound.context.resume();
    }
  }

  

}


