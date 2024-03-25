var ImgBox = document.querySelector('.img-box');
var ImgWrap = document.querySelector('.img-wrap');
var OrignalImg = document.querySelector('#orignal-img');
var line = document.querySelector('.arrow');
var leftSpace = ImgBox.offsetLeft;

OrignalImg.style.width = ImgBox.offsetWidth + 'px';

ImgBox.onmousemove = function(e){
    var boxWidth = (e.pageX - leftSpace) + 'px';
    ImgWrap.style.width = boxWidth;
    line.style.left = boxWidth;
}