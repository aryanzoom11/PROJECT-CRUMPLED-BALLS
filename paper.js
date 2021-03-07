const { FILL } = require("./p5")

class Paper{
constructor(x,y,radius){
var_options ={
isStatic:false,
density:1.0,
friction:0.3,
restitution:0.2
}
this.radius=radius
this.body=Bodies.circle(x,y,radius,options)
}
display(){
fill("yellow");
ellipseMode(RADIUS);
ellipse(this.body.position.x,this.body.position.y,this.radius)
}
}