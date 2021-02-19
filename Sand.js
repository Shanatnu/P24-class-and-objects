class Sand{
    constructor(x, y,r) {
      var options = {
          'restitution':1.3,
          'friction':5.0,
          'density':1.0
         
      }
      //this.body = Bodies.ellipse(x, y, width, height, options);
      
      this.x = x;
      this.y = y;
      this.r = r;

      this.body=Bodies.circle(x, y, r, options)
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(this.body.angle);
      ellipseMode(CENTER);
      strokeWeight(4);
      stroke("black");
      fill("red");
      circle(0, 0, this.x*0.03,this.y*0.03);
      pop();
    }
  };


