(function($){
  $.fn.ajustImage = function() {

    var originalImage = new Image();
    originalImage.src = this.attr("src");
    var originalImageWidth = originalImage.width;
    var originalImageHeight = originalImage.height;

    if (originalImageWidth >= originalImageHeight) {
      //横長の画像
      $(this).css({
        "width": "auto",
        "height": "100%"
      });

    } else {
      //縦長の画像
      $(this).css({
        "width": "100%",
        "height": "auto"
      });
    }
  };
})(jQuery);
