var $name = $('#name'),
    $phone = $('#phone'),
    $pass = $('#pass'),
    $test = $('#test'),
    $btn = $('#register'),
    $namets = $('#namets'),
    $phonets = $('#phonets'),
    $testts = $('#testts'),
    $passts = $('#passts'),
    $req = $('#give');
var count = 60;
$btn.click(function(){
  if(validate1()||validate2()||validate3()) return;})
$name.focusout(function(){
 if(!validate1()) $name.select();
});
$phone.focusout(function(){
 if(!validate2()) $phone.select();
});
$pass.focusout(function(){
 if(!validate3()) $pass.select();
});
$req.click(function(){
  $req.attr("disabled",true);
  if(count === 0){
    clearInterval(timer);
    $req.val('获取验证码');
    count = 60;
    $testts.html('请求超时')
  }else{
  var timer = setInterval(function(){
    $req.val(count + 's');
    count = count - 1;
  },1000)
}});
function validate1(){
  if(/^[\u4E00-\u9FA5A-Za-z0-9]+$/.test($name.val())){
    $namets.html('');
    return true;
  }else{
    $namets.html('用户名仅支持中文、英文、数字但不包括下划线等符号');
    $name.select();
    return false;
  }
};
function validate2(){
  if(/1[0-9]{10}/.test($phone.val())){
    $phonets.html('');
    return true;
  }else{
    $phonets.html('手机号码格式不正确');
    $phone.select();
    return false;
  }
};
function validate3(){
  if(/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{8,14}$/.test($pass.val())){
    $passts.html('');
    return true;
  }else{
    $passts.html("密码设置不符合要求");
    $pass.select();
    return false;
  }
};
