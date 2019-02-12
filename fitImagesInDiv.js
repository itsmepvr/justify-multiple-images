// fitImagesInDiv 
	// Author: Venkata Ramana. P ("pvrreddy155@gmail.com")
	// fit multiple images in a div without overflow
	// Responsive - works in desktop, tab and mobile

	(function($){
		$.fn.fitImagesInDiv = function(){
			var par_height = $(this).height();
			var par_width = $(this).width();
			var child_height = $(this).find('img').height();
			var child_width = $(this).find('img').width();
			child_height = (child_height > par_height) ? par_height:child_height;
			child_width = (child_width > par_width) ? par_width:child_width;
			var numOfImages = $(this).find('img').length;
			if (numOfImages%2 != 0) numOfImages += 1;
			var par_area = eval(par_height * par_width);
			var child_area = eval(child_height * child_width);
			var isOverflown = $(this)[0].scrollHeight > $(this)[0].clientHeight || $(this)[0].scrollWidth > $(this)[0].clientWidth;
			while(isOverflown){
				isOverflown = $(this)[0].scrollHeight > $(this)[0].clientHeight || $(this)[0].scrollWidth > $(this)[0].clientWidth;
				$(this).find("img").css({"width": child_width+"px", "height": child_height+"px"});
				child_width -= 10;
				child_height -= 10;
			}
		}
	})(jQuery);
