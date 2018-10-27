/*********************
// Forum Link
// Description: Link to the Processing Forum & Community pages
*********************/

const forumLink = (p5) => {
	let forumLinkDiv;
	let communityLinkDiv;
	let forumLinkText;
	let communityLinkText;
	let linkHidden = true;

	p5.setup  = () => {
		p5.pixelDensity(1);
		let windowWidth = document.documentElement.clientWidth;
		let windowHeight = windowWidth  * 0.562;
		p5.canvas = p5.createCanvas(windowWidth, windowHeight);
		p5.canvas.parent('video-overlay');
		//Change language of link text depending on the selected language 
		if(window.videoLanguage == "es"){
			forumLinkText = "Foros";
			communityLinkText	= "Comunidad";
		}else if(window.videoLanguage == "fr"){
			forumLinkText = "Forum";
			communityLinkText = "Communauté";
		}else{
			forumLinkText = "Forum";
			communityLinkText = "Community";
		}
		// Create the upper link on load (note the styling is done with css)
		forumLinkDiv = p5.createDiv('<a href="https://discourse.processing.org/"  target="_blank"><div class="sketch-link-upper sketch-link sketch-link-animation"><span>' + forumLinkText + '</span> >> </div></a>');
		forumLinkDiv.parent('video-overlay');
		forumLinkDiv.class('test2');
	};


	p5.draw  = () => {
		p5.clear();
		// Create the lower link when the time is appropriate, if statement prevents it from continuously running
		if(window.videoCurrentTimeGlobal>113){
			if(linkHidden){
			communityLinkDiv = p5.createDiv('<a href="http://p5js.org/community/"  target="_blank"><div class="sketch-link-lower sketch-link sketch-link-animation"><span>'+communityLinkText+'</span> >> </a>');
			communityLinkDiv.parent('video-overlay');
			linkHidden = false;
			}
		}
	};
};





module.exports= forumLink;