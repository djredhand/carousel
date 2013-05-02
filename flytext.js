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
	window.slideTerms =[ ['Resilience',10,10],['Customer impact', 44,57],
						 ['Social media',22,133],['Talent',154,138], 
						 ['Innovation',205,105],['Technology',193,37],
						 ['Big Data', 299, 67],['Supply Chain',448,18],
						 ['Operations',409,59],['Internal audit',520,320]
				];
	
	var showText = function (){
		if(window.slideTerms.length){
			var rndNum = Math.floor(Math.random()*window.slideTerms.length);
			var spanTerm = $('<div class="slide-term"/>');
			var _slide = $('.flytext');
			spanTerm.css({opacity:0});
			spanTerm.css({marginLeft: slideTerms[rndNum][1] });
			spanTerm.css({marginTop: slideTerms[rndNum][2] });
			spanTerm.html(window.slideTerms[rndNum][0]);
			spanTerm.appendTo(_slide);
			spanTerm.animate({
				opacity: 1,
				fontSize:180+"%"
			},1350)
			console.log(slideTerms[rndNum][0]);
			window.slideTerms.removeByValue(rndNum)
			

				
				

		}

		if(window.slideTerms.length === 0){
			window.clearInterval(window.showTimer);
		}
	}//end showText()
$('body').animate({opacity:1},500,function(){
			window.showTimer = setInterval(showText, 500);
		});//end animate

})