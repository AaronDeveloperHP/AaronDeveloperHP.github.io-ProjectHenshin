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
            150, 'pixel', 'HOW TO PLAY', 60).setOrigin(0.5);

        this.add.image(150, 350, 'direcciones').setScale(0.15);
        this.add.image(650, 350, 'wasd').setScale(0.15);
        this.add.image(this.sys.game.config.width / 2, 425, 'coche');

        this.add.dynamicBitmapText(150, 410, 'pixel', 'ARROW KEYS',
            15).setOrigin(0.5);

        this.add.dynamicBitmapText(650, 410, 'pixel', 'WASD KEYS',
            15).setOrigin(0.5);

        this.add.dynamicBitmapText(this.sys.game.config.width / 2, 475, 'pixel',
            'GOAL', 15).setOrigin(0.5);

        const pressButton = this.add.dynamicBitmapText(this.sys.game.config.width / 2,
            565, 'pixel', 'PRESS ANY BUTTON', 22).setOrigin(0.5);
        
        this.tweens.add({
            targets: pressButton,
            alpha: 0,
            ease: (x) => x < 0.5 ? 0 : 1,
            duration: 500,
            yoyo: true,
            repeat: -1
        });

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