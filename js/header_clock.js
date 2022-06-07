
let yearmonthdate;
let currenttime;
let dayofweek;
window.addEventListener('load',()=>{
  yearmonthdate=document.querySelector('#yearmonthdate');
  currenttime=document.querySelector('#currenttime');
  dayofweek=document.querySelector('#dayofweek');
  clockUpdate();


  setInterval(() => {
    clockUpdate();
  }, 1000);
});

let ampm;
const clockUpdate=()=>{
  const currentTime = new Date();
  const year = currentTime.getFullYear();
  const month= decimalFormatter(currentTime.getMonth()+1);
  const date = decimalFormatter(currentTime.getDate());
  const dayOfWeek=dayOfWeekFormatter(currentTime.getDay()); 

  const hour = decimalFormatter(hourFormatter(currentTime.getHours()));
  const minute = decimalFormatter(currentTime.getMinutes());
  const second = decimalFormatter(currentTime.getSeconds());
  yearmonthdate.innerHTML=`${year}/${month}/${date}`;
  currenttime.innerHTML=`&nbsp;[${ampm}] ${hour}:${minute}:${second}`;
  dayofweek.innerHTML=dayOfWeek;
}

const decimalFormatter=(inputTime)=>{
  if(inputTime<10){
    return "0"+inputTime;
  }
  return inputTime;
};

const hourFormatter=(hour)=>{
  if(hour>12){
    ampm='오후';
    return hour-12;
  }else{
    ampm='오전';
    return hour;
  }
};

const dayOfWeekFormatter=(dow)=>{
  switch (dow) {
    case 0: return "일요일";
    case 1: return "월요일";
    case 2: return "화요일";
    case 3: return "수요일";
    case 4: return "목요일";
    case 5: return "금요일";
    case 6: return "토요일";
  };
};

