import CountDownController from "./CountDownController.js"
import cronometroJuego from "./cronometroJuego.js"
export class Game extends Phaser.Scene
{
    
    /** @type {CountDownController} */
    cronometro
    /** @type {array} */
    positions
    imagesToDisplay
     /** @type {array} */
    faces
    
    constructor ()
    {
        super('Game');       
    }

    preload()
    {
        this.positions = [
        { x: 236, y: 334 },
        { x: 417, y: 334 },
        { x: 601, y: 334 },
        { x: 782, y: 334 },
        { x: 124, y: 494 },
        { x: 319, y: 494 },
        { x: 506, y: 494 },
        { x: 697, y: 494 },
        { x: 894, y: 494 },
        { x: 200, y: 664 },
        { x: 398, y: 664 },
        { x: 598, y: 664 },
        { x: 798, y: 664 },
        { x: 316, y: 851 },
        { x: 524, y: 851 },
        { x: 734, y: 851 }
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
        this.tiempoJuego.start(this.handleCountDownFinished.bind(this));        
        this.reloj = new cronometroJuego(this);
        this.reloj.start();
        
        this.soundOpened = this.sound.add('opened');
        this.soundCatched = this.sound.add('catched');
        this.soundOpened.play();
       
    }
    
    update(){
   
        this.tiempoJuego.update();
        this.reloj.update(this.tiempoJuego.percentRemain);
        this.faces.forEach(function (face) {
      face.update();
    });
   
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
       this.faces.push(new faceController(this.scene, this.randomPositionImage, this.randomImage)
       this.faces[faces.length-1].start();
    }
  }




 

  

}


