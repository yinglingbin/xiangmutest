!function($){
        const $form = $('.user_reg');
        const $username = $('.username');
        const $password = $('.password');
        const $repassword = $('.repass');
        const $nats = $('.nameTip');
        const $pwt = $('.pwTip');
        const $rpwt = $('.repwTip');

        let userflag = true;
        let passflag = true;
        let repassflag = true;
        //username
        $username.on('focus',function(){
            $nats.html('中英文均可，最长14个英文或者7个汉字').css({
                color: '#ccc'
            })
        })
        $username.on('blur',function(){
            if($(this).val() !== ''){
                let len = $(this).val().replace(/[\u4e00-\u9fa5]/g, 'aa').length;
                if (len < 14){
                    $.ajax({
                        type:'post',
                        url:'http://localhost/xiangmutest1/php/registy.php',
                        data :{
                            username: $username.val()
                        }
                    }).done(function(result){
                        if(!result){
                            $nats.html('√').css('color','green');
                            userflag = true
                        }else{
                            $nats.html('用户名已经存在').css('color','red')
                            userflag = false;
                        }
                    })
                }else{
                    $nats.html('用户名长度过长').css('color','red')
                    userflag = false;
                }
            }else{
                $nats.html('用户名不能为空').css('color','red');
                userflag = false;
            }
        })
        //password
        $password.on('focus',function(){
            $pwt.html('长度为8~14个字符,至少包含2种字符').css('color','#ccc');

        })
        $password.on('input',function(){
            let $pass = $(this).val();
            if($pass.length >= 8 && $pass.length <= 14){
                let regnum = /\d+/;
                let regupper = /[A-Z]+/;
                let reglower = /[a-z]+/;
                let regother = /[\W\_]+/;
                let $count = 0;
                if(regnum.test($pass)){
                    $count++
                }
                if(regupper.test($pass)){
                    $count++
                }
                if(reglower.test($pass)){
                    $count++
                }
                if(regother.test($pass)){
                    $count++
                }
                switch($count){
                    case 1:
                        $pwt.html('弱').css('color','red');
                        passflag = false;
                        break;
                    case 2:
                    case 3:
                        $pwt.html('中').css('color','orange');
                        passflag = true;
                        break;
                    case 4:
                        $pwt.html('强').css('color','green');
                        passflag = true;
                        break;
                }
            }else{
                $pwt.html('密码长度不符合').css('color','red');
                passflag = false;
            }
        });
        $password.on('blur',function(){
            if($(this).val() !== ''){
                if(passflag){
                    $pwt.html('√').css({
                        color:'green'
                    })
                    passflag = true;
                }
            }else{
                $pwt.html('密码不能为空').css({
                    color:'red'
                }) 
                passflag = false   
            }
        })
        //repassword
        $repassword.on('focus',function(){
            $rpwt.html('长度为8~14个字符,至少包含2种字符').css('color','#ccc');

        })
        $repassword.on('blur',function(){
            if($(this).val() === $password.val()){
                $rpwt.html('√').css('color','green');
                repassflag = true;
            }
            if($(this).val() === ''){
                $rpwt.html('确认密码不能为空').css('color','red');
                repassflag = false;
            }
        })




        $form.on('submit',function(){
            if($username.val() === ''){
                $nats.html('用户名不能为空').css('color','red');
                userflag = false;
            }
            if($password.val() === ''){
                $pwt.html('密码不能为空').css('color','red');
                passflag = false;
            }
            if(!userflag || !passflag ||　!repassflag){
                return false;
            }
        }) 


}(jQuery)