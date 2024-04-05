import CountDownController from "./CountDownController.js"
import cronometroJuego from "./cronometroJuego.js"
import faceController from "./faceController.js"
export class Game extends Phaser.Scene
{
    
    /** @type {CountDownController} */
    cronometro
    /** @type {array} */
    positions
    imagesToDisplay
     /** @type {array} */
    faces
    
    constructor()
    {
        super('Game');   
        this.faces=[];
    }

    preload()
    {
         /*{ x: 200, y: 508 },    
        { x: 400, y: 508 },
        { x: 600, y: 508 },
        { x: 800, y: 508 },
        { x: 108, y: 695 },    
        { x: 316, y: 695 },
        { x: 524, y: 695 },
        { x: 734, y: 695 }*/
        this.positions = [   
         { x: 120, y: 335 },    
        { x: 316, y: 335 },
        { x: 515, y: 335 },
        { x: 705, y: 335 }
        // ... (agrega las demás posiciones aquí)
        ];   
        this.imagesToDisplay = ['img0', 'img1', 'img2', 'img3', 'img4', 'img5', 'img6'];
    }
    
    create ()
    {
        this.add.image(512, 385, 'congreso');
        
        this.score = 0;
        this.scoreText = this.add.text(16, 16, 'Puntos: 0', { fontSize: '32px', fill: '#FFFF00' });
        this.scoreText.setScrollFactor(0);
        
        this.tiempoJuego = new CountDownController(this);      
        this.reloj = new cronometroJuego(this);
       
        
        this.soundOpened = this.sound.add('opened');
        this.soundCatched = this.sound.add('catched');
        this.soundOpened.play();    

        this.tiempoJuego.start(this.handleCountDownFinished.bind(this));
        this.reloj.start();
        this.showNextImage();
       
    }

    start()
    {
        
    }
    
    update(){
   
        this.tiempoJuego.update();
        this.reloj.update(this.tiempoJuego.percentRemain);
        this.faces.forEach(function (face) {face.update();});
   
   }
   
    handleCountDownFinished()
   {
     this.scene.start('GameOver');
   }
    

  showNextImage() {
    
    this.numFaces = Phaser.Math.RND.between(1,2);

    for (var i = 0; i < this.numFaces; i++) {
       this.randomImage = Phaser.Math.RND.pick(this.imagesToDisplay);
       this.randomPositionImage = Phaser.Math.RND.pick(this.positions);
       this.faces.push(new faceController(this, this.randomPositionImage, this.randomImage))
       this.faces[this.faces.length-1].start();
    }
  }




 

  

}


