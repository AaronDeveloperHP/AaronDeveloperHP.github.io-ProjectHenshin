class Controls extends Phaser.Scene {
    constructor() {
        super('Controls');
    }

    // preload() {
    //     console.log('Soy Controls');
    // }

    create() {
        this.backgroundMusic = this.sound.add('historia', { loop: true });
        this.laserControls = this.sound.add('laser');

        this.add.image(400, 300, 'controles').setScale(0.65);

        this.add.dynamicBitmapText(this.sys.game.config.width / 2,
            100, 'pixel', 'HOW TO PLAY', 60).setOrigin(0.5);

        this.add.image(150, 350, 'direcciones').setScale(0.25);
        this.add.image(650, 350, 'wasd').setScale(0.25);

        this.add.dynamicBitmapText(150, 450, 'pixel', 'WITH ARROW KEYS',
            15).setOrigin(0.5);

        this.add.dynamicBitmapText(650, 450, 'pixel', 'WITH WASD KEYS',
            15).setOrigin(0.5);

        this.input.keyboard.on('keydown_RIGHT', () => {
            this.laserControls.play();
            this.scene.stop('Controls');
            this.sound.pauseAll();
            this.scene.start('Play');
        });
        this.input.keyboard.on('keydown_LEFT', () => {
            this.laserControls.play();
            this.scene.stop('Controls');
            this.sound.pauseAll();
            this.scene.start('Play');
        });
        this.input.keyboard.on('keydown_UP', () => {
            this.laserControls.play();
            this.scene.stop('Controls');
            this.sound.pauseAll();
            this.scene.start('Play');
        });
        this.input.keyboard.on('keydown_DOWN', () => {
            this.laserControls.play();
            this.scene.stop('Controls');
            this.sound.pauseAll();
            this.scene.start('Play');
        });
        this.input.keyboard.on('keydown_ENTER', () => {
            this.laserControls.play();
            this.scene.stop('Controls');
            this.sound.pauseAll();
            this.scene.start('Play');
        });
        this.input.on('pointerdown', () => {
            this.laserControls.play();
            this.scene.stop('Controls');
            this.sound.pauseAll();
            this.scene.start('Play');
        });
    }
}
export default Controls;