var tabWidth = 735;
var isSpSize = false;


$(function(){
	function checkDeviceSize() {
		if ($(window).width() <= tabWidth){
			return true;
		}	
	} 

	isSpSize = checkDeviceSize();
	if(isSpSize){
		spDomStracture();
	} else {
		pcDomStracture();
	}


	$(window).resize(function() {
		isSpSize = checkDeviceSize();
		if(isSpSize){
			spDomStracture();
		} else {
			pcDomStracture();
		}
	});


	function spDomStracture(){
		//SP表示時のDOM構造構築
		$(".profile__info").prependTo("article");
		$(".profile__description").prependTo("article");
		$("header").prependTo("article");
		$(".account__button_wrapper").appendTo(".header__profile");
	}
	function pcDomStracture(){
		//PC表示時のDOM構造構築
		$(".profile_account").appendTo(".header__profile");
		$(".profile__info").appendTo(".header__profile");
		$(".profile__description").appendTo(".header__profile");
		$(".account__button_wrapper").appendTo(".profile__account");
	}
});