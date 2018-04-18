function ImageShower() {
  var $imageShower = $("<div>").addClass('img-bg');
  var $img = $("<img>").addClass('img');


  this.init = function(src, width) {
    $img.attr('src', src)
        .attr('style', 'width:' + width + 'px');
  }

  $imageShower.append($img)

  return $imageShower;
}


(function($){
  var htmls = {
    'imgbg' : '<div class="img-bg"></div>',
    'img': '<img/>'
  }

  var winpop = function(opt, callback) {
    var defaults = {

    }

    this.options = $.extend({}, defaults, opt);
    this.$body = $("body");

    this.$imgbg = $(htmls.imgbg);

    this.$body.append(this.$imgbg);

    if(callback != 'undefined') {
      if(typeof callback == 'function') {
        this.callback = callback;
      }
    } else {
      throw new Error('callback need function')
    }

  };


  winpop.prototype = {
    createdom: function (ele) {

    },

    colseclick: function() {

    }

  }

  window.winpop = winpop;
})(jQuery)
