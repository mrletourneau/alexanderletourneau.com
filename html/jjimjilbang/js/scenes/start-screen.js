startScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize: function SceneA ()
    {
        Phaser.Scene.call(this, { key: 'start-scene' });
    },

    preload: function ()
    {
        this.load.image('logo', 'img/raw/start_screen_1.png');
        this.load.image('startButton', 'img/raw/start_button.png');
        this.load.image('loadButton', 'img/raw/load_button.png');
        this.load.image('drop', 'img/raw/drop.png');

        this.load.audio('theme', 'snd/theme.mp3' );
    },

    create: function ()
    {
        this.clockwise = true;

        var music = this.sound.add('theme');

        music.play();

        this.logoContainer = this.add.container(400, 300);

        var particles = this.add.particles('drop');

        var emitter = particles.createEmitter({
            x: 0,
            y: 0,
            lifespan: 1500,
            speed: { min: 200, max: 300 },
            gravityY: -100,
            scale: { start: 3, end: .5 },
            quantity: 3,
            blendMode: 'ADD'
        });

        this.logo = this.add.image(0, 0, 'logo');
        this.logo.scaleX = .2;
        this.logo.scaleY = .2;
        this.startButton = this.add.image(5, 158, 'startButton').setInteractive();
        this.startButton.scaleX = .2;
        this.startButton.scaleY = .2;
        this.startButton.on('pointerup', function(){
            this.game.canvas.style.cursor = "default";
            this.scene.start('walk-screen');
        }, this);
        this.loadButton = this.add.image(0, 208, 'loadButton').setInteractive();
        this.loadButton.scaleX = .2;
        this.loadButton.scaleY = .2;

        this.logoContainer.add([particles, this.logo, this.startButton, this.loadButton]);
        this.logoContainer.setData('clockwise',true);
        this.logoContainer.update = function(){
            var clockwise = this.getData('clockwise');

            if ( clockwise )
            {
                this.rotation += 0.001;
                if (this.rotation >= 0.1)
                {
                    this.setData('clockwise', false);
                }
            }
            else
            {
                this.rotation -= 0.001;
                if (this.rotation <= -0.1)
                {
                    this.setData('clockwise', true);
                }
            }
        };

        this.input.on('gameobjectover', function (pointer, gameObject) {

            gameObject.flipY = true;
            this.game.canvas.style.cursor = "pointer";
        }, this);

        this.input.on('gameobjectout', function (pointer, gameObject) {

            gameObject.flipY = false;
            this.game.canvas.style.cursor = "default";
        }, this);

        this.input.on('gameobjectout', function (pointer, gameObject) {

            gameObject.flipY = false;
            this.game.canvas.style.cursor = "default";
        }, this);
    },

    update: function ()
    {
        this.logoContainer.update();
    }
});

