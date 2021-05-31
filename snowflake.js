class snowflake
{
    constructor(x,y,w,h)
    {
        var options=
        {
        density:1,
        restitution: 1,
        friction: 0,
        }
        //this.body=Bodies.rectangle(x,y,w,h,options);
        this.width=width
        this.height=height
        this.snow= loadImage("images/snow5.webp")
        //World.add(world, this.body);
    }
    display()
    {  

    var pos = this.body.position;
    

    push();
    translate(pos.x, pos.y);
    rotate(this.body,angle)
    imageMode(CENTER);
    image(this.snow,0,0,this.width,this.height);
    pop();

    }
    
};