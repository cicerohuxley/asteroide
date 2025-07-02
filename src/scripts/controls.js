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
         case 68:
        player1.spin = 0
        break;
    }
  }
  move() {
    player1.angle += player1.spin
  }
}


export default new Controls()