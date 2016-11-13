(function($){
  $.fn.ajustImage = function(options) {

    var settings = $.extend( {
      'imagePath' : 'image'
    }, options);

    var originalImage = new Image();
    originalImage.src = settings.imagePath;
    var originalImageWidth = originalImage.width;
    var originalImageHeight = originalImage.height;

    if (originalImageWidth >= originalImageHeight) {
      //横長の画像
      $(this).css({
        "width": "auto",
        "height": "100%"
      });

    } else if(originalImageWidth <= originalImageHeight) {
      //縦長の画像
      $(this).css({
        "width": "100%",
        "height": "auto"
      });
    }
  };
})(jQuery);
