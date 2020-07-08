class bob {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true,
            restitution: 0.3,
            friction: 1,
            density: 1,
        }
    
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
   // this.image = loadImage("crumpledpaper.png");
        World.add(world, this.body);

    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        fill("blue");
        rect(pos.x, pos.y, this.width, this.height);

        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
      //  imageMode(CENTER);
       // image(this.image, 0 , 0 , this.width , this.height);
      
        pop();
    } 
}