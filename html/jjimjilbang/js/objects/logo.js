var Logo = new Phaser.Class({

    Extends: Phaser.GameObjects.Container,

    initialize: function Logo (scene)
    {
        Phaser.GameObjects.Image.call(this, scene, 0, 0, 'sprites', 'enemy');
    },

    update: function (time, delta)
    {

    }

});