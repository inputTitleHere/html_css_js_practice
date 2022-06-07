
window.onload=()=>{
  loginButton.checked=false;
}


function loginMenuToggle(){
    const centerRotateWrapper = document.getElementById('centerRotateWrapper');
    if(centerRotateWrapper.classList.contains('moveUp')){
        centerRotateWrapper.classList.remove('moveUp')
    }else{
        centerRotateWrapper.classList.add('moveUp');
    }
    const otherMenu=document.getElementById('bars');
    if(otherMenu.classList.contains('hideContent')){
        otherMenu.classList.add('showContent');
        otherMenu.classList.remove('hideContent');
    }else{
        otherMenu.classList.add('hideContent');
        otherMenu.classList.remove('showContent');
    }
}

const colorVar = document.querySelector(':root');
const randomizeColor = ()=>{
  let red=0;
  let blue=0;
  let green=0;
  while((red<150&&blue<150&&green<150)){
    red = Math.floor(Math.random()*255);
    green = Math.floor(Math.random()*255);
    blue = Math.floor(Math.random()*255);
  };
  const rgb = `rgb(${red}, ${green}, ${blue})`;
  colorVar.style.setProperty('--color-var',rgb);
};


const login=()=>{
  const iid = document.querySelector("#id");
  const idFound = localStorage.getItem(iid.value);
  console.log(idFound);
  if(!idFound){
    alert('등록되지 않은 아이디 입니다.');
    return;
  }
  const {password}=JSON.parse(idFound);
  const ipwd = document.querySelector('#password').value;
  if(password===ipwd){
    alert(`어서오세요 ${iid.value}님!`);
    location.href='index.html';
  }else{
    alert("비밀번호가 틀렸습니다.");
  }
};


