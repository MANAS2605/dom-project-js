//generate a random color
//UNDERSTAND EDGE CASES
let intervalId;
const randomColor=function(){
      const hex='0123456789ABCDEF'
      let color='#'
      for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
      }
      return color;
}

function startChangeBg(){
  if(!intervalId){
   intervalId= setInterval(changeBg,1000);
  }
  function changeBg(){
    document.querySelector('body').style.backgroundColor=randomColor();
  }
}
function stopChangeBg(){
  clearInterval(intervalId);
}

document.querySelector('#start').addEventListener('click',startChangeBg);
document.querySelector('#stop').addEventListener('click',stopChangeBg);
