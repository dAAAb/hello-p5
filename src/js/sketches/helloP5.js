
var helloP5= function(s){
	s.setup = function(){
		s.pixelDensity(1);
		s.windowWidth = window.innerWidth ;
		s.windowHeight = s.windowWidth * .5504;
		s.canvas= s.createCanvas(s.windowWidth, s.windowHeight);
		s.canvas.parent('video-overlay');
	}

	s.draw = function(){
		s.fill('hotpink')
		s.textSize(32);
		 if(window.videoCurrentTimeGlobal<145.0){
		s.text("special thanks to...", 100, s.windowHeight/2);
		s.text("List Names", 200, s.windowHeight/2);
		s.text("List Names", 250, s.windowHeight/2);
		s.text("List Names", 300, s.windowHeight/2);
		s.text("List Names", 400, s.windowHeight/2);
}
		   if(window.videoCurrentTimeGlobal>145.0 &&window.videoCurrentTimeGlobal<149.0){
		s.text("to view the examples Click Here", 100, s.windowHeight/2);
   }


   		   if(window.videoCurrentTimeGlobal>149.0){
		s.text("This project was completed as part of GSOC", 100, s.windowHeight/2);
   }
	}




}

module.exports= helloP5;




// var helloP5= function(s){
// 	s.mapped;


// 	s.setup = function(){
// 		s.pixelDensity(1);
// 		s.windowWidth = window.innerWidth ;
// 		s.windowHeight = s.windowWidth * .5504;
// 		s.canvas= s.createCanvas(s.windowWidth, s.windowHeight);
// 		s.canvas.parent('video-overlay');
// 	}

// 	s.draw = function(){
		
// 		// s.mapped = s.map(s.Math.abs(s.mouseX),0,s.width,-7,7);

// 		// if(s.mouseIsPressed){
// 		// 	s.mapped+=5;
// 		// }

// 		// s.background(240);

// 		// s.push();
// 		// s.blendMode(s.MULTIPLY);

// 		// s.textAlign(s.CENTER, s.CENTER);
// 		// s.textSize(s.height/5);
// 		// s.textStyle(s.BOLD);

//   // // cyan
//   // s.fill(0,255,255);
//   // s.text('p5*js', s.width/2+s.mapped, s.height/2);

//   // // magenta
//   // s.fill(255,0,255);
//   // s.text('p5*js', s.width/2, s.height/2);

//   // //yellow
//   // s.fill(255, 255, 0);
//   // s.text('p5*js', s.width/2-s.mapped, s.height/2 );

//   // s.pop();
// }




// s.resize =  function() {
// 	s.windowWidth = window.innerWidth ;
// 	s.windowHeight = s.windowWidth * .5504
// 	s.resizeCanvas(s.windowWidth, s.windowWidth * .5504);
// 	console.log(s.windowWidth)

// } 

// window.onresize = s.resize;

// }

// module.exports= helloP5;














