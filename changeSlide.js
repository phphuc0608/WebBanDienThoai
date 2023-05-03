function doiAnh(imagePath){
    var slides = $('#slide');
    slides.fadeTo(0,0.0);
    slides.attr('src',imagePath);
    slides.fadeTo(1000,1.0);
}
var slideImages = [];
slideImages[0] = "/img/banner/banner.jpeg";
slideImages[1] = "/img/banner/banner2.jpeg";
var currentIndex = 0;
setInterval(function(){
    currentIndex++;
    currentIndex = currentIndex % slideImages.length;
    if(slideImages[currentIndex] == slideImages[0]){
        var change_slide_1 = $('.change_slide_1');
        var change_slide_2 = $('.change_slide_2');
        change_slide_1.css('background-color', '#D4171A');
        change_slide_2.css('background-color', 'gray');
        doiAnh(slideImages[currentIndex]);
    }else if(slideImages[currentIndex] == slideImages[1]){
        var change_slide_1 = $('.change_slide_1');
        var change_slide_2 = $('.change_slide_2');
        change_slide_2.css('background-color', '#D4171A');
        change_slide_1.css('background-color', 'gray');
        doiAnh(slideImages[currentIndex]);
    }
},3000)