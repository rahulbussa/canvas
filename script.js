import circle from './circle.js';

const can = document.getElementById('can');
can.width=window.innerWidth;
can.height=window.innerHeight;
console.log(window.innerWidth);
const c = can.getContext('2d');
const radius=10;
const no=90;
const colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
      '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680'];
window.addEventListener('resize',()=>{
  can.width=window.innerWidth;
  irclecan.height=window.innerHeight;
})      

      
      

var total = [];
for(let i=0;i<no;i++){
  let x = Math.random()*innerWidth; 
  let y = Math.random()*innerHeight;
  let dx = (Math.random()-0.5)*6;
  let dy = (Math.random()-0.5)*6;
  let radius = Math.floor(Math.random() * (8 - 2 + 1)) + 2;
  let a = new circle(x,y,dx,dy,radius,colors[Math.floor(Math.random()*colors.length)]);
  total.push(a); 
  a.draw();
}

function anim(){
  c.clearRect(0,0,innerWidth,innerHeight);
  window.requestAnimationFrame(anim);
  for(let i=0;i<total.length;i++){
  total[i].update();
  }
}

anim();

