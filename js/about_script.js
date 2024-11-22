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






// 배경색 변경 
$(function(){
    gsap.registerPlugin(ScrollTrigger);
    //01.배경컬러번경
    gsap.timeline({
        scrollTrigger:{
            trigger:'.strengths',
            start:'0% 80%',
            end:'100% 100%',
            scrub:1
        }
    })
    .to('.wrap', {backgroundColor:"#030303", color:"#fff", ease:"none", duration: 5}, 0)
    .to('.logo path',{stroke:"#555", ease:"none", duration:5}, 0)
    .to('.logo p',{color:"#fff", ease:"none", duration:5}, 0)
    .to('.gnb', {color:"#fff", ease:"none", duration:5}, 0);
});




// love
$(function(){
    gsap.timeline({
        scrollTrigger:{
            trigger: '.love',
            start:'10% 50%',
            end: '10% 0%',
            scrub:1,
            //markers: true
        }
    })
    
    .fromTo('.love .title2 .c', {x:'-100%'},{x:'0%', ease:'none', duration:5},0)
    .fromTo('.love .title2 .d', {x:'100%'},{x:'0%', ease:'none', duration:5},0)
    
    
    //05.workList
    //start/end 타이밍 맞춘 기준 : MY WORK 글씨가 화면 중앙에 오고, .workList가 올라오는 시작과 동시에 애니가 끝남.
    
        gsap.timeline({
            scrollTrigger:{
                trigger:'.listBox1',
                start: '0% 100%',
                end:'0% 100%',
                scrub:1,
                //markers:true
            }
        })
        .to('.wrap', {backgroundColor: '#fff', color:'#000',ease:'none', duration:5},0)
        .to('.logo path',{stroke:"#b9dc5f", ease:"none", duration:5}, 0)
        .to('.logo p',{color:"#333", ease:"none", duration:5}, 0)
        .to('.gnb', {color:"#333", ease:"none", duration:5}, 0)
        .to('.love .title2', {position:'fixed', ease:'none', left:0,top:0, width:"100%", duration:5},0)
        .fromTo('.listBox1',{margin:'0 auto'} ,{margin:'100vh auto 0', position:'relative',zIndex:10, duration:1},0)
        
        //.workList가 끝날 때 .title 글자가 화면 밖으로 사라지도록 애니 적용
            gsap.timeline({
                scrollTrigger: {
                    trigger: '.listBox1',
                    start: '10% 10%',
                    end: '100% 0%',
                    scrub: 1,
                    //markers: true
                }
            })
            .to('.love .title2 .c', {x: '-100%', ease: 'none', duration: 5},0)
            .to('.love .title2 .d', {x: '100%', ease: 'none', duration: 5},0)




            gsap.timeline({
                scrollTrigger:{
                    trigger: '.love',
                    start:'30% 40%',
                    end: '10% 0%',
                    scrub:1,
                    //markers: true
                }
            })
            
            .fromTo('.love .title3 .e', {x:'-100%'},{x:'0%', ease:'none', duration:5},0)
            .fromTo('.love .title3 .f', {x:'100%'},{x:'0%', ease:'none', duration:5},0)
            
            
            //05.workList
            //start/end 타이밍 맞춘 기준 : MY WORK 글씨가 화면 중앙에 오고, .workList가 올라오는 시작과 동시에 애니가 끝남.
            
                gsap.timeline({
                    scrollTrigger:{
                        trigger:'.listBox1',
                        start: '0% 100%',
                        end:'0% 100%',
                        scrub:1,
                        //markers:true
                    }
                })
                .to('.love .title3', {position:'fixed', ease:'none', left:0,top:0, width:"100%", duration:5},0)
                .fromTo('.listBox1',{margin:'0 auto'} ,{margin:'100vh auto 0', position:'relative',zIndex:10, duration:1},0)
                
                //.workList가 끝날 때 .title 글자가 화면 밖으로 사라지도록 애니 적용
                    gsap.timeline({
                        scrollTrigger: {
                            trigger: '.listBox1',
                            start: '45% 15%',
                            end: '100% 50%',
                            scrub: 1,
                            //markers: true
                        }
                    })
                    .to('.love .title3 .e', {x: '-100%', ease: 'none', duration: 2},0)
                    .to('.love .title3 .f', {x: '100%', ease: 'none', duration: 2},0)




                    gsap.timeline({
                        scrollTrigger:{
                            trigger: '.love',
                            start:'45% 20%',
                            end: '10% 0%',
                            scrub:1,
                            //markers: true
                        }
                    })
                    
                    .fromTo('.love .title4 .g', {x:'-100%'},{x:'0%', ease:'none', duration:5},0)
                    .fromTo('.love .title4 .h', {x:'100%'},{x:'0%', ease:'none', duration:5},0)
                    
                    
                    //05.workList
                    //start/end 타이밍 맞춘 기준 : MY WORK 글씨가 화면 중앙에 오고, .workList가 올라오는 시작과 동시에 애니가 끝남.
                    
                        gsap.timeline({
                            scrollTrigger:{
                                trigger:'.listBox1',
                                start: '0% 100%',
                                end:'0% 100%',
                                scrub:1,
                                //markers:true
                            }
                        })

                        .to('.love .title4', {position:'fixed', ease:'none', left:0,top:0, width:"100%", duration:5},0)
                        .fromTo('.listBox1',{margin:'0 auto'} ,{margin:'100vh auto 0', position:'relative',zIndex:10, duration:1},0)
                        
                        //.workList가 끝날 때 .title 글자가 화면 밖으로 사라지도록 애니 적용
                            gsap.timeline({
                                scrollTrigger: {
                                    trigger: '.listBox1',
                                    start: '80% 30%',
                                    end: '100% 0%',
                                    scrub: 1,
                                    //markers: true
                                }
                            })
                            .to('.love .title4 .g', {x: '-100%', ease: 'none', duration: 5},0)
                            .to('.love .title4 .h', {x: '100%', ease: 'none', duration: 5},0)
    })
    
    
    



// 배경색 변경 
$(function(){
    gsap.registerPlugin(ScrollTrigger);
    //01.배경컬러번경
    gsap.timeline({
        scrollTrigger:{
            trigger:'.footer',
            start:'0% 80%',
            end:'100% 100%',
            scrub:1
        }
    })
    .to('.logo path',{stroke:"#555", ease:"none", duration:5}, 0)
    .to('.logo p',{color:"#fff", ease:"none", duration:5}, 0)
    .to('.gnb', {color:"#fff", ease:"none", duration:5}, 0);
});