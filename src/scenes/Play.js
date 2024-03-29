class Play extends Phaser.Scene {
    constructor() {
        super('Play');
    }

    create() {
        this.left;
        this.right;
        this.duck;
        this.up;

        const mobile = {
            Android: function () {
                return navigator.userAgent.match(/Android/i);
            },
            IOS: function () {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function () {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function () {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function () {
                return navigator.userAgent.match(mobile.Android() || mobile.IOS() || mobile.Opera() || mobile.Windows());
            }
        }

        // Animaciones

        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('tio', { start: 1, end: 6 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'jump',
            frames: this.anims.generateFrameNumbers('tio', { start: 17, end: 19 }),
            frameRate: 2,
            repeat: 0
        });
        this.anims.create({
            key: 'fall',
            frames: this.anims.generateFrameNumbers('tio', { start: 18, end: 19 }),
            frameRate: 2,
            repeat: 0
        });
        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('tio', { start: 0, end: 0 }),
            frameRate: 1,
            repeat: -1
        });
        this.anims.create({
            key: 'crouch',
            frames: this.anims.generateFrameNumbers('tio', { start: 9, end: 9 }),
            frameRate: 1,
            repeat: -1
        });
        this.anims.create({
            key: 'spin',
            frames: this.anims.generateFrameNumbers('monedas', { start: 0, end: 35 }),
            frameRate: 18,
            repeat: -1
        });
        this.anims.create({
            key: 'pinchar',
            frames: this.anims.generateFrameNumbers('pincho', { start: 0, end: 7 }),
            frameRate: 8,
            repeat: -1
        });
        this.anims.create({
            key: 'pinchar2',
            frames: this.anims.generateFrameNumbers('pincho2', { start: 0, end: 7 }),
            frameRate: 8,
            repeat: -1
        });

        this.fondo = this.add.image(0, -2345, 'nivel').setScale(3.15).setOrigin(0, 0);

        this.laserPlay = this.sound.add('laser', { loop: false });
        this.backgroundMusic2 = this.sound.add('fondo', { loop: true });
        this.backgroundMusic2.play({ volume: 0.5 });
        this.money = this.sound.add('moneda', { loop: false });
        this.jump = this.sound.add('salto', { loop: false });


        var check = 0;
        const mapa = this.make.tilemap({ key: 'mapa' });
        const tiles = mapa.addTilesetImage("tileset");
        const layer = mapa.createDynamicLayer(0, tiles, 0, -2282).setScale(1.5);

        layer.setCollisionBetween(1, 14);
        layer.setCollisionBetween(16, 24);
        layer.setCollisionBetween(26, 29);
        layer.setTileIndexCallback(15, checkpoint, null, this);

        this.physics.world.setBounds(0, -2345, this.fondo.width * 3.15, this.fondo.height * 3.15);

        this.tio = this.physics.add.sprite(70, 485, 'tio', 0).setCollideWorldBounds(true).setScale(2);
        this.coche = this.physics.add.sprite(3160, -1500, "coche").setScale(2).setImmovable(true);

        this.physics.add.collider(this.tio, layer);
        this.physics.add.collider(this.coche, layer);

        // Monedas

        this.coinsGroup = this.physics.add.staticGroup();

        layer.forEachTile(tile => {
            if (tile.index == 34) {
                const x = tile.getCenterX();
                const y = tile.getCenterY();
                const coin = this.coinsGroup.create(x, y, "monedas", 0);
                coin.anims.play("spin", true);
                layer.removeTileAt(tile.x, tile.y);
                tile.setCollision(true);
            }
        });

        this.physics.add.overlap(this.tio, this.coinsGroup, collect, null, this);

        // Pinchos de suelo

        this.spikeGroup = this.physics.add.staticGroup();
        layer.forEachTile(tile => {
            if (tile.index == 35) {
                var x = tile.getCenterX();
                var y = tile.getCenterY();
                var spike = this.spikeGroup.create(x, y, "pincho", 0);
                spike.anims.play("pinchar", true);
                layer.removeTileAt(tile.x, tile.y);
                spike.setScale(1.5);
            }
        });

        // Pinchos de techo

        layer.forEachTile(tile => {
            if (tile.index == 36) {
                var x = tile.getCenterX();
                var y = tile.getCenterY();
                var spike = this.spikeGroup.create(x, y, "pincho2", 0);
                spike.anims.play("pinchar2", true);
                layer.removeTileAt(tile.x, tile.y);
                spike.setScale(1.5);
            }
        });
        
        this.physics.add.collider(this.tio, this.spikeGroup, damage, null, this);

        // Plataformas moviles horizontales

        this.movibleX = this.physics.add.group();

        layer.forEachTile(tile => {
            if (tile.index == 13) {
                var x = tile.getCenterX();
                var y = tile.getCenterY();
                var movil = this.movibleX.create(x, y, "movil");
                movil.setImmovable(true);
                movil.setGravityY(-300);
                movil.setScale(3, 0.5);
                movil.setBounceX(1);
                movil.setVelocityX(200);
                this.physics.add.collider(movil, layer);
                layer.removeTileAt(tile.x, tile.y);
                tile.setCollision(true);
            }
        });

        this.physics.add.collider(this.tio, this.movibleX);

        // Plataformas moviles verticales

        this.movibleY = this.physics.add.group();

        layer.forEachTile(tile => {
            if (tile.index == 24) {
                var x = tile.getCenterX();
                var y = tile.getCenterY();
                var ascensor = this.movibleY.create(x, y, "ascensor");
                ascensor.setImmovable(true);
                ascensor.setGravityY(-300);
                ascensor.setScale(1.5, 1);
                ascensor.setBounce(1);
                ascensor.setVelocityY(200);
                this.physics.add.collider(ascensor, layer);
                layer.removeTileAt(tile.x, tile.y);
                tile.setCollision(true);
            }
        });
        this.physics.add.collider(this.tio, this.movibleY);

        // Función que se llama al tocar un pincho

        this.life = 3;
        function damage(a, b) {
            this.cosa = this.life;
            layer.forEachTile(tile => {
                if (tile.index == 15) {
                    if (check == 1) {
                        a.x = tile.getCenterX();
                        a.y = tile.getCenterY();
                    } else {
                        a.x = 70;
                        a.y = 400;
                    }
                }
            });

            this.life = this.cosa - 1;
            this.lifes2.setText(this.life);
        }
        // Funcion que se llama al tocar una moneda
        function collect(a, b) {
            b.destroy();
            this.money.play();
            this.score = this.score + 10;
            this.score2.setText(this.score);
        }
        
        this.cameras.main.setBounds(0, -2345, 1216 * 3.15, 935 * 3.15);
        this.cameras.main.startFollow(this.tio, true, 0.05, 0.05);
        this.tablaMenu = this.add.image(this.sys.game.config.width / 2, 25,'tablero').setOrigin(0.5)
            .setScale(2.5);
        this.scoreText = this.add.dynamicBitmapText(25, 14, 'pixel', 'POINTS', 25);
        this.score = 0;
        this.score2 = this.add.dynamicBitmapText(200, 14, 'pixel', this.score, 25);

        this.lifes = this.add.dynamicBitmapText(600, 14, 'pixel', 'LIFES', 25);
        this.lifes2 = this.add.dynamicBitmapText(750, 14, 'pixel', this.life, 25);

        /* Ahora gracias a un método que tiene Phaser,
        se crean los cursores esenciales (up, down, right, left)*/

        this.cursor = this.input.keyboard.createCursorKeys();
        this.derecha = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.abajo = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.salto = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.izquierda = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);

        this.tio.setSize(17, 45);
        this.tio.setOffset(8, 20);
        this.coche.setSize(10, 45);
        this.coche.setOffset(75, 16);

        this.physics.add.collider(this.tio, this.coche, Win, null, this);
        if (mobile.any() != null) {
            this.pad_izquierda = this.add.image((this.fondo.width / 32) * 1.7, (this.fondo.height / 32) * 18, 'flecha').setScale(4).setAlpha(.65).setScrollFactor(0).setInteractive();
            this.pad_izquierda.on('pointerover',()=>{this.left=true;});
            this.pad_izquierda.on('pointerout',()=>{this.left=false});

            this.pad_derecha = this.add.image((this.fondo.width / 32) * 5, (this.fondo.height / 32) * 18, 'flecha').setScale(4).setAlpha(.65).setAngle(180).setScrollFactor(0).setInteractive();
            this.pad_derecha.on('pointerover',()=>{this.right=true;});
            this.pad_derecha.on('pointerout',()=>{this.right=false});

            this.pad_abajo = this.add.image((this.fondo.width / 32) * 19.5, (this.fondo.height / 32) * 18, 'flecha').setScale(4).setAlpha(.65).setAngle(-90).setScrollFactor(0).setInteractive();
            this.pad_abajo.on('pointerover',()=>{this.duck=true;});
            this.pad_abajo.on('pointerout',()=>{this.duck=false});

            this.pad_arriba = this.add.image((this.fondo.width / 32) * 19.5, (this.fondo.height / 32) * 13.8, 'flecha').setScale(4).setAlpha(.65).setAngle(90).setScrollFactor(0).setInteractive();
            this.pad_arriba.on('pointerover',()=>{this.up=true;});
            this.pad_arriba.on('pointerout',()=>{this.up=false});
           
        }
      
        function checkpoint() {
            if (check == 0) {
                check = check + 1;
            } else {
                check = 1;
            }
        }

        function Win() {
            this.cameras.main.startFollow(this.coche);
            var timeline = this.tweens.createTimeline();

            timeline.add({
                targets: this.coche,
                x: 3160,
                y: -1700,
                duration: 2000,

            });
            timeline.add({
                targets: this.coche,
                x: -200,
                y: -1700,
                duration: 1800
            });

            timeline.play();
            this.tio.visible = false;
        };
    }

  
    update(time, delta) {
        
        // console.log(this.left);
     
        if (this.life == 0) {
            this.sound.pauseAll();
            this.scene.start('GameOver');
        }

        if (this.coche.body.x < 0) {
            this.sound.pauseAll();
            this.scene.start('YouWin');
        }
        if (this.tio.body.onFloor() || this.tio.body.touching.down) {
            if ((this.cursor.left.isDown || this.izquierda.isDown)||this.left) {
                this.tio.body.setVelocityX(-210);
                this.tio.flipX = true;
                this.tio.anims.play('walk', true);
                this.tio.setSize(17, 45);
                this.tio.setOffset(8, 20);
            } else if ((this.cursor.right.isDown || this.derecha.isDown)||this.right) {
                this.tio.body.setVelocityX(210);
                this.tio.flipX = false;
                this.tio.anims.play('walk', true);
                this.tio.setSize(17, 45);
                this.tio.setOffset(8, 20);
            } else if ((this.cursor.up.isDown || this.salto.isDown)||this.up) {
                this.tio.body.setVelocityY(-300);
                this.tio.anims.play('jump', true);
                this.tio.setSize(17, 45);
                this.tio.setOffset(8, 20);
                this.jump.play();
            } else if ((this.cursor.down.isDown || this.abajo.isDown)||this.duck) {
                this.tio.body.setVelocityX(0);
                this.tio.anims.play("crouch", true);
                this.tio.setSize(17, 30);
                this.tio.setOffset(8, 35);
            } else {
                this.tio.setVelocityX(0);
                this.tio.anims.play('idle', true);
                this.tio.setSize(17, 45);
                this.tio.setOffset(8, 20);
            }
        } else {
            if ((this.cursor.left.isDown || this.izquierda.isDown)||this.left) {
                this.tio.body.setVelocityX(-210);
                this.tio.flipX = true;
                this.tio.anims.play('fall', true);

            } else if ((this.cursor.right.isDown || this.derecha.isDown)||this.right) {
                this.tio.body.setVelocityX(210);
                this.tio.flipX = false;
                this.tio.anims.play('fall', true);

            } else {
                this.tio.setVelocityX(0);
            }
        }

        this.scoreText.setScrollFactor(0);
        this.score2.setScrollFactor(0);
        this.lifes.setScrollFactor(0);
        this.lifes2.setScrollFactor(0);
        this.tablaMenu.setScrollFactor(0);

    //   if ((this.cursor.up.isDown || this.salto.isDown)) {
    //         this.tio.body.setVelocityY(-300);
    //         this.tio.anims.play('jump', true);
    //         this.tio.setSize(17, 45);
    //         this.tio.setOffset(8, 20);
    //     }
        
    }
        
    }
export default Play;
