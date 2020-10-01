class Box{
    constructor(x,y,width,height){
        this.width=width
        this.height=height
    var options = {
        restitution: 1,
        isStatic:true
        
     }
    
    this.body = Bodies.rectangle(x,y,width,height,options)
    World.add(world,this.body)
}


display(){
    var pos =this.body.position
    rectMode(CENTER)
    fill(225)
    rect(pos.x,pos.y,this.width,this.height)
}

}