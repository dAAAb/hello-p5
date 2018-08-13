/*********************
//Many dots that pop up on the screen
*********************/

var manyDots = function(t){
    t.xpos=100;
    t.ypos=100;
    t.dot = [];
    t.dotCount = 0;
    t.animate=false;
    t.setup = function(){

       t.pixelDensity(1);
       t.windowWidth = window.innerWidth ;
       t.windowHeight = t.windowWidth * .5504
       t.canvas= t.createCanvas(t.windowWidth, t.windowHeight);
       t.canvas.parent('video-overlay');


       t.background(51)

       t.fill(255,0,133);
       t.addDot();
   }
   t.draw = function(){
    t.clear();
    t.color1=t.map(t.mouseX, 0, t.windowWidth, 0, 255);
    t.color2= t.map(t.mouseY, 0, t.windowWidth, 0, 255);

    t.fill(t.color1,t.color2,133);
    t.strokeWeight(3);  
    t.stroke(255,255,255);
        // t.ellipse(t.xpos+100, t.ypos+100, 50, 50);
        t.textSize(32);
        for(var i = 0; i<t.dot.length; i++){
            t.dot[i].display();
        }
        if(t.dotCount<100){
            t.addDot();
        }
        else{
            for(var i = 0; i<t.dot.length; i++){
                t.dot[i].move();
            }
        }
        t.cutout();
    }
    t.Dot = function(xcoord){
        this.x = xcoord;
        this.y = t.random(500);
        this.diameter = t.random(10, 30);
        this.speed = 1;
        this.move = function() {
            if (t.animate){
                this.x += 1;
                this.y += t.random(-this.speed, this.speed);
            }
            else{
                this.x += t.random(-this.speed, this.speed);
                this.y += t.random(-this.speed, this.speed);
            }
        };
        this.display = function() {
            t.ellipse(this.x, this.y, this.diameter, this.diameter);
        };
        this.animate = function() {
            this.x += 1;
            this.y += t.random(-this.speed, this.speed);
        };
    }
    t.addDot= function(){
        t.dot[t.dotCount] = new t.Dot(t.random(t.windowWidth));
        t.dotCount++;
    }
    t.speedUp= function(){
        t.animate=true;
    }



    t.resize =  function() {
      t.windowWidth = window.innerWidth ;
      t.windowHeight = t.windowWidth * .5504
      t.resizeCanvas(t.windowWidth, t.windowWidth * .5504);

  } 
  t.cutout =function(){
  var c=document.getElementById("defaultCanvas0");
  var ctx=c.getContext("2d");
  ctx.clearRect((t.width/2)- ((t.windowWidth/3.2)/2),0,  t.windowWidth/3.2 ,t.windowHeight);
}


  window.onresize = t.resize;

}






module.exports= manyDots;
