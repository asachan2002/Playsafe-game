/// <reference path="../src/lib/types/phaser.d.ts" />
declare class Game extends Phaser.Scene {
    wheel: any;
    pin: any;
    spinText: any;
    prizeText: any;
    canSpin: Boolean;
    bgmusic: any;
    bannerGroup: any;
    banner: any;
    timeOut: any;
    isBanner: boolean;
    gameOptions: {
        slices: number;
        slicePrizes: string[];
        rotationTime: number;
    };
    constructor();
    preload(): void;
    create(): void;
    addSound(): void;
    update(): void;
    spinWheel(): void;
    removeBanner(): void;
}
