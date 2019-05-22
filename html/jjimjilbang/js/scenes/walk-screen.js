var walkScreen = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize: function WalkScreen ()
    {
        Phaser.Scene.call(this, { key: 'walk-screen' });
    },

    preload: function ()
    {
        this.load.image('mainCharacter', 'img/raw/main_female.png');
    },

    create: function ()
    {
        this.mainCharacter = this.physics.add.image(300, 400, 'mainCharacter');
        this.cursors = this.input.keyboard.createCursorKeys();
        this.pause = false;
        this.input.keyboard.on('keydown', function (event) {

            if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.ESC)
            {
                this.pause = !this.pause;
            }

        }, this);
    },

    update: function () {
        this.mainCharacter.setVelocity(0);

        if ( !this.pause )
        {
            if ( this.pausedText )
            {
                this.pausedText.destroy();
                //delete this.pausedText;
            }
            if (this.cursors.left.isDown) {
                this.mainCharacter.setVelocityX(-300);
            } else if (this.cursors.right.isDown) {
                this.mainCharacter.setVelocityX(300);
            }

            if (this.cursors.up.isDown) {
                this.mainCharacter.setVelocityY(-300);
            } else if (this.cursors.down.isDown) {
                this.mainCharacter.setVelocityY(300);
            }
        }
        if ( this.pause )
        {
            this.pausedText = this.add.text(100, 100, 'Paused');
        }
    }
});

