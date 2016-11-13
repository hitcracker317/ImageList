$(function(){

	var imageList = $(".image-list");
	var loadNumber = 12;
	var thumbnailArrayLength;
	var beforeImageContentLength;
	var afterImageContentLength;
	var isLoadingState;

	getJson();

	$(".more__button").click(function(){
		//さらに表示のボタンを押すと続きが見える
		if(isLoadingState) {
			return false;
		}
		getJson();
	});


	function getJson(){
		//ローディングアニメーション表示
		showLoading();

		$.ajax({
			type: 'GET',
			url: 'json/images.json',
			dataType: 'json',
			success: function(data){
				if($(".error").length){
					$(".error").remove();
				}

				var thumbnailArray = data[0].thumbnail;
				thumbnailArrayLength = thumbnailArray.length;
				beforeImageContentLength = imageList.children().length;
				afterImageContentLength = beforeImageContentLength + loadNumber;
				makeImageDom(thumbnailArray);
			},
			error: function (){
				appearErrorMessage();
				hideLoading();
			},
			complete: function(){
				hideLoading();
			}
		});
	}

	function makeImageDom(thumbnailArray) {
		//画像のDOMを生成
		for (var i = beforeImageContentLength; i < afterImageContentLength; i++){

			var imageContent = $("<div class='image-list__content'><a href='#' class='image-link'><img src='' alt='' class='image-link__img'></a></div>");

			//imageを設置
			var imagePath = thumbnailArray[i];
			var imageElement = imageContent.find(".image-link__img");
			imageElement.attr("src",imagePath);
			imageElement.ajustImage();

			//DOM追加
			imageList.append(imageContent);
			imageContent.css("opacity","0").velocity({
				"opacity":"1"
			},{
				durtion: 500,
				easing: "ease-in"
			});

			beforeImageContentLength = imageList.children().length;

			if(beforeImageContentLength == thumbnailArrayLength) {
				//全部の画像を表示したら、もっとみるボタンは非表示
				$(".more__button").css("display","none");
			}
		}
	}

	function showLoading() {
		isLoadingState = true;
		$(".more > div").addClass("more__button_loading");
		$(".more__text").text("Loading...");
	}
	function hideLoading() {
		isLoadingState = false;
		$(".more > div").removeClass("more__button_loading");
		$(".more__text").text("More");
	}
	function appearErrorMessage() {
		if(!$(".error").length){
			var errorMessage = $("<div class='error'><p class='error__message'>画像を取得できませんでした</p></div>");
			$(".image-list").append(errorMessage);
		}
	}
});
