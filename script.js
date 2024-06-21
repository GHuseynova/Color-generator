let btn =document.querySelector('#btn')
function color() {
    return Math.floor(Math.random()*256)}
  
btn.addEventListener("click",function(){document.body.style.backgroundColor =`rgb(${color()}, ${color()}, ${color()})`})