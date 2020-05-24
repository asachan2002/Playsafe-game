///<reference path="lib/types/phaser.d.ts"/>
class Game extends Phaser.Scene {
    wheel: any;
    pin: any;
    spinText: any;
    prizeText: any;
    canSpin: Boolean = false;
    bgmusic: any;
    bannerGroup: any;
    banner: any;
    timeOut: any;
    isBanner: boolean = false;
    gameOptions = {
        slices: 8,
        slicePrizes: ["A KEY!!!", "50 STARS", "500 STARS", "BAD LUCK!!!", "200 STARS", "100 STARS", "150 STARS", "BAD LUCK!!!"],
        rotationTime: 3000
    }
    constructor() {
        super('Game');
    }
    preload() {
        this.load.image("wheel", "assets/gfx/wheel.png");
        this.load.image("pin", "assets/gfx/pin.png");
        this.load.image("banner", "assets/gfx/banner.png");
        this.load.audioSprite('sfx', 'assets/sfx/demo.json', [
            'assets/sfx/demo.ogg',
            'assets/sfx/demo.mp3'
        ]);
    }
    create() {
        this.addSound();
        this.bannerGroup = this.add.group();
        this.wheel = this.add.sprite(Number(this.game.config.width) / 2, Number(this.game.config.height) / 2, "wheel");
        this.pin = this.add.sprite(Number(this.game.config.width) / 2, Number(this.game.config.height) / 2, "pin");
        this.spinText = this.add.text(Number(this.game.config.width) / 2, Number(this.game.config.height) - 20, "Spin the wheel", {
            font: "bold 32px Arial",
            align: "center",
            color: "white"
        });
        this.spinText.setOrigin(0.5);
        this.canSpin = true;
        this.input.on("pointerdown", this.spinWheel, this);
    }
    addSound() {
        var spritemap = this.cache.json.get('sfx').spritemap;
    }
    update() {

    }
    spinWheel() {
        if (this.isBanner) {
            return;
        }
        if (this.canSpin) {
            this.sound.playAudioSprite('sfx', "spin");
            var rounds = Phaser.Math.Between(2, 4);
            var degrees = Phaser.Math.Between(0, 360);
            var prize = this.gameOptions.slices - 1 - Math.floor(degrees / (360 / this.gameOptions.slices));
            this.canSpin = false;
            this.tweens.add({
                targets: [this.wheel],
                angle: 360 * rounds + degrees,
                duration: this.gameOptions.rotationTime,
                ease: "Cubic.easeOut",
                callbackScope: this,
                onComplete: function (tween) {
                    this.canSpin = true;
                    this.sound.stopAll();
                    this.sound.playAudioSprite('sfx', "stop");
                    this.banner = this.add.sprite(Number(this.game.config.width) / 2, Number(this.game.config.height) / 2, "banner");
                    this.prizeText = this.add.text((Number(this.game.config.width) - 500) / 2, (Number(this.game.config.height) - 280) / 2 + 100, "Spin the wheel", {
                        font: "bold 32px Arial",
                        align: "center",
                        color: "black"
                    });
                    this.prizeText.setText("");
                    this.isBanner = true;
                    this.prizeText.setText(this.gameOptions.slicePrizes[prize]);
                    this.prizeText.x = this.prizeText.x + (500 - this.prizeText.width) / 2;
                    this.timeOut = setTimeout(() => {
                        this.removeBanner();
                    }, 3000);
                }
            });
        }

    }
    removeBanner() {
        this.isBanner = false;
        this.sound.stopAll();
        this.banner.destroy();
        this.prizeText.destroy();
    }
}

