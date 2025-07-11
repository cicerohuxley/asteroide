import Player from "./player.js"
import controls from "./controls.js"

const canvas = document.getElementById("canvas")
const context = canvas.getContext("2d")
const canWidth = canvas.width = 1200
const canHeight = canvas.height = 500


const player1 = new Player(canWidth, canHeight, context)
function main() {
  requestAnimationFrame(main)
  context.fillStyle = "deepskyblue"
  context.fillRect(0, 0, canWidth, canHeight)

  controls.keyDown
  controls.keyUp
  controls.move()
  player1.aroundCanvas()
  if(player1.moving){
      player1.drawPlayerThruster()
  }
  player1.drawPlayer()
}


export default player1



main()
