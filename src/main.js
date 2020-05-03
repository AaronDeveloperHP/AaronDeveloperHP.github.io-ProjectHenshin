import Bootloader from './Bootloader.js';
import Menu from './scenes/Menu.js';
import Play from './scenes/Play.js';

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
             debug: true
        }
    },
    scene: [
        Bootloader,
        Menu,
        Play
    ]
};

new Phaser.Game(config);