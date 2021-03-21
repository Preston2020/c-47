class Code{
    constructor(){
        this.input = createInput("enter the code");
        this.button = createButton("play");
        this.greeting = createElement("h2");
        this.number = Math.round(random(1,30));
        this.button2 = createButton("key");
    }

    display(){
    var title = createElement('h2');
    title.html("trap house escpae game");
    title.position(480,100);
    this.button2.mousePressed(() => {
        var input = createInput("entere the code here");
        //this.button2.hide()
        this.input.position(300,160);
    })
    //var button = createButton('play');
    
    
    this.button.position(580,300);
    this.button2.position(1175,740)
    this.button.mousePressed( () => {
        this.input.hide();
        this.button.hide();
        this.greeting.html("hello welcome to the trap house." + this.number);
        this.greeting.position(440,200);
    });
}

    hide(){
        //this.greeting.hide();
        this.button.hide();
        
    }
}