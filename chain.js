class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.2,
            length: 10,
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
    attach(){
        this.sling.bodyA = ball;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(63,224,208);

            strokeWeight(5);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
           
            
            pop();
        }
    }

     attach(body){
    this.sling.bodyA = body;
    }
    
}

