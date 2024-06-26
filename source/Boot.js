export class Boot extends Phaser.Scene
{
    constructor ()
    {
        super('Boot');
    }

    preload ()
    {
        //  The Boot Scene is typically used to load in any assets you require for your Preloader, such as a game logo or background.
        //  The smaller the file size of the assets, the better, as the Boot Scene itself has no preloader.
        this.load.image('background', './img/bg.png');
        this.load.image('logo', './img/logo.png');
    }

    create ()
    {
		console.log('Constructor boot');
        this.scene.start('Preloader');
    }
}
