;
(function($) {
    $(document).ready(function() {
        $('#main-menu:not(.in)').find('.nav > li').on('mouseenter', function() {
            $('.sub-menu').hide();
            $(this).addClass('hover');
            $(this).find('.sub-menu').show();
        });
        $('#main-menu:not(.in)').find('.nav > li').on('mouseleave', function() {
            $(this).removeClass('hover');
            $(this).find('.sub-menu').hide();
        });


        //首页新闻切换
        var newsHandler;
        var buildNewsSlider = function(){
        	var newsItemHeight = $(".news").find(".slide li").height();
	        var newsItemCount = $(".news").find(".slide li").length;
	        $(".news").find(".slide").height(newsItemHeight);
	        $(".news .controls .next").on('click', function() {
	            var $newsElement = $(this).closest(".news");
	            var current = $newsElement.data('current') || 0;
	            current++;
	            current = current % newsItemCount;
	            $newsElement.find(".slide li").css("top", -newsItemHeight * current + "px");
	            $newsElement.data('current', current);
	        });
	        $(".news .controls .prev").on('click', function() {
	            var $newsElement = $(this).closest(".news");
	            var current = $newsElement.data('current') || 0;
	            current = current == 0 ? newsItemCount : current;
	            current--;
	            current = current % newsItemCount;
	            $newsElement.find(".slide li").css("top", -newsItemHeight * current + "px");
	            $newsElement.data('current', current);
	        });

	        newsHandler = window.setInterval(function() {
	            var $newsElement = $('.news');
	            var current = $newsElement.data('current') || 0;
	            current++;
	            current = current % newsItemCount;
	            $newsElement.find(".slide li").css("top", -newsItemHeight * current + "px");
	            $newsElement.data('current', current);
	        }, 3000);
        }
        
        buildNewsSlider();

        $(window).on('resize', function() {
            clearInterval(newsHandler);
            buildNewsSlider();
        });
    });
})(jQuery);
