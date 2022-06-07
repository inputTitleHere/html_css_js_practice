window.onload=()=>{
  insertLines();
};

const showAll=()=>{
  const lis = [...document.querySelectorAll('.majorLi')];
  lis.forEach((item)=>{
    const childDiv = item.firstElementChild.lastElementChild.classList;
    if(childDiv.contains('lastInLine')){
      if(!childDiv.contains('majorDivShine')){
        childDiv.add('majorDivShine');
        return;
      }
      else{
        childDiv.remove('majorDivShine');
        return;
      }
    }
    if(item.classList.contains('noHover')){
      item.classList.remove('noHover');
      item.firstElementChild.firstElementChild.classList.remove('majorDivShine');
      if(childDiv.contains('minorDivRight')){
        childDiv.remove('moveRight');
      }else{
        childDiv.remove('moveLeft');
      }
    }else{
      item.classList.add('noHover');
      item.firstElementChild.firstElementChild.classList.add('majorDivShine');
      if(childDiv.contains('minorDivRight')){
        childDiv.add('moveRight');
      }else{
        childDiv.add('moveLeft');
      }
    }
  });
};
const makeNode=(mode)=>{
  if(mode=='light'){
    const newLiNode = document.createElement('li');
    newLiNode.className="linewrapper";
    const lineDiv = document.createElement('div');
    lineDiv.className="line";
    newLiNode.append(lineDiv);
    return newLiNode;
  }
  if(mode=='dark'){
    const newLiNode = document.createElement('li');
    newLiNode.className="linewrapperdark";
    const lineDiv = document.createElement('div');
    lineDiv.className="linedark";
    newLiNode.append(lineDiv);
    return newLiNode;
  }
};

const insertLines=()=>{
  let initialTopLocation = 260;
  const distanceBetweenLines = 300;
  const majorLiList = Array.from(document.querySelectorAll('.majorLi'));
  const parentUl = document.querySelector('#roadmapUl');
  for(let i=1;i<majorLiList.length;i++){
    const liNode=majorLiList[i];
    const newLiNode=makeNode('light');
    const newLiNodeDark=makeNode('dark');

    newLiNode.style.top=initialTopLocation+"px";
    newLiNodeDark.style.top=initialTopLocation+5+'px';
    initialTopLocation+=distanceBetweenLines;

    parentUl.insertBefore(newLiNode, liNode);
    parentUl.insertBefore(newLiNodeDark,liNode);
  }
};




