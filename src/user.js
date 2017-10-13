import player from 'voxel-player';
import fly from 'voxel-fly';


class User {
  constructor(game, id = 0, color = 3) {
    this.game = game;
    this.id = id;
    this.color = color;
    this.avatar = player(game)();
    this.gravity = game.gravity;
    this.init();
  }

  init() {
    this.avatar.possess();
    this.setPosition();
    this.removeBody();
    this.makeFly();
    this.game.gravity = this.gravity;
  }

  setPosition(x = 500, y = 20, z = 500) {
    this.avatar.yaw.position.set(x, y, z);
  }

  getPosition() {
    const x = _.floor(this.avatar.position.x);
    const y = _.floor(this.avatar.position.y);
    const z = _.floor(this.avatar.position.z);

    return { x, y, z };
  }

  removeBody() {
    const playerSkin = this.avatar.playerSkin;

    playerSkin.playerModel.remove(playerSkin.upperbody);
    playerSkin.playerModel.remove(playerSkin.leftLeg);
    playerSkin.playerModel.remove(playerSkin.rightLeg);
  }

  makeFly() {
    const makeFly = fly(this.game)
    const target = this.avatar;
    game.flyer = makeFly(target);
  }
}

export default User;