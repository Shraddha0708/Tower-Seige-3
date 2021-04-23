class Block {

  constructor(x, y, width, height) {

      var options={
        restitution : 0.7,
        friction : 0.6,
        isStatic : false
      }

      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visiblity = 255;
      World.add(world, this.body);

    }
     Displayscore(){
       //console.log(this.vi)
      if (this.Visiblity<0 && this.Visiblity>-1005){

        score++;
        
      }
    }
    display() {

      if(this.body.speed<2)
{
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
}

else{
  World.remove(world,this.body);
  push();
  tint(255,this.Visiblity);
  this.Visiblity=this.Visiblity-5;
  pop();
}
    }
    
}
