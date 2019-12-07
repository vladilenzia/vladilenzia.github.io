(function(){
  var ball = document.querySelectorAll('.ball');
  ball.forEach(function(event){
    let i = 0;
    let width = window.innerWidth - 60;
    let height = window.innerHeight - 60;
    function cycle(){
      setTimeout(()=>{
        let settings = {
          posX : Math.random()*width,
          posY : Math.random()*height,
        }
        let y = event.style.top = settings.posY + "px";
        let x = event.style.left = settings.posX + "px";
        cycle();

      }, 1000);
    }
    cycle();
  })
}())
