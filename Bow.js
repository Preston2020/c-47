class Bow{
    constructor(x,y,width,height, angle){
       var options = {
            isStatic: true,

        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;
        Matter.Body.setAngle(this.body, angle);
        World.add(world, this.body);
        this.image = loadImage("bow.png")
    }
    display(){
        /*rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        fill('red');*/
        imageMode(CENTER);
        image(this.image,1150,650,this.width,this.height);
    }
}