class Story2 extends Phaser.Scene {
    constructor() {
        super('Story2');
    }

    // preload() {
    //     console.log('Soy Controls');
    // }

    create() {
        this.backgroundMusic = this.sound.add('historia', { loop: true });
        this.laserStory = this.sound.add('laser');

        this.add.image(400, 300, 'story1').setScale(0.65);

        this.add.dynamicBitmapText(this.sys.game.config.width / 2,
            120, 'pixel', 'INSTEAD EVEN IF AT HOME HE CONTINUES THE TRADITION',
            15).setOrigin(0.5);

        this.add.dynamicBitmapText(this.sys.game.config.width / 2,
            150, 'pixel', 'IN THE STREETS HE PREFERS TO BE CALLED IKI',
            15).setOrigin(0.5);

        this.add.dynamicBitmapText(this.sys.game.config.width / 2,
            180, 'pixel', 'WHERE HE SPENDS THE DAY ON THE ROOFTOPS OF THE CITY', 15).setOrigin(0.5);

        this.add.dynamicBitmapText(this.sys.game.config.width / 2,
            355, 'pixel', 'IN SEARCH OF EMOTIONS WITH HIS FRIENDS', 15).setOrigin(0.5);
        
        this.add.dynamicBitmapText(this.sys.game.config.width / 2, 
            385, 'pixel', 'MARK AND JANPA.').setOrigin(0.5);

        this.add.dynamicBitmapText(this.sys.game.config.width / 2,
            415, 'pixel', 'TODAY IS ONE MORE NIGHT', 
            15).setOrigin(0.5);

        this.add.dynamicBitmapText(this.sys.game.config.width / 2,
            445, 'pixel', 'BUT IT MAY NOT END AS EXPECTED', 15).setOrigin(0.5);

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
            this.backgroundMusic.pause();
            this.laserStory.play();
            this.scene.stop('Story2');
            this.backgroundMusic.resume();
            this.scene.start('Controls');
        });
        this.input.keyboard.on('keydown_LEFT', () => {
            this.backgroundMusic.pause();
            this.laserStory.play();
            this.scene.stop('Story2');
            this.backgroundMusic.resume();
            this.scene.start('Controls');
        });
        this.input.keyboard.on('keydown_UP', () => {
            this.backgroundMusic.pause();
            this.laserStory.play();
            this.scene.stop('Story2');
            this.backgroundMusic.resume();
            this.scene.start('Controls');
        });
        this.input.keyboard.on('keydown_DOWN', () => {
            this.backgroundMusic.pause();
            this.laserStory.play();
            this.scene.stop('Story2');
            this.backgroundMusic.resume();
            this.scene.start('Controls');
        });
        this.input.keyboard.on('keydown_ENTER', () => {
            this.backgroundMusic.pause();
            this.laserStory.play();
            this.scene.stop('Story2');
            this.backgroundMusic.resume();
            this.scene.start('Controls');
        });
        this.input.on('pointerdown', () => {
            this.backgroundMusic.pause();
            this.laserStory.play();
            this.scene.stop('Story2');
            this.backgroundMusic.resume();
            this.scene.start('Controls');
        });
    }
}
export default Story2;