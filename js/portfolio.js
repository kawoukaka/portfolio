$(function() {
	
	/*for (var i=1;i<10;i++)
	{
		var s="#tabs #tab";
		$(s+i).css('z-index',10-parseInt($(s+i).attr("id").substr(3,1)));
	}

	var is_animating;
	var thisTab = "tab1";
	var isFirst = true;
	setup($(".folder-pic"), $(".folder-pic").find("img").eq(0).attr("src"),"800","500");

	$('#tabs #tab1').animate({
		top:"-30"
	},500,function(){});
	$('#tab1').css("z-index",parseInt($('#tabs #tab1').css("z-index"))+2);

	//followDiv("0", $(".folder-pic").find('.image img'));
	showInfo("0");
	$('#tabs li').click(function (e) {

        e.preventDefault();
        
		if($(this).attr("id")!= thisTab)
		{
			$("#" + thisTab).animate({
					top:"0"
				},500,function(){});
				$("#" + thisTab).css("z-index",parseInt($("#" + thisTab).css("z-index"))-2);

			$(this).animate({
				top:"-30"
			},500,function(){});
			$(this).css("z-index",parseInt($(this).css("z-index"))+2);

			paralellImg($(".folder-pic"), $(".folder-pic").find("img").eq(parseInt($(this).attr("id").substr(3,1))-1), parseInt($(this).attr("id").substr(3,1))-1, "800", "500", isFirst, is_animating) ;
			isFirst=false;
			
			//$(".folder-pic-img").attr("src", ary[parseInt($(this).attr("id").substr(3,1))-1]);
			//$(".old-folder-pic-img").attr("src", ary[parseInt($(this).attr("id").substr(3,1))-1]);
			//$(".old-folder-pic-img").imageMask("img/portfolio/folderBack.png");
			//$(".folder-pic-img").imageMask("img/portfolio/folderBack.png");
			
		}
		
		thisTab = $(this).attr("id");
	})

	function addBoxClone(imgDiv, box_clone)
	{
		imgDiv.find('.container_skitter').append(box_clone);

	}

	function getBoxClone(msrc)
	{
		var img_clone = $('<img src="'+ msrc +'" />');
			
		var box_clone = $('<div class="box_clone"></div>');
		box_clone.append(img_clone);

		return box_clone;
	}
		
	// Get box clone
	function getBoxCloneImgOld(image_old)
	{
		var img_clone = $('<img src="'+image_old+'" />');
			
		var box_clone = $('<div class="box_clone"></div>');
		box_clone.append(img_clone);
		return box_clone;
	}

	function finishAnimation(imgDiv,imgID, msrc) 
	{
		imgDiv.find('.image_main').show();
		is_animating = false;
		imgDiv.find('.image_main').attr('src', msrc);
		showInfo(imgID);
		//followDiv(imgID, imgDiv.find('.box_clone'));
		//imgDiv.find('.image_main').imageMask("img/portfolio/folderBack.png");
	}
	function setup(imgDiv,isrc,imgWidth,imgHeight)
	{
		var structure =  	 	'<div class="container_skitter">'
										+ '<div class="image">'
											+ '<img class="image_main" />'
										+ '</div>'
									+ '</div>';

		

		imgDiv.append(structure);
		is_animating=false;
		imgDiv.find('.container_skitter').width(imgWidth);
		imgDiv.find('.container_skitter').height(imgHeight);
		imgDiv.fadeIn();
		imgDiv.find('.image img').attr({'src': isrc});
	}
	function paralellImg(imgDiv, imgSrc, imgID, imgWidth, imgHeight, isFirst, is_animating){
		
		if(is_animating==false)
		{
			
			var velocity = 1;
			var is_animating = true;
			var easing_old = 'easeInOutQuad';
			var easing_new = 'easeOutQuad';
			var time_animate = 400 / velocity;
			
			imgDiv.find('.box_clone').stop();
			imgDiv.find('.box_clone').remove();

			if(isFirst)
			{
				var image_old = imgSrc.attr('src');
			}
			else
			{
				var image_old = imgDiv.find('.image_main').attr('src');
			}

			imgDiv.find('.image_main').attr('src', imgSrc.attr('src'));
			imgDiv.find('.image_main').hide();
				
			var total 			= 2;
			var width_box 		= imgWidth;
			var height_box 		= Math.ceil(imgHeight / total);

			// Old image
			var box_clone1 = getBoxCloneImgOld(image_old), box_clone2 = getBoxCloneImgOld(image_old);
			box_clone1.find('img').css({left:0, top:0});
			box_clone1.css({top:0, left:0, width:width_box, height:height_box});

			box_clone2.find('img').css({left:0, top:-height_box});
			box_clone2.css({top:height_box, left:0, width:width_box, height:height_box});

			// Next image
			var box_clone_next1 = getBoxClone(imgSrc.attr('src')), box_clone_next2 = getBoxClone(imgSrc.attr('src'));
			box_clone_next1.find('img').css({left:0, top:height_box});
			box_clone_next1.css({top:0, left:0, width:width_box, height:height_box});

			box_clone_next2.find('img').css({left:0, top: -(height_box * total) });
			box_clone_next2.css({top:height_box, left:0, width:width_box, height:height_box});

			// Add boxes
			addBoxClone(imgDiv, box_clone_next1);
			addBoxClone(imgDiv, box_clone_next2);
			addBoxClone(imgDiv, box_clone1);
			addBoxClone(imgDiv, box_clone2);

			// Show boxes
			box_clone1.show();
			box_clone2.show();
			box_clone_next1.show();
			box_clone_next2.show();

			// Callback
			var callback = function() { finishAnimation(imgDiv,imgID,imgSrc.attr('src')); };

			// Animations
			box_clone1.find('img').animate({ top: height_box }, time_animate, easing_old, function() {
				box_clone1.remove();
			});
			box_clone2.find('img').animate({ top: -(height_box * total) }, time_animate, easing_old, function() {
				box_clone2.remove();
			});
			box_clone_next1.find('img').animate({ top: 0 }, time_animate, easing_new);
			box_clone_next2.find('img').animate({ top: -height_box }, time_animate, easing_new, callback);

			
		}
		
	}
	function showInfo(id)
	{
		
		if($(".infobg").length)
		{
			$(".infobg").remove();
		}
		$(".folder").append("<div class='infobg'><div class='infotext'>"+$(".folder-info").find('div').eq(id).html()+"</div></div>");

		$(".infobg")
		.css("position","absolute")
		.css("left","60%")
		.css("margin-left","130px")	
		.css("top","30%");

		$('.infotext p').textillate({ in: { effect: 'fadeInLeftBig' } });
	}
	/*function followDiv(id, divtarget)
	{
		for(var i=0;i<$(".folder-info").find('div').length;i++)
		{
			if(id!=i)
			{
				$(".folder-info").find('div').eq(i).hide();
			}
		}

		var xOffset = 30;
		var yOffset = 30;

		
		divtarget.hover(function(e){

			if($(".infobg").length)
			{
				$(".infobg").remove();
			}
			$("body").append("<div class='infobg' style='width:120px;height:120px;'><div class='infotext'>"+$(".folder-info").find('div').eq(id).text()+"</div></div>");

			$(".infobg")
			.css("background-image","url('img/portfolio/infoback.png')")
			.css("z-index","1000")
			.css("position","absolute");

			$(".infotext")
			.css("color","#fff")
			.css("margin-top",(parseInt($(".infobg").css("height")) - parseInt($(".infotext").css("height")))/2)
			.css("margin-left", (parseInt($(".infobg").css("width")) - parseInt($(".infotext").innerWidth()))/2);

			$(".infobg")
			.css("top",(e.pageY - xOffset) + "px") 
			.css("left",(e.pageX + yOffset) + "px")
			.fadeIn("slow");
		}, 
		function(){ 
			$(".infobg").fadeOut("fast"); 
		}); 

		divtarget.mousemove(function(e){

			$(".infobg")
			.css("top",(e.pageY - xOffset) + "px") 
			.css("left",(e.pageX + yOffset) + "px"); 

		}); 

		
	}*/

});

