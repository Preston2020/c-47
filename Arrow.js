class Arrow{
    constructor(x,y,width,height,angle){
        var options ={
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,angle);
        this.width = width;
        this.height = height;
        Matter.Body.setAngle(this.body, angle);
        //Matter.Body.setPosition(this.body, {x: 358, y: 300});
        World.add(world, this.body);
        this.arrowImage = loadImage("arrow.png");
    }

    display(){
        var angle = this.body.angle;
        //push();
        //translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        imageMode(CENTER);
        image(this.arrowImage, 1158,730,40,30);
        //console.log(angle)
        //pop();
      }
}