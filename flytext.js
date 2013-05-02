// script called on line 186 just after <head></head>

jQuery(document).ready(function($){
	Array.prototype.removeByValue = function(val) {
	    for(var i=0; i<this.length; i++) {
	        if(i == val) {
	            this.splice(i, 1);
	            break;
	        }
	    }
	}
	//slideTerms are set as term, then X and Y coordinate value
	window.slideTerms =[ ['Resilience',10,10],['Customer impact', 44,87],
						 ['Social media',32,190],['Talent',184,238], 
						 ['Innovation',455,161],['Technology',193,37],
						 ['Big Data', 366, 207],['Supply Chain',488,18],
						 ['Operations',589,99],['Internal audit',560,220]
				];
	window.slideTitle = ["This is the world<br/> we live in.",240,80]
	
	var showText = function (){
		if(window.slideTerms.length){
			var rndNum = Math.floor(Math.random()*window.slideTerms.length);
			var spanTerm = $('<div class="slide-term"/>');
			var _slide = $('.flytext');
			spanTerm.css({opacity:0, position: 'absolute'});
			spanTerm.css({marginLeft: slideTerms[rndNum][1] });
			spanTerm.css({marginTop: slideTerms[rndNum][2] });
			spanTerm.html(window.slideTerms[rndNum][0]);
			spanTerm.appendTo(_slide);
			spanTerm.animate({
				opacity: 1,
				fontSize:25+"px"
			},550)
			console.log(slideTerms[rndNum][0]);
			window.slideTerms.removeByValue(rndNum)
			

				
				

		}

		if(window.slideTerms.length === 0){
			window.clearInterval(window.showTimer);
			showPageTitle();
		}
	}//end showText()

	function showPageTitle(){
		var pageTitle = $('<div class="page-title"/>');
		var _slide = $('.flytext');
		pageTitle.css({
			width:300+'px',
			fontWeight:'bold',
			opacity: 0,
			color:'#fff',
			position:'absolute',
			marginLeft: slideTitle[1],
			marginTop: slideTitle[2]
			})
		pageTitle.html(slideTitle[0]);
		pageTitle.appendTo(_slide);
		$('.slide-term').animate({
				color:'#7f7f77'
			},2000);
		pageTitle.animate({
					opacity:1,
					fontSize:42+'px'
				},1500);	
	}

	//Global timer to start animation showText()
	$('body').animate({opacity:1},200,function(){
			window.showTimer = setInterval(showText, 500);
		});//end animate

})