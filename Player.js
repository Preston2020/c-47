class Player{
    constructor(x,y,width,height){
        var option = {
            friction: 0.5,

        }
        this.playerbody = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;
        console.log(this.playerbody);
        World.add(world, this.playerbody);
    }

    display(){
        rectMode(CENTER);
        rect(this.playerbody.position.x, this.playerbody.position.y, this.width, this.height);
        

    }
}