/*
   micsmods.js
   
   Customised javascript for MicsGarage website.
   
*/

var shownContent = "none";

window.addEvent('domready',function() {
	// Grab the anchor items, and add an animation for them
	var aArr = $$('a');
	aArr.set('morph', {duration: 400});
	aArr.addEvents({
		mouseenter: function(){
			this.morph({
				'color': '#FFAAFF'
			});
		},
		mouseleave: function(){
			this.morph({
				'color': '#00AAFF'
			});
		}
	});

	// Grab the chooser items and add an animation for them
	var ciArr = $$('#chooser .link');
	ciArr.set('morph', {duration: 400});
	ciArr.addEvents({
		mouseenter: function(){
			this.morph({
				'color': '#FFD4FF'
			});
		},
		mouseleave: function(){
			this.morph({
				'color': '#00D4FF'
			});
		}
	});
	
	// The content show and hide
	
	// The About content
	function hideAboutSlow() {
		new Fx.Morph($('cont-about'), {duration: 500}).start({'opacity': 0});
	};	
	function hideAboutImm() {
		new Fx.Morph($('cont-about')).set({'opacity': 0});
	};	
	function showAbout() {
		new Fx.Morph($('cont-about'), {duration: 500}).start({'opacity':1});
		shownContent = "about";
	};
	
	// The Professional content
	function hideProfSlow() {
		new Fx.Morph($('cont-professional'), {duration: 500}).start({'opacity':0});
	};	
	function hideProfImm() {
		new Fx.Morph($('cont-professional')).set({'opacity': 0});
	};	
	function showProf() {
		new Fx.Morph($('cont-professional'), {duration: 500}).start({'opacity':1});
		shownContent = "professional";
	};
	
	// The Personal content
	function hidePersSlow() {
		new Fx.Morph($('cont-personal'), {duration: 500}).start({'opacity':0});
	};	
	function hidePersImm() {
		new Fx.Morph($('cont-personal')).set({'opacity': 0});
	};	
	function showPers() {
		new Fx.Morph($('cont-personal'), {duration: 500}).start({'opacity':1});
		shownContent = "personal";
	};
	
	// The Music content
	function hideMusicSlow() {
		new Fx.Morph($('cont-music'), {duration: 500}).start({'opacity':0});
	};	
	function hideMusicImm() {
		new Fx.Morph($('cont-music')).set({'opacity': 0});
	};	
	function showMusic() {
		new Fx.Morph($('cont-music'), {duration: 500}).start({'opacity':1});
		shownContent = "music";
	};
	
	// Decide what to hide based on shownContent. Very plodding, but I'll fix this in time. 
	function decideHideAction() {
		switch (shownContent) {
			case "about":
				hideProfImm();
				hidePersImm();
				hideMusicImm();
				hideAboutSlow();
				break;
				
			case "professional":
				hidePersImm();
				hideMusicImm();				
				hideAboutImm();
				hideProfSlow();
				break;
				
			case "personal":
				hideAboutImm();
				hideProfImm();
				hideMusicImm();				
				hidePersSlow();
				break;
				
			case "music":
				hideAboutImm();
				hideProfImm();
				hidePersImm();
				hideMusicSlow();				
				break;
			
			default:
				hideAboutImm();
				hideProfImm();
				hidePersImm();
				hideMusicImm();				
		}
	};
	
	// Events to handle clicking on one of the chooser lines.
	$('link-about').addEvent('click',function(){
		if (shownContent != "about") { 
			decideHideAction();
			showAbout();
		}
	});
	$('link-professional').addEvent('click',function(){
		if (shownContent != "professional") { 
			decideHideAction();
			showProf();
		}
	});
	$('link-personal').addEvent('click',function(){
		if (shownContent != "personal") { 
			decideHideAction();
			showPers();
		}
	});
	$('link-music').addEvent('click',function(){
		if (shownContent != "music") { 
			decideHideAction();
			showMusic();
		}
	});
	
	// The starting action
	showAbout();
});