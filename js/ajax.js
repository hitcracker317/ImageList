$(function(){

	var imageList = $(".image-list");
	var loadNumber = 12;
	var thumbnailArrayLength;
	var beforeImageContentLength;
	var afterImageContentLength;

	getJson();

	$(".more__button").click(function(){
		//さらに表示のボタンを押すと続きが見える
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
				var thumbnailArray = data[0].thumbnail;
				thumbnailArrayLength = thumbnailArray.length;
				beforeImageContentLength = imageList.children().length;
				afterImageContentLength = beforeImageContentLength + loadNumber;
				makeImageDom(thumbnailArray);
			},
			error: function (){
				alert("画像を取得できませんでした");
			},
			complete: function(){
				console.log("通信終了！");
				//ローディングアニメーション削除
			}
		});
	}

	function makeImageDom(thumbnailArray) {
		//画像のDOMを生成
		for (var i = beforeImageContentLength; i < afterImageContentLength; i++){

			var imageContent = $("<div class='image-list__content'><a href='#' class='image-link'><img src='' alt='' class='image-link__img'></a></div>");

			//image要素配置
			var imagePath = thumbnailArray[i];
			imageContent.find(".image-link__img").attr("src",imagePath);

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

	}
});
