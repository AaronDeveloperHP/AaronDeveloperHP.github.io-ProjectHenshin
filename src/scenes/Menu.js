class Menu extends Phaser.Scene {
    constructor() {
        super('Menu');
    }

    preload() {
       
    }

    create() {
       
        this.backgroundMusic = this.sound.add('menu_audio', { loop: true });
        this.backgroundMusic.play({ volume: 0.5 });

        this.add.image(400, 300, 'menu').setScale(0.65);

        this.add.dynamicBitmapText(this.sys.game.config.width / 2,
            150, 'pixel', 'HENSHIN', 95).setOrigin(0.5);

        this.add.dynamicBitmapText(this.sys.game.config.width / 2,
            225, 'pixel', 'PROYECTO AJ', 30).setOrigin(0.5);

        const pressButton = this.add.dynamicBitmapText(this.sys.game.config.width / 2,
            475, 'pixel', 'PRESS ANY BUTTON', 22).setOrigin(0.5);

        this.add.image(750, 550, 'marca').setScale(0.5);

        this.tweens.add({
            targets: pressButton,
            alpha: 0,
            ease: (x) => x < 0.5 ? 0 : 1,
            duration: 500,
            yoyo: true,
            repeat: -1
        });
        this.input.keyboard.on('keydown_RIGHT', () => {
            this.sound.pauseAll();
           this.scene.stop("Menu"); this.scene.start('Story');
        });
        this.input.keyboard.on('keydown_LEFT', () => {
            this.sound.pauseAll();
           this.scene.stop("Menu"); this.scene.start('Story');
        });
        this.input.keyboard.on('keydown_UP', () => {
            this.sound.pauseAll();
           this.scene.stop("Menu"); this.scene.start('Story');
        });
        this.input.keyboard.on('keydown_DOWN', () => {
            this.sound.pauseAll();
           this.scene.stop("Menu"); this.scene.start('Story');
        });
        this.input.keyboard.on('keydown_ENTER', () => {
            this.sound.pauseAll();
           this.scene.stop("Menu"); this.scene.start('Story');
        });
        this.input.on('pointerdown', () => {
            this.sound.pauseAll();
           this.scene.start('Story');
        });
    }
}
export default Menu;
