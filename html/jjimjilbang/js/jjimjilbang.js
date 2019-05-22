// 찜질방
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#b6ffeb',
    scene: /*[ walkScreen ], */ [ startScene, walkScreen ],
    physics: {
        default: 'arcade',
        arcade: {
            //debug: true
        }
    },
};

var game = new Phaser.Game(config);
