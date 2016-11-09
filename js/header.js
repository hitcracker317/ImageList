var tabWidth = 735;

$(function(){

	if ($(window).width() <= tabWidth){
			//tablet,sp時の振る舞い

			//TODO:headerのDOMの構造を入れ替える
			//TODO:735px以下の際の専用のスタイルを付与する
			$("#header").css("background-color","#f00");
		}
		
	
});