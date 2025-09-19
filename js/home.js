$(function() {
    var $slider = $('.carousel');
    var $slideContainer = $('.carousel-image-container');
    var $slides = $('.carousel-image');

    var slideWidth = $slides.width();
    var slideHeight = $slides.height();
    var slideCount = $slides.length;
    var totalWidth = slideCount * slideWidth;

    // Frame
    $slider.css({
        width: slideWidth,
        height: slideHeight
    });

    // Container untuk slide
    $slideContainer.css({
        width: totalWidth,
        marginLeft: - slideWidth
    });

    // Left arrow
    $('#left-arrow').on('click',function(){
        $slideContainer.animate({
            left: + slideWidth
        },'slow',
            () =>{
                $('.carousel-image:last-child').prependTo('.carousel-image-container')
                $('.carousel-image-container').css('left','0')
            })
    })

    // Right Arrow
    $('#right-arrow').on('click',function(){
        $slideContainer.animate({
            left: - slideWidth
        },'slow',
            () =>{
                $('.carousel-image:first-child').appendTo('.carousel-image-container')
                $('.carousel-image-container').css('left','0')
            })
    })


    
    // Slide otomatis

    // var currentIndex = 0; // Indeks slide saat ini
    // var intervalTime = 2000; // Waktu interval dalam milidetik (2 detik)
    
    // function showNextSlide() {
    //     currentIndex++;
    //     if (currentIndex >= slideCount) {
    //         currentIndex = 0; // Kembali ke slide pertama
    //     }
        
    //     var newMarginLeft = -slideWidth * currentIndex; // Menghitung margin baru tanpa menambah 1
    //     $slideContainer.animate({ marginLeft: newMarginLeft }, 600); // Animasi perpindahan
    // }
    
    // // Set interval untuk berpindah slide
    // setInterval(showNextSlide, intervalTime);


});
