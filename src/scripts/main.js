const canvas = document.getElementById("canvas")
const context = canvas.getContext("2d")
const canWidth = canvas.width = 1200
const canHeight = canvas.height = 500
import Player from "./player.js"

const player = new Player(canWidth, canHeight)
console.log(player)
function main(){
  requestAnimationFrame(main)
context.fillStyle = "deepskyblue"
context.fillRect(0, 0, canWidth, canHeight)

player.drawPlayer(context)
}



main()
