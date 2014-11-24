/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin

//--------------------------------
//图片预加载
//  arr：可以是存放图片路径的一个数组，也可以是选取到的img的jquery对象；
//  funLoading：每一个单独的图片加载完成后执行的操作；
//  funOnLoad：全部图片都加载完成后的操作；
//  funOnError：单个图片加载出错时的操作。
function loadimg(arr, funLoading, funOnLoad, funOnError){  
    var numLoaded=0,  
    numError=0,  
    isObject=Object.prototype.toString.call(arr)==="[object Object]" ? true : false;  
   
    var arr=isObject ? arr.get() : arr;  
    for(a in arr){  
        var src=isObject ? $(arr[a]).attr("data-src") : arr[a];  
        preload(src,arr[a]);  
    }  
   
    function preload(src,obj){  
        var img=new Image();  
        img.onload=function(){  
            numLoaded++;  
            funLoading && funLoading(numLoaded,arr.length,src,obj);  
            funOnLoad && numLoaded==arr.length && funOnLoad(numError);  
        };  
        img.onerror=function(){  
            numLoaded++;  
            numError++;  
            funOnError && funOnError(numLoaded,arr.length,src,obj);  
        }  
        img.src=src;  
    }  
}

$(function() {
	$("#page-content").hide();
	var ary = [
		"img/portfolio/jaguarlogo.jpg",
		"img/portfolio/jaguar/jaguar1.jpg",
		"img/portfolio/jaguar/jaguar2.jpg",
		"img/portfolio/jaguar/jaguar3.jpg",
		"img/portfolio/starbuckslogo.jpg",
		"img/portfolio/starbucks/starbucks1.jpg",
		"img/portfolio/starbucks/starbucks2.jpg",
		"img/portfolio/chivaslogo.jpg",
		"img/portfolio/chivas/chivas1.jpg",
		"img/portfolio/chivas/chivas2.jpg",
		"img/portfolio/chivas/chivas3.jpg",
		"img/portfolio/ikealogo.jpg",
		"img/portfolio/ikea/ikea1.jpg",
		"img/portfolio/ikea/ikea2.jpg",
		"img/portfolio/rccllogo.jpg",
		"img/portfolio/rccl/rccl1.jpg",
		"img/portfolio/rccl/rccl2.jpg",
		"img/portfolio/rccl/rccl3.jpg",
		"img/portfolio/hvsoplogo.jpg",
		"img/portfolio/hvsop/hvsop1.jpg",
		"img/portfolio/hvsop/hvsop2.jpg",
		"img/portfolio/hvsop/hvsop3.jpg",
		"img/portfolio/luxlogo.jpg",
		"img/portfolio/lux/lux1.jpg",
		"img/portfolio/lux/lux2.jpg",
		"img/portfolio/lux/lux3.jpg",
		"img/portfolio/volkswagenlogo.jpg",
		"img/portfolio/touran/touran1.jpg",
		"img/portfolio/touran/touran2.jpg",
		"img/portfolio/touran/touran3.jpg",
	];
	
	loadimg(ary, null, start);
});
function start(errors) {
		//褪去loading
		
		$( "#loading" ).animate({
			opacity: 0,
			}, 600, function() {$("#loading").css("display","none");$("#loading").remove();
  		});
		//初始显示
		$("#page-content").show();
;		
}

$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});