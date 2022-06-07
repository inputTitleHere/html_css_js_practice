
const GLOBAL_WAIT_TIME=300;

const colorChange=async()=>{
  const t = 'titledecoration'
  await changeColor('first'+t);
  await changeColor('second'+t);
  await changeColor('third'+t);
  await changeColor('fourth'+t);
};

const changeColor=(className)=>{
  const toChange = document.getElementsByClassName(className)[0];
  return new Promise((resolve)=>{
    setTimeout(() => {
      toChange.classList.add(className.replace("titledecoration","hover"));
      resolve();
    }, GLOBAL_WAIT_TIME);
  });
}

const colorReset=()=>{
  const t = 'titledecoration';
  resetColor('first'+t)
  .then(()=>{return resetColor('second'+t);})
  .then(()=>resetColor('third'+t))
  .then(()=>resetColor('fourth'+t));
};

const resetColor=(className)=>{
  const toChange = document.getElementsByClassName(className)[0];
  return new Promise((resolve)=>{
    setTimeout(() => {
      toChange.classList.remove(className.replace("titledecoration","hover"));
      resolve();
    }, GLOBAL_WAIT_TIME);
  });
}