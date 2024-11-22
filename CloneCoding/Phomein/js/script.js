'use strict';

//1. fullpage
$(function() {
   $('#fullpage').fullpage({
      fingersonly: true, 
      anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage', 'seventhPage'],
      menu: '.rightNav',
        afterLoad: function(anchorLink, index){
         if(index == 2){ //두번째 페이지에 카운트업
            $('.count').counterUp({delay: 10,time: 550});
         }
         if(index == 3){ //세번째 페이지에 카운트업
            $('.count2').counterUp({delay: 10,time: 550});
         }
      }
   });
});

//2. gnb
$(function(){
   setGnb();

   function setGnb() {
      $('.innerHeader .gnb > li > a').on('mouseenter focus', function(){
         $('.innerHeader').addClass('on');
         $('.innerHeader .gnb > li .inner').addClass('on');
         $('header').css({'border':'none'})
      });
      $('header').on('mouseleave', function(){
         $('.innerHeader').removeClass('on');
         $('.innerHeader .gnb > li .inner').removeClass('on');
         $('header').css({'border-bottom':'1px solid rgba(255,255,255,0.3)'});
      })
   }
})

// 3.slide
//script.js파일 수정
$(function(){
   $('.visual').slick({
      arrows: false,  //화살표
      dots: true, //인디케이트 해제
      fade: true,//페이드효과
      autoplay:true, //자동재생
      autoplaySpeed: 2800, //재생시간
      pauseOnHover: false,
      pauseOnFocus: false,
      customPaging: function(slider, i) {
         var tit = $(slider.$slides[i]).find('.dot').html(); // html .dot 에 써준 내용을 dots에 넣을것임 
         return '<div class="pager-tit" class=' + i + '>'+ tit + '</div>';  // 슬라이드 인덱스 의 내용(변수 tit)을 pager-tit 클래스로 반환
      }   
  });
});