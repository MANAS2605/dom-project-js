const clock=document.getElementById('clock')
// const clock=document.querySelector('#clock')//same as above
setInterval(function(){
  let date=new Date()
  clock.innerHTML=date.toLocaleTimeString()
},1000)
