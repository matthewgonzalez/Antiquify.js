/*global jQuery */
/*!	
* Antiquify.JS 0.1
*
* Copyright 2012, Matthew Gonzalez http://artisfacto.com
* Released under the WTFPL license 
* http://sam.zoy.org/wtfpl/
*
* Thanks to Paravel and Lettering.JS - http://letteringjs.com - for the inspiration and starting point.
*
* Date: Wed Dec 26 17:14:00 2012 -0600
*/
(function($){
	function injector(t, rgb) {
		var a = t.html().split(''), inject = '';
		if (a.length) {
		    // sticky and stopSticky determine the amount of chars to apply the randomStyles to 
        var sticky = 0;
        var stopSticky = 5 + Math.floor(Math.random() * 15);
        // isElement is used to determine anything between <> and ignore those (so it doesn't effect HTML tags!)
        var isElement = 0;
      
			$(a).each(function(i, item) {
			  // number var determines the frequency of styled sections
        var number = 1 + Math.floor(Math.random() * 15);
        
        if ( this == "<" || isElement == 1 ) {
          if (sticky >= 1) {
             inject += '</span>';
            sticky = 0;
          } 
          if ( this == ">") {
            isElement = 0;
          } else {
            isElement = 1;
          }
          inject += item;
        } else if (number == 1 && sticky == 0 && isElement == 0) {
				  inject += '<span class="antiquify-span '+randomClasses()+'" style="'+randomStyles(rgb)+'">'+item;
          sticky++;
        }  else if (sticky >= 1 && sticky < stopSticky) {
          inject += item;
          sticky++;
        } else if (sticky >= stopSticky) {
          inject += item+'</span>';
          sticky = 0;
          stopSticky = 5 + Math.floor(Math.random() * 25);
        } else {
          inject += item;
        }
			});	
			
			t.empty().append(inject);
		}
    
	}
  
  function randomStyles(rgb) {
		var styles = '';

		
    var a = 1 + Math.floor(Math.random() * 5);
    var b = 1 + Math.floor(Math.random() * 5);

    
    if (a == 1) {
      styles += 'position:relative; top:' + .3*(-0.5 + Math.random())+ 'em;';
    } 
    
    if (b == 1) {
      styles += 'position:relative;  left: -1px;';
    }
    
    
    return styles;
	}
	
	function randomClasses() {
			var classes = '';
	
			
	    var a = 1 + Math.floor(Math.random() * 5);
	    var b = 1 + Math.floor(Math.random() * 5);
	
	    
	    if (a == 1) {
	      classes += 'antiquify-shadow ';
	    } 
	    
	    if (b == 1) {
	      classes += 'antiquify-mask ';
	    }
	    
	    
	    return classes;
		}
	


	var methods = {
		init : function() {
      return this.each(function() {
      
        var textColor = $(this).css('color');
        var mask = 'url(data:image/png;base64,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)';
        
        var rgb = textColor.split('(')[1].split(')')[0];
        $(this).css({textShadow: '-.08em 0em 0em rgba('+rgb+', 1), 0em -0.07em 0em rgba('+rgb+', 1)'});
        
        if( $("head #antiquify-styles").length <=0) {
				   $("head").append("<style type='text/css' id='antiquify-styles'> .antiquify-shadow { text-shadow: .07em 0em 0em rgba("+rgb+", 1), 0em .06em 0em rgba("+rgb+", 1), -0.07em 0em 0em rgba("+rgb+",1), 0em -0.06em 0em rgba("+rgb+", 1) } .antiquify-mask { -webkit-mask-image:" +mask+ "; -o-mask-image:" +mask+ "; -moz-mask-image:" +mask+ "; mask-image:" +mask+ "; } </style>");
        }
        
				injector($(this), rgb);

			});

		}
	};

	$.fn.antiquify = function( method ) {
			return methods.init.apply( this, [].slice.call( arguments, 0 ) ); 
	};

})(jQuery);