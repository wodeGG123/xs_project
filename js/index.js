$(function(){
    $('#submit').on("click",function(){
        if($('#user_name').val().trim() == ''){
            alert('姓名不能为空！');
            return;
        }else{
            if($('#user_name').val().length > 16){
                alert('姓名太长了吧！');
                return;
            }
        }
        if($('#mobile').val().length != 11){
            alert('手机号填写错误！');
            return;
        }
        $.post('http://39.108.114.173:8080/submit',{
            mobile:$('#mobile').val(),
            name:$('#user_name').val(),
            verify:$('#send-code').val()
        },function(data){
            if(data.state){
                window.location.href = 'http://gfd178.com/design/zcBXz53P';
            }
        })
    })
    $('#send-code-bt').on("click",function(){
        var time = 60,that = this;
        if($('#mobile').val().length != 11){
            alert('手机号填写错误！');
            return;
        }
        // if(parseInt(localStorage.getItem('num'))>5){
        //     alert('您已不能再发送验证码！');
        //     return;
        // }
        this.setAttribute('disabled','true');
        $.get('http://39.108.114.173:8080/send',{
            mobile:$('#mobile').val()
        },function(data){
            // if(localStorage.getItem('num')){
            //     var num = parseInt(localStorage.getItem('num'));
            //     localStorage.setItem('num',num+1);
            // }else{
            //     localStorage.setItem('num',1);
            // }
           
        })
        var _clear = setInterval(function(){
            $(that).html(time--);
            if(time == -1){
                clearInterval(_clear);
                that.removeAttribute('disabled');
                $(that).html('重新发送');
            }
        },1000);
    });


})