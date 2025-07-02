class Player{
  constructor(canWidth, canHeight, context){
    this.context = context
    this.canWidth = canWidth
    this.canHeight = canHeight
    this.x = this.canWidth / 2
    this.y = 500 / 2
    this.shipZize = 30
    this.radius = this.shipZize / 2
    this.angle = 90 / 180 * Math.PI
    this.rotSpeed = 160
    this.fps = 30 
    this.spin = 0
    this.strengthMovement = 5
    this.stopping = 0.7
    this.moving = false
    this.toMove = {
      x: 0,
      y: 0
    } 
  }
  drawPlayerThruster(){
    this.context.strokeStyle = "yellow"
    this.context.fillStyle = "red"
    this.context.linewidth = this.shipZize / 10
    this.context.beginPath()
      this.context.moveTo(
        this.x - this.radius * (2/3 * Math.cos(this.angle) + .5 * Math.sin(this.angle)),
        this.y + this.radius * (2/3 * Math.sin(this.angle) - .5 * Math.cos(this.angle))
      )
    this.context.lineTo(
      this.x - this.radius * 8 / 3 * Math.cos(this.angle),
      this.y + this.radius * 8 / 3 * Math.sin(this.angle)
    );
       this.context.lineTo(
      this.x - this.radius * (2/3 * Math.cos(this.angle) - .5 * Math.sin(this.angle)),
      this.y + this.radius * (2/3 * Math.sin(this.angle) + .5 * Math.cos(this.angle))
    );
    this.context.closePath()
    this.context.fill()
    this.context.stroke()

  }
  drawPlayer(){
    this.context.fillStyle = "black"
    this.context.linewidth  = this.shipZize / 20
    this.context.beginPath()
    this.context.moveTo(
      this.x + this.radius * Math.cos(this.angle),
      this.y - this.radius * Math.sin(this.angle)
    )
    this.context.lineTo(
      this.x - this.radius * (Math.cos(this.angle) + Math.sin(this.angle)),
      this.y + this.radius * (Math.sin(this.angle) - Math.cos(this.angle))
    )
        this.context.lineTo(
      this.x - this.radius * (Math.cos(this.angle) - Math.sin(this.angle)),
      this.y + this.radius * (Math.sin(this.angle) + Math.cos(this.angle))
    )
    this.context.closePath()
    this.context.fill()
  }
  aroundCanvas(){
    if(this.x < 0 -this.radius){
      this.x = this.canWidth + this.radius
    } else if(this.x > this.canWidth + this.radius){
      this.x = 0 - this.radius
    }

    if(this.y < 0 - this.radius){
      this.y = this.canHeight + this.radius
    }else if(this.y > this.canHeight + this.radius){
      this.y = 0 - this.radius
    }
  }
}

export default Player