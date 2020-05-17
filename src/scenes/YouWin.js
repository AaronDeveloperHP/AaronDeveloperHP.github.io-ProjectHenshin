class YouWin extends Phaser.Scene {
    constructor() {
        super('YouWin');
    }

    // preload() {
    //     console.log('Soy Game Over');
    // }

    create() {
        this.laserGO = this.sound.add('laser', { loop: false });
        this.victoria = this.sound.add('victoria', { loop: false });
        this.victoria.play( { volume: 0.5 } );

        // console.log('La música funciona.');

        this.add.image(400, 300, 'menu').setScale(0.65);

        this.add.dynamicBitmapText(this.sys.game.config.width / 2,
            150, 'pixel', 'YOU WIN', 85).setOrigin(0.5);

        // console.log('El titulo también.');

        this.evento = setTimeout(() => {
            this.salirEscena()
        }, 7000);

        this.input.keyboard.on('keydown_ENTER', () => {
            this.salirEscena()
        });

        this.input.on('pointerdown', () => {
            this.salirEscena();
        });
    }
    salirEscena() {
        clearTimeout(this.evento);
        this.sound.pauseAll();
        this.laserGO.play();
        this.scene.stop('YouWin');
        this.scene.start('Menu');
    }
}
export default YouWin;