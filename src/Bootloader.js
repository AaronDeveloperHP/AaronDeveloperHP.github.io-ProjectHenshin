class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader');
    }

    preload() {
        console.log('Soy Bootloader');

        this.load.setPath('./assets/');
        this.load.image('nivel', 'Fondos/primer_nivel.png');
        this.load.image('menu', 'Fondos/menu.jpg')
        this.load.image('movil', 'Plataformas/movil.png')
        this.load.image('ascensor', 'Plataformas/ascensor.png')
        this.load.image("tileset","Plataformas/Tileset_32x32.png");
        this.load.image("checkpoint","Plataformas/checkpoint.png");
        this.load.tilemapTiledJSON("mapa","Plataformas/Nivel_1.json");
         this.load.spritesheet("coche","Jugador/coche.png",{
            frameWidth:163,
            frameHeight:60
        });
        this.load.spritesheet("monedas","Monedas/monedas.png",{
            frameWidth:32,
            frameHeight:32
        });
        this.load.spritesheet("pincho","Monedas/pincho.png",{
            frameWidth:32,
            frameHeight:32
        });
        this.load.spritesheet("pincho2","Monedas/pincho2.png",{
            frameWidth:32,
            frameHeight:32
        });

        this.load.audio('fondo', 'Audio/musica_nivel1.mp3');
        this.load.audio('menu_audio', 'Audio/musica_menu.mp3')

        this.load.spritesheet('tio','Jugador/sprite_tio.png',{
            frameWidth:32,
            frameHeight:64
        });
       
        this.load.json('fontJSON', 'Fuente/font.json');
        this.load.image('font', 'Fuente/font.png');
        this.load.svg('marca', 'Iconos/marca.svg');
       

        this.load.on('complete', () => {
            const fontJSON = this.cache.json.get('fontJSON');
            this.cache.bitmapFont.add('pixel', Phaser.GameObjects.RetroFont.Parse(this,
                fontJSON));

            this.scene.start('Menu');
        });
    }
}
export default Bootloader;