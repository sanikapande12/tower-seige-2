class Box {
    constructor(x, y, width, height){
        var options = {
            isStatic:false,
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.visibility = 255;

        World.add(world, this.body);
    }

    display(){

        var pos = this.body.position;
        push();
        
        


        if(this.body.speed<2){
            strokeWeight(4)
            rectMode(CENTER);
            rect(pos.x, pos.y, this.width, this.height);
            pop();
      
        }

        else{
            World.remove(world, this.body);
            this.visibility = this.visibility-5;
        }
        
        
    }
}