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
