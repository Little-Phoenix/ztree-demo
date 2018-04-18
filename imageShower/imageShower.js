(function($){
  var htmls = {
    'imgbg' : '<div class="img-bg"></div>',
    'img': '<img class="img"/>'
  }

  var winpop = function(opt, callback) {
    var defaults = {
      width: '500px'
    }

    this.options = $.extend({}, defaults, opt);
    this.$body = $("body");

    this.$imgbg = $(".img-bg").length ? $(".img-bg").removeClass('div-hide') : $(htmls.imgbg);
    this.$img = $(".img").length ? $(".img") : $(htmls.img);
    this.$img.attr('src', this.options.src)
             .attr('style', "width: " + this.options.width);
    var that = this;
    this.$imgbg.append(this.$img)
               .bind('click', function(event){
                 if(event.target.nodeName !== 'IMG') {
                   that.$imgbg.addClass('div-hide')
                 }
               });
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
    colseclick: function() {
      console.log('colse');
    }

  }

  window.winpop = winpop;
})(jQuery)
