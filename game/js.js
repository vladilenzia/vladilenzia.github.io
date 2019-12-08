let ball = document.getElementById('id');

let right1 = 0;
let left1 = 0;
let top1 = 0;
let bottom1 = 0;

let x = document.onkeypress  = function(event){
  if(left1 >= window.innerWidth){
    left1 = window.innerWidth -50;
  }
  if(top1 >= window.innerHeight){
    top1 = window.innerHeight -50;
  }
  if(bottom1 >= window.innerHeight){
    bottom1 = window.innerHeight -50;
  }
  if(event.key == 'd'){
    ball.style.right = 0;
    ball.style.left = left1 + 'px';
    left1+= window.innerWidth;
    console.log(ball);
  }
  if(event.key == 'a'){
    ball.style.left = 0;
    ball.style.right = right1 + 'px';
    right1+= window.innerWidth;
    console.log(ball);
  }
  if(event.key == 'w'){
    ball.style.bottom = bottom1 + 'px';
    ball.style.top = 0;
    bottom1+=window.innerHeight;
    console.log(ball);
  }
  if(event.key == 's'){
    ball.style.bottom = 0;
    ball.style.top = top1 + 'px';
    top1+=window.innerHeight;
    console.log(ball);
  }
}
