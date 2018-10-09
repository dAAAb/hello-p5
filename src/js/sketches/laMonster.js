const p5play = require('./play.js');


var laMonster= function(p5){

	let monsterlooBackground;
	let monsterloo;
	let fastmove = false;
	// let loneTree;


	let standmonster1;
	let standmonster2;
	let standmonster3;
	
	let moveright = false;
	let moveleft = true;
	
	let magicX = 300;
	let monster;

	let collisionTest = false;
	
	let resize=true;
	p5.preload = () => {
		monsterlooBackground = p5.loadImage("https://emclaren.github.io/hello-p5/dist/assets/img/MonsterLoo_Background.png"); 
	}
	
	
	
	p5.setup = () => {
		p5.pixelDensity(1);
		p5.windowWidth = window.innerWidth;
		p5.windowHeight = p5.windowWidth  * 0.562;
		p5.canvas= p5.createCanvas(p5.windowWidth/2.8, p5.windowHeight/2);
		p5.canvas.parent('video-overlay');
		p5.canvas.class('la-monster-canvas');
		// p5.background('#000032');
		monster = p5.createSprite( p5.width, p5.height/1.25, 40, 40);
		// monster = p5.createSprite(200, 490, 120, 179);
		// monster.addAnimation("floating", "https://emclaren.github.io/hello-p5/dist/assets/img/BS_1.png", "https://emclaren.github.io/hello-p5/dist/assets/img/BS_5.png");
		// monster.addAnimation("right", "https://emclaren.github.io/hello-p5/dist/assets/img/BR_1.png", "https://emclaren.github.io/hello-p5/dist/assets/img/BR_9.png");
		// monster.addAnimation("left", "https://emclaren.github.io/hello-p5/dist/assets/img/BL_1.png", "https://emclaren.github.io/hello-p5/dist/assets/img/BL_9.png");
	
		monster.addAnimation("floating", "dist/assets/img/BS_1.png", "dist/assets/img/BS_5.png");
		monster.addAnimation("right", "dist/assets/img/BR_1.png", "dist/assets/img/BR_9.png");
		monster.addAnimation("left", "dist/assets/img/BL_1.png", "dist/assets/img/BL_9.png");
		
		monster.depth = 5;
		monster.scale = p5.width/2000;

		
		standmonster1 = p5.createSprite(p5.width*1.8, p5.height/1.2);  
		standmonster1.addAnimation("normal", "https://emclaren.github.io/hello-p5/dist/assets/img/EM_2.png");
		standmonster1.setCollider("rectangle", 0,0, 170,280);
		standmonster1.debug = collisionTest;
		standmonster1.depth = 3;
		standmonster1.scale = p5.width/2000;
		let magicX = p5.width/3;

				
	}
	
	
	
	
	p5.draw = () => {
		// p5.image(monsterlooBackground, -2, 0, monsterlooBackground.width, p5.height );  
		// magicX = p5.mouseX;

		// if(window.videoCurrentTimeGlobal<2.75){
		p5.image(monsterlooBackground, -p5.width/2, 0, monsterlooBackground.width, p5.height); 
		// }

	
		
		if(window.videoCurrentTimeGlobal>2.75){
			p5.clear()

		}

		p5.monsterdraw();
		p5.cameraview();
		p5.drawSprites();
		p5.camera.on();
	}
	


	p5.cameraview = () => {	
		
		
		p5.camera.position.x = magicX;
		
		// monster.velocity.x = (p5.camera.mouseX-monster.position.x)/20;
		
		// p5.camera.zoom = 1;

	
	
		if ( p5.mouseX > 200 && p5.mouseX < 800 || p5.mouseX == 0){
			
			fastmove = false;
			
			if( p5.camera.position.x < monster.position.x) {
				moveright = true;
				magicX += 3;
			
			}
			
		} 
		else if ( p5.mouseX > 800){
			
			fastmove = true;
			
				if( p5.camera.position.x <monster.position.x) {
					// moveright = true;
					magicX += 5;
			}
			
			
		} 
		else if ( p5.mouseX < 200){
			
				// magicX -= 40;
			fastmove = false;
			
				if( p5.camera.position.x > p5.mouseX){
					// magicX = 500;
					magicX -= 3;
				}
			
		} 
		// else{
			
		// 	moveright = false;
		// 	moveleft = false;
		// } 	
	}
	
	p5.monsterdraw = () => {	

		

		// -------- creating Monster -------		
	
	
		if(p5.mouseX == 0){
			monster.changeAnimation("right");
			//unflip 
			monster.mirrorX(1);
	
			if( fastmove == true){ 
				monster.velocity.x = 4.1;
			} else {
				monster.velocity.x = 2.3;
			}
			
		}
			//if mouse is to the left
		else if(p5.camera.mouseX < monster.position.x - 10) {
			monster.changeAnimation("right");
			//flip horizontally
			monster.mirrorX(-1);
			//negative x velocity: move left
			monster.velocity.x = -3;
	
			
			
		} else if(p5.camera.mouseX > monster.position.x + 10){
		
			monster.changeAnimation("right");
			//unflip 
			monster.mirrorX(1);
			if( fastmove == true){ 
				monster.velocity.x = 4.1;
			} else {
				monster.velocity.x = 2.3;
			}
	
			
		} else {
			
			//if close to the mouse, don't move
			monster.changeAnimation("floating");
			monster.velocity.x = 0;
	
		}
		
		
	}	
	
}



module.exports= laMonster;