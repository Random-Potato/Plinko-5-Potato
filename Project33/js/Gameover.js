class Gameover{
    constructor(x,y,w,h){
        this.width = w;
        this.height = h;
        this.x = x;
        this.y = y;
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world, this.body);

    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(gameoverImage, pos.x, pos.y, this.width, this.height);
        console.log("gameover")
    }
}