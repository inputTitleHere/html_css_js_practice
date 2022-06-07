
const passwordFocus=()=>{
  passwordpopuptext.classList.add('popupshow');
};

const passwordBlur=()=>{
  passwordpopuptext.classList.remove('popupshow');
};

const idFocus=()=>{
  idpopuptext.classList.add('popupshow');
}
const idBlur=()=>{
  idpopuptext.classList.remove('popupshow');
}


window.addEventListener('load',()=>{
  localStorage.setItem('idchecked',false);
});

const removeIdChecker=()=>{
  localStorage.removeItem('idchecked');
};


const checkInput=()=>{
  console.log(localStorage.getItem('idchecked'));
  if(localStorage.getItem('idchecked')==='false'){
    alert('아이디 중복검사를 먼저 실행해주세요');
    return false;
  }
  console.log("WHAT?");
  const iemail = document.querySelector('#email');
  const emailReg =/.+@.*\.[a-z]{2,3}$/i;
  if(!emailReg.test(iemail.value)){
    alert('이메일 형식이 잘못되었습니다.');
    iemail.focus();
    return false;
  }

  const iid = document.querySelector('#id');
  
  if(/ /.test(iid.value)){
    alert('아이디 공백 금지!');
    iid.focus();
    return false;
  }
  if(/[ㄱ-ㅎ가-힣ㅏ-ㅣ]/.test(iid.value)){
    alert('아이디 한글 금지!');
    iid.focus();
    return false;
  }


  if(!/^.{1,15}$/.test(iid.value)){
    alert('아이디는 1 ~ 15자리!');
    iid.focus();
    return false;
  }

  const ipassword = document.querySelector('#password');

  if(!/^.{8,}$/.test(ipassword.value)){
    alert('비밀번호는 8자리 이상!');
    ipassword.focus();
    return false;
  }
  if(!/\d+/.test(ipassword.value)){
    alert('비밀번호 숫자 포함 필수');
    ipassword.focus();
    return false;
  }
  if(!/[a-z]+/i.test(ipassword.value)){
    alert('비밀번호 영문 포함 필수');
    ipassword.focus();
    return false;
  }
  if(!/[!<>@#$%^&*()\-_=+/\\*`~;:|]/.test(ipassword.value)){
    alert('비밀번호 특수문자 포함 필수');
    ipassword.focus();
    return false;
  }

  const passwordCheck = document.querySelector('#password-check');
  if(ipassword.value!==passwordCheck.value){
    alert('비밀번호 확인과 비밀번호가 다릅니다.');
    passwordCheck.focus();
    return false;
  }

  const newRegister = {
    email:iemail.value,
    id:iid.value,
    password:ipassword.value
  };
  localStorage.setItem(iid.value, JSON.stringify(newRegister));
  localStorage.removeItem('idchecked');
  moveToHomepage();
};

const checkIdExist=()=>{
  const iid = document.querySelector('#id');
  if(!iid.value){
    alert('아이디를 입력하세요.');
    return;
  }
  if(/ /.test(iid.value)){
    alert('아이디 공백 금지!');
    iid.focus();
    return false;
  }
  if(/[ㄱ-ㅎ가-힣ㅏ-ㅣ]/.test(iid.value)){
    alert('아이디 한글 금지!');
    iid.focus();
    return false;
  }
  if(!/^.{1,15}$/.test(iid.value)){
    alert('아이디는 1 ~ 15자리!');
    iid.focus();
    return false;
  }

  if(localStorage.getItem(iid.value)){
    alert('이미 사용중인 아이디입니다. 다른 아이디를 입력하세요');
  }else{
    alert('사용 가능한 아이디 입니다.');
    localStorage.setItem('idchecked',true);
  }
  return;
};

const moveToHomepage = ()=>{
  location.href='index.html';
}
