class dustbin{

    constructor(x,y){
        this.x = x;
        this.y = y;
        this.dustbinwidth = 200;
        this.dustbinheight = 100;
        this.wallthickness = 20;
        this.angle = 0;

        this.bottombody = Bodies.rectangle(this.x, this.y, this.dustbinwidth, this.wallthickness,{isStatic:true});
        
        this.leftwallbody = Bodies.rectangle(this.x -this.dustbinwidth/2, this.y - this.dustbinheight/2, 
            this.wallthickness, this.dustbinheight, {isStatic:true});
        Matter.Body.setAngle(this.leftwallbody, this.angle);

        this.rightwallbody = Bodies.rectangle(this.x +this.dustbinwidth/2, this.y - this.dustbinheight/2, 
            this.wallthickness, this.dustbinheight, {isStatic:true});
        Matter.Body.setAngle(this.rightwallbody, -1* this.angle );

        World.add(world, this.bottombody);
        World.add(world, this.leftwallbody);
        World.add(world, this.rightwallbody);
    }

    display(){
        var bottomPos = this.bottombody.position;
        var leftwallPos = this.leftwallbody.position;
        var rightwallPos = this.rightwallbody.position;

        push();
        translate(leftwallPos.x, leftwallPos.y);
        rectMode(CENTER);
        angleMode(RADIUS);
        strokeWeight()
        stroke(255);
        fill(255);
        rotate(this.angle);
        rect(0,0,this.wallthickness, this.dustbinheight);
        pop();

        push();
        translate(rightwallPos.x, rightwallPos.y);
        rectMode(CENTER);
        angleMode(RADIUS);
        strokeWeight()
        stroke(255);
        fill(255);
        rotate(-1*this.angle);
        rect(0,0,this.wallthickness, this.dustbinheight);
        pop();

        push();
        translate(bottomPos.x, bottomPos.y);
        rectMode(CENTER);
        angleMode(RADIUS);
        strokeWeight()
        stroke(255);
        fill(255);
        // rotate(this.angle);
        rect(0,0,this.dustbinwidth, this.wallthickness);
        pop();
    }
}