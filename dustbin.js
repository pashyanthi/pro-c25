class Dustbin{
    constructor(x,y,width,height){
  var options={
      isStatic:true 
  }
  this.body=Bodies.rectangle(x,y,30,30,options);
  this.width=100;
  this.height=100;
  World.add(world,this.body);
 this.image=loadImage("dustbin.png");

    }
    display(){
//var pos=this.body.position;
//rect(pos.x,pos.y,this.width,this.height);
     //push();
    //imageMode(CENTER);
     //fill("white") ;
     
     image(this.image, 650,560, this.width, this.height);
    // pop();
       }
}