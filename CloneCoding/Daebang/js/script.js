// 1. 스크립트
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

//2. gnb
$(function(){
    $('.gnb > li > a').on('mouseenter focus', function(){
        let gnbindex = $('.gnb > li > a').index($(this));
        $('.gnb .inner').removeClass('on');
        $('.gnb .inner:eq('+ gnbindex +')').addClass('on');
    });
    $('header').on('mouseleave', function(){
        $('.gnb .inner').removeClass('on');
    });
});

// 3. fixheader
let scrollFix = 0;

$(window).on('scroll', function(){
    scrollFix = $(document).scrollTop();
    fixHeader();
})

function fixHeader() {
    if(scrollFix > 150) {
        $('Header').addClass('on');
    } else {
        $('header').removeClass('on');
    }
}


// slick.js 연결
$(function(){
    $('.visual .slide').slick({
       arrows: true,  //화살표
       dots: true, //인디케이트는 처음에 false로 작성하고 arrows를 css적용한 후 true로 바꿔준다.
       fade: true,//페이드효과
       autoplay:true, //자동재생
       autoplaySpeed: 4000, //재생시간
       pauseOnHover: false,
       pauseOnFocus: false   
   });
   $('.slick-prev').text("prev")





  //두번째 슬라이드
    $('.slide2').slick({
        arrows: false,  //화살표
        dots: true, //인디케이트는 처음에 false로 작성하고 arrows를 css적용한 후 true로 바꿔준다.
        slidesToShow:2,
        slideToScroll:1,
        autoplay:true, //자동재생
        infinite:true,
        autoplaySpeed: 6000, //재생시간
        pauseOnHover: false,
        pauseOnFocus: false 
    });
        $('.slide2 #slick-slide-control10').text("서울 마곡지구 업무 용지")
        $('.slide2 #slick-slide-control11').text("서울 마곡지구 대방디엠시티2차")
        $('.slide2 #slick-slide-control12').text("화성동탄1차 대방디엠시티 더 센텀")
        $('.slide2 #slick-slide-control13').text("광주 수완 대방노블랜드6차")

});

//splitting.js
$(function(){
    Splitting(); //대문자주의
});

// scrolla.js
$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
    });    
    }); 