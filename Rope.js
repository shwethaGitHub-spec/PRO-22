class Rope{
    constructor(body1,body2,pointA,pointB){
        this.pointA = pointA
        this.pointB = pointB
        var options = {
            bodyA :body1,
            bodyB :body2,
            pointB:{x:this.pointA,y:this.pointB,
                stiffness : 0.04,

            }
        }
        this.body = Matter.Constraint.create(options) 
        World.add(world,this.body)
       }
      display(){ 
          var point1 = this.body.bodyA.position
      //    console.log(pointA)
          var point2 = this.body.bodyB.position
          push()
          strokeWeight(3)
          var A1X = point1.x;
          var A1Y = point1.y;
          var A2X= point2.x;
          var A2Y = point2.y; 
          line(A1X, A1Y, A2X + this.pointA, A2Y + this.pointB);
          pop();
      }
    }
