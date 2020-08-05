class Crumpled{
    constructor(){
        var options={
        isStatic: false,
        restitution: 0.3,
        friction: 0.5,
        density: 1.5         
        }
        this.body = Matter.Bodies.circle(70, 5, 10, options);
        this.image = loadImage("paper.png");
        World.add(world, this.body, this.image);
    }
    display(){
        this.body.x = this.body.position.x;
        this.body.y = this.body.position.y;
        push();
        translate(this.body.position.x, this.body.position.y);
        fill("ffffff");
        ellipseMode(CENTER);
        ellipse(0,0, 70, this.height);
        imageMode(CENTER);
        image(this.image, 0, 0, 110, 110);
        pop();
    }
    }

 
  
   
    


