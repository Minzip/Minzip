//01.스크립트 위로 튕기는것
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});
//preventDefault 는 기본으로 정의된 이벤트를 작동하지 못하게 하는 메서드입니다

//02.cicleBox SVG애니메이션 path 길이 구하기
$(function(){
    $('.svgAni').find('path').each(function(i, path){    //.svgAni의 하위요소인 path를 찾아서
        const length = path.getTotalLength();
        //alert(length);
    })     
})

//03.햄버거메뉴
$(function(){
    $('.menuOpen button.open').on('click', function(){
        $('.menuOpen .menuWrap').addClass('on');
    });
    $('.menuOpen .menuWrap .close').on('click', function(){
        $('.menuOpen .menuWrap').removeClass('on');
    })
});

//04.scrolla.js
$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
	});    
      });

//05.span.bar
$(function(){
    $('.gnb li a').on('mouseenter focus', function(){
        let bar = $(this).position().left;
        let widNum = $(this).width();
        $('.mainMenu .bar').css({'left':bar + 'px','width':widNum + 'px','opacity':'1'});
    });
    $('.gnb li a').on('mouseleave', function(){
        $('.mainMenu .bar').css({'left':0,'width':0,'opacity':0})
    })
});

//06.배경색 변경
$(window).on('scroll resize', function(){
    let scrollTop = $(document).scrollTop();
    bgColor();

    function bgColor() {
        if(scrollTop > 1400){
            $('body').addClass('on')
        }else{
            $('body').removeClass('on')
        }
        if(scrollTop > 2700){
            $('body').removeClass('on')
        }
    }
})