import player1 from "./main.js";


class Controls {
  constructor() {
    this.keydown = document.addEventListener("keydown", this.keyDown)
    this.keyup = document.addEventListener("keyup", this.keyUp)
  }
  keyDown(ev) {
    switch (ev.keyCode) {
      case 65:
        player1.spin = player1.rotSpeed / 180 * Math.PI / player1.fps
        break;
        case 87:
        player1.moving = true
        break;
      case 68:
        player1.spin = -player1.rotSpeed / 180 * Math.PI / player1.fps
        break;
    }
  }
  keyUp(ev) {
    switch (ev.keyCode) {
      case 65:
        player1.spin = 0
        break;
         case 87:
        player1.moving = false
        break;
      case 68:
        player1.spin = 0
        break;
    }
  }
  move() {
    if(player1.moving){
      

      player1.toMove.x += player1.strengthMovement * Math.cos(player1.angle) / player1.fps
      player1.toMove.y -= player1.strengthMovement * Math.sin(player1.angle) / player1.fps
    }else{
      player1.toMove.x -= player1.stopping * player1.toMove.x / player1.fps
      player1.toMove.y -= player1.stopping * player1.toMove.y / player1.fps
    }

    player1.x += player1.toMove.x
    player1.y += player1.toMove.y
    player1.angle += player1.spin
  }
}


export default new Controls()