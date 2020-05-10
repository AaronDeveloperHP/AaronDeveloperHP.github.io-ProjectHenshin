class GameOver extends Phaser.Scene {
    constructor() {
        super('GameOver');
    }

    // preload() {
    //     console.log('Soy Game Over');
    // }

    create() {
        this.muerte = this.sound.add('death', { loop: false });
        this.muerte.play( { volume: 0.5 } );

        // console.log('La música funciona.');

        this.add.image(400, 300, 'fatality').setScale(0.65);

        this.add.dynamicBitmapText(this.sys.game.config.width / 2,
            150, 'pixel', 'GAME OVER', 75).setOrigin(0.5);

        this.add.dynamicBitmapText(this.sys.game.config.width / 2,
            400, 'pixel', 'YOU LOSE', 50).setOrigin(0.5);

        // console.log('El titulo también.');

        this.evento = setTimeout(() => {
            this.salirEscena()
        }, 6000);

        this.input.keyboard.on('keydown_ENTER', () => {
            this.salirEscena();
        });

        this.input.on('pointerdown', () => {
            this.salirEscena();
        });
    }
    salirEscena() {
        clearTimeout(this.evento);
        this.scene.stop('GameOver');
        this.scene.start('Menu');
    }
}
export default GameOver;