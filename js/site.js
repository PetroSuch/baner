$('img.btnCancel').click(function() {
    $(this).parents('.wraperAdventBlock, .advertBlock, .help-container').css('display','none')      
    });

    $(".btnCancel").hover(
        function(){
            $('.sprBlContainer').css('filter','none');
        },
        function(){
            $('.sprBlContainer').css('filter','');
        });


    var boolDesktop = false;
    var setTime = [];
    var setInter;
    var windowWidth = $(window).width();


     $(window).resize(function(){
        boolDesktop = window.matchMedia('(min-width: 641px)').matches
        if(boolDesktop){
            $('.help-container').css({'height':$('.sprBlElement').width()})
        }else{
            $('.help-container').css({'height':$('.sprBlElement').height()})
        }

        destroyAll()
        setTime.push(setTimeout(function(){
             BanerOffset =  $('.help-container').offset().top;
             bodyTop = $(window).scrollTop();

            if(bodyTop > BanerOffset-500){
                runBaner()
            }  
        },600))        
    })
     var BanerOffset,
         bodyTop;
    $(document).ready(function(){
         BanerOffset =  $('.help-container').offset().top;
         bodyTop = $(window).scrollTop();

        if(bodyTop > BanerOffset-500  && runBool){
            runBaner()
            runBool = false;
        }
       
    })
    var runBool = true;
    $(window).scroll(function() {
        bodyTop = $(this).scrollTop();
        BanerOffset = $('.help-container').offset().top;
        if(bodyTop > BanerOffset-500  && runBool){
            runBaner()
            runBool = false;
        }
        
    });


    $('.help-container').css({'height':$('.sprBlElement').height()})

    function runBaner() {
        console.log('run')
        $('.sprBlContainer').addClass('m-0')
        $('#img_animaine .pad-4-4').addClass('top')
    
        runDesktop(resortImageDesktop);
        runMobile();    
    }


    function destroyAll(){
        for (var i = 0; i < setTime.length; i++) {
            clearTimeout(setTime[i]);
           
        }
        clearInterval(setInter)
        setTime = [];
        k = 0;
        z_index = 5;
        $('.sprBlContainer').removeClass('m-0');
        $('#img_animaine .pad-4-4').addClass('top');
        $('.last-step').removeClass('last-step');
        $('div.sprBlElement').hide();
        $('.left-center').removeClass('left-center')
        $('.right-center').removeClass('right-center')
        $('#img_animaine .pad-4-4').find('div.sprBlElement__bg ').show()
    }

    var timeInterval = 3000;
    function runDesktop(resortFunction){
        var time = 10;

         setTime.push(setTimeout(function(){
            if (window.matchMedia('(min-width: 641px)').matches){
                time = Desktop(time)
                setTime.push( setTimeout(function(){
                   setInter = setInterval(function(){
                        resortFunction();
                    },timeInterval)
                },time+250))
            }  
        },350))
    }


    function runMobile(){
         if (window.matchMedia('(max-width: 640px)').matches){
            $('#img_animaine .pad-4-4').find('div.sprBlElement__bg ').hide()
            $('#img_animaine .pad-4-4').removeClass('top').delay(1000).find('div.sprBlElement__bg ').css({'z-index':-100})
             Mobile();
        }
    }



    function Desktop(time){
        var el = $('div.sprBlElement');
            el.each(function(k,v){   
            var th = $(this);    
               
                if (k % 2 === 0){
                    setTime.push(setTimeout(function(){
                        th.removeClass('top').show()
                        th.find('.sprBlElement__bg').css({'z-index':1})
                        th.find('.top').removeClass('top')
                    },time))
                }else{
                    setTime.push(setTimeout(function(){
                        th.fadeIn(250)
                    },time))
                }
                 time += 250;
            })
        return time;
    }




    var sort = {"0":[0,1],"1":[0,2],"2":[1,2]};
    var k = 0;
    var z_index = 5;
    var classObj = ['top-a','left-center','right-center']
    function Mobile(){
        var time = 200;
        $('div.sprBlElement').show()
        $('div#img_animaine').each(function(k,v){
            var th = $(this);
            time += 400;
            setTime.push(setTimeout(function(){
                z_index++;
                th.find('.sprBlElement__bg').show()
                if(classObj[k] == 'right-center'){
                    th.find('.sprBlElement__bg').css({"z-index":z_index}).addClass(classObj[k])
                    th.parents('.sprBlContainer').find('.sprBlTitle').delay(400).queue(function(){
                        $(this).css({"z-index":z_index+2}).addClass('last-step').dequeue();
                    });
                }else{
                    th.find('.sprBlElement__bg').addClass(classObj[k]).css({"z-index":z_index})
                }
            },time))
            
        })
    }
    function  resortImageDesktop(){

        k == 3?k=0:'';
        var img1 = $('div#img_animaine').eq(sort[k][0]).find('[data-img]').attr('data-img')
        var img2 = $('div#img_animaine').eq(sort[k][1]).find('[data-img]').attr('data-img')

        var cop1 = $('.sprBlElement__bg[data-img]').eq('0').clone();
        var cop2 = $('.sprBlElement__bg[data-img]').eq('0').clone();

        cop1.css({'background':'url('+img2+')','z-index':z_index})
            .addClass('top-a')
            .attr({'data-img':img2})
            
        cop2.css({'background':'url('+img1+')','z-index':z_index})
                .addClass('top-a')
                .attr({'data-img':img1})
           
        $('div#img_animaine').eq(sort[k][0]).find('div.sprBlElement__bg').attr('old','1')
        $('div#img_animaine').eq(sort[k][1]).find('div.sprBlElement__bg').attr('old','1')

        $('div#img_animaine').eq(sort[k][0]).find('.pad-4-4').prepend(cop1);        
        $('div#img_animaine').eq(sort[k][1]).find('.pad-4-4').prepend(cop2);
        var key = k;
        setTime.push(setTimeout(function(){
             $('div#img_animaine').eq(sort[key][0]).find('div[old]').remove()
             $('div#img_animaine').eq(sort[key][1]).find('div[old]').remove()
        },500))

        z_index++;
        z_index == 100000?z_index=1:'';
        k++;
    }