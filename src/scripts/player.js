class Player{
  constructor(canWidth, canHeight){
    this.x = canWidth / 2
    this.y = canHeight / 2
    this.shipZize = 30
    this.radius = this.shipZize / 2
    this.angle = 90 / 180 * Math.PI
  }
  drawPlayer(context){
    context.fillStyle = "black"
    context.lineWith = this.shipZize / 20
    context.beginPath()
    context.moveTo(
      this.x + this.radius * Math.cos(this.angle),
      this.y - this.radius * Math.sin(this.angle)
    )
    context.lineTo(
      this.x - this.radius * (Math.cos(this.angle) + Math.sin(this.angle)),
      this.y + this.radius * (Math.sin(this.angle) - Math.cos(this.angle))
    )
        context.lineTo(
      this.x - this.radius * (Math.cos(this.angle) - Math.sin(this.angle)),
      this.y + this.radius * (Math.sin(this.angle) + Math.cos(this.angle))
    )
    context.closePath()
    context.fill()
  }
}

export default Player