//创建toast
function toast(message) {
  if ($('.toast')[0]) return;
  var divEle = document.createElement('div');
  divEle.className = 'toast';
  divEle.innerHTML = '<span class="inner">' + message + '</span>';
  document.body.appendChild(divEle);
  setTimeout(function() {
    $(divEle).remove();
  }, 3000);
}
