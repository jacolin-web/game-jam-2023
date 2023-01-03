import Phaser from 'phaser';

export default class Demo extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  preload() {
    this.load.image('logo', 'assets/title.png');
  }

  create() {
    const title = this.add.image(943, 500, 'logo');

    this.tweens.add({
      targets: title,
      y: 475,
      duration: 1500,
      ease: 'Sine.inOut',
      yoyo: true,
      repeat: -1
    });
  }

}
