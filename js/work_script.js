//01.스크립트 위로 튕기는것
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});
//preventDefault 는 기본으로 정의된 이벤트를 작동하지 못하게 하는 메서드입니다
//02.splitting.js
$(function(){
    Splitting();  //대문자로쓴다!!!
  });
$(function() {
    $('.animate').scrolla({
        mobile: true, //모바일버전시 활성화
        once: false //스크롤시 딱 한번만 하고싶을땐 true
    });
}); 



$(function() {
    $('header .gnb li .contact').on('click', function() {
        var top = $('#footer').offset().top;
        $('html, body').animate({ scrollTop: top }, 400 );
        
        $('header .gnb li span').addClass('active');
        $('header .gnb li .contact').siblings().find('span').removeClass('active');
        $('header .gnb li .contact').addClass('active');
        $('header .gnb li .contact').siblings().removeClass('active');
    });     
});






$(function(){
    gsap.registerPlugin(ScrollTrigger);

//06.con03 listBox 카드애니메이션
    gsap.utils.toArray('.project .listBox li').forEach((selector, t) => {
        ScrollTrigger.create({ //독립적으로 ScrollTrigger 등록함
            trigger: selector,
            start: '30% 50%',
            onEnter: ()=> {
                gsap.set(selector, {
                    rotationX: '-65deg',
                    z: '-500px',
                    opacity: 0
                }),
                gsap.to(selector, {
                    rotationX: 0,
                    z: 0,
                    opacity: 1,
                    delay: t % 3 * .05 // % 3으로 나눈 나머지 값
                })
            },
            // markers: true
        })
    })
});
