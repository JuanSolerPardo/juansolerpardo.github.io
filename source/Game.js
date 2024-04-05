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
        this.reloj.start();

         
  
        
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





 

  

}


