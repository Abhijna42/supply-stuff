class Box{
    constructor(x,y,width,height){
        var options={
        Matter.Body.setStatic(Box1,false);
Matter.Body.setStatic(Box2,false);
Matter.Body.setStatic(Box3,false);
restitution:1



        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
      
    }
    display()
    {
        var pos=this.body.position;
        
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        
    
    }
}