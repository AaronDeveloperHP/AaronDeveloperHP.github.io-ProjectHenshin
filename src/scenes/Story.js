class Story extends Phaser.Scene {
    constructor() {
        super('Story');
    }

    // preload() {
    //     console.log('Soy Story');
    // }

    create() {
        this.backgroundMusic = this.sound.add('historia', { loop: true });
        this.laserStory = this.sound.add('laser');
        this.backgroundMusic.play( { volume: 0.5 } );

        this.add.image(400, 300, 'story1').setScale(0.65);

        this.add.dynamicBitmapText(this.sys.game.config.width / 2,
            120, 'pixel', 'IKISAKI HOYO IS A YOUNG JAPANESE MAN',
            15).setOrigin(0.5);

        this.add.dynamicBitmapText(this.sys.game.config.width / 2,
            150, 'pixel', 'FROM WHAT WAS NEW YORK BEFORE THE UNITED STATES',
            15).setOrigin(0.5);

        this.add.dynamicBitmapText(this.sys.game.config.width / 2,
            180, 'pixel', 'FELL TO JAPAN IN 2033 IN WORLD WAR III', 15).setOrigin(0.5);

        this.add.dynamicBitmapText(this.sys.game.config.width / 2,
            355, 'pixel', 'IT IS NOW KNOWN AS NEO TOKYO.', 15).setOrigin(0.5);

        this.add.dynamicBitmapText(this.sys.game.config.width / 2,
            385, 'pixel', 'HIS FAMILY FOLLOW THE TRADITIONS', 
            15).setOrigin(0.5);

        this.add.dynamicBitmapText(this.sys.game.config.width / 2,
            415, 'pixel', 'OF HIS ANCESTORS BY HONORING THEIR MEMORY', 15).setOrigin(0.5);

        this.add.dynamicBitmapText(this.sys.game.config.width / 2,
            445, 'pixel', 'BY PROTECTING THE FAMILY SWORD THAT HAS BEEN', 15).setOrigin(0.5);

        this.add.dynamicBitmapText(this.sys.game.config.width / 2,
            475, 'pixel', 'IN HIS FAMILY SINCE THE LATE EDO PERIOD.', 15).setOrigin(0.5);

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
            this.laserStory.play();
            this.backgroundMusic.pause();
            this.scene.start('Story2');
            this.backgroundMusic.resume();
            this.scene.stop('Story');
        });
        this.input.keyboard.on('keydown_LEFT', () => {
            this.backgroundMusic.pause();
            this.laserStory.play();
            this.scene.stop('Story');
            this.backgroundMusic.resume();
            this.scene.start('Story2');
        });
        this.input.keyboard.on('keydown_UP', () => {
            this.backgroundMusic.pause();
            this.laserStory.play();
            this.scene.stop('Story');
            this.backgroundMusic.resume();
            this.scene.start('Story2');
        });
        this.input.keyboard.on('keydown_DOWN', () => {
            this.backgroundMusic.pause();
            this.laserStory.play();
            this.scene.stop('Story');
            this.backgroundMusic.resume();
            this.scene.start('Story2');
        });
        this.input.keyboard.on('keydown_ENTER', () => {
            this.backgroundMusic.pause();
            this.laserStory.play();
            this.scene.stop('Story');
            this.backgroundMusic.resume();
            this.scene.start('Story2');
        });
        this.input.on('pointerdown', () => {
            this.backgroundMusic.pause();
            this.laserStory.play();
            this.scene.start('Story2');
            this.backgroundMusic.resume();
            this.scene.stop('Story');
        });
    }
}
export default Story;