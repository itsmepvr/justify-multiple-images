  // Justify Multiple Images
	// Author: Venkata Ramana. P ("pvrreddy155@gmail.com")
	// fit multiple images in a div without overflow
	// Responsive - works in desktop, tab and mobile
	// Github: itsmepvr.github.io/

	(function($){
		$.fn.justifyMultipleImages = function(){
      // get the parent height and width
			var par_height = $(this).height();
			var par_width = $(this).width();
      
      // get the child height and width
			var child_height = $(this).find('img').height();
			var child_width = $(this).find('img').width();
      
      // Reduce the child height and width if bigger than parent
			//child_height = (child_height > par_height) ? par_height:child_height;
			//child_width = (child_width > par_width) ? par_width:child_width;
      
      // Condition to check overflow for parent
			var isOverflown = $(this)[0].scrollHeight > $(this)[0].clientHeight || $(this)[0].scrollWidth > $(this)[0].clientWidth;

			while(isOverflown){
				isOverflown = $(this)[0].scrollHeight > $(this)[0].clientHeight || $(this)[0].scrollWidth > $(this)[0].clientWidth;
				$(this).find("img").css({"width": child_width+"px", "height": child_height+"px"});
				child_width -= child_width/10;
				child_height -= child_height/10;
			}
		}
	})($);
