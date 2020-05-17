import Bootloader from './Bootloader.js';
import Menu from './scenes/Menu.js';
import Play from './scenes/Play.js';
import Story from './scenes/Story.js';
import Story2 from './scenes/Story2.js';
import Controls from './scenes/Controls.js';
import GameOver from './scenes/GameOver.js';
import YouWin from './scenes/YouWin.js';
const config = {
    title: "primeraPrueba",
    version: "0.0.1",
    type: Phaser.AUTO,
    scale: {
        parent: "phaser_container",
        width: 800,
        height: 600,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: "#00E4FF",
    pixelArt: true,
    physics: {
        default: "arcade",
        arcade: {
            gravity: {
                y: 300,
            },
             /* debug: true */
        }
    },
    scene: [
        Bootloader,
        Menu, 
        Story,
        Story2,
        Controls,
        Play,
        GameOver,
        YouWin
    ]
};

new Phaser.Game(config);
