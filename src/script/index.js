!function ($) {
    //1.二级侧边栏效果
    let $menuli = $('.menu li');
    let $cartlist = $('.cartlist');
    let $items = $('.cartlist .item');

    $menuli.on('mouseover', function () {
        $(this).addClass('active').siblings('li').removeClass('active');
        $cartlist.show();
        // console.log($(window).scrollTop());
        // console.log($('.banner').offset().top);


        if ($(window).scrollTop() > $('.banner').offset().top) {
            $cartlist.css({
                top: $(window).scrollTop() - $('.banner').offset().top
            })
        } else {
            $cartlist.css({
                top: 0
            })
        }
        $items.eq($(this).index()).show().siblings('.item').hide();
    });
    $menuli.on('mouseout', function () {
        $menuli.removeClass('active');
        $cartlist.hide();
    });
    $cartlist.on('mouseover', function () {
        $(this).show();
    });
    $cartlist.on('mouseout', function () {
        $(this).hide();
    });


    //2.根据本地存储，显示用户信息
    if (localStorage.getItem('username')) {
        $('.login').hide();
        $('.admin').show();
        $('.admin span').html(localStorage.getItem('username'));
    }

    $('.admin a').on('click', function () {
        $('.login').show();
        $('.admin').hide();
        localStorage.removeItem('username');
    });


    class Lunbo{
        constructor(){
            this.lunbo = $('.lunbo');
            this.picul = $('.lunbo ul');
            this.picli = this.picul.children();
            this.btnli = $('.lunbo ol li');
            this.leftarrow = $('.left');
            this.rightarrow = $('.right');
            this.index = 0;
            this.timer = null;
        }
        init(){
            let _this = this;
            this.btnli.on('click',function(){
                _this.index = $(this).index();
                _this.tabswitch();
            })
            this.rightarrow.on('click',function(){
                _this.rightevent();
            });
            this.leftarrow.on('click',function(){
                _this.leftevent();
            })
            this.timer = setInterval(function(){
                _this.rightarrow.click();
            },2000);
           this.lunbo.hover(function(){
               clearInterval(_this.timer)
           },function(){
               this.timer = setInterval(function(){
                   _this.rightarrow.click();
               },2000)
           })
    
        }
    
        tabswitch(){
            this.btnli.eq(this.index).addClass('active').siblings('ol li').removeClass('active');
            this.picli.eq(this.index).animate({
                opacity:1
            }).siblings('ul li').animate({
                opacity: 0
            })
        }
        rightevent(){
            this.index++;
            if(this.index > this.btnli.length - 1){
                this.index = 0;
            }
            this.tabswitch();
        }
        leftevent(){
            this.index--;
            if(this.index < 0){
                this.index = this.btnli.length - 1;
            }
            this.tabswitch()
        }
    }
    
    new Lunbo().init();
    






    var flaglou = true;
  $(window).scroll(function () {
    if (flaglou) {
      var st = $(window).scrollTop();

      if (st >= $(".seckill").offset().top) {
        $(".louceng").show();
        $(".shangbu").show();
        $(".xiabu").show();
      } else {
        $(".louceng").hide();
        $(".shangbu").hide();
        $(".xiabu").hide();
      }

      $(".allshop").each(function (i, val) {
        if (st >= $(this).offset().top - 200) {
          $(".louceng li").eq(i).addClass("hover").siblings("li").removeClass("hover");
        }
      });
    }
  });
}(jQuery);


