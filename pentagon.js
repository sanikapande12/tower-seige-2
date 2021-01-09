class Pentagon{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            density:1,
            
        }

        this.body = Bodies.circle(x, y, radius, options);
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.image = loadImage("polygon.png");

        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
       
         
       
       imageMode(CENTER);
        image(this.image,pos.x, pos.y, this.radius, this.radius);
        
        pop();
    }
}