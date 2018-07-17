export default class circle{  
  constructor(x,y,dx,dy,radius,color) {
    this.x =x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.radius = radius;
    this.color=color
    let el = document.getElementById('can');
    this.c = el.getContext('2d');
  }
        
  log(){
    console.log("Hi"+this.x);
  }
      
  draw(){
    
    this.c.beginPath();
    this.c.arc(this.x, this.y,this.radius, Math.PI * 2,false);
    this.c.fillStyle=this.color;
    this.c.fill();
  }
      
  update(){
    if(this.x+this.radius>innerWidth || this.x-this.radius<0){
      this.dx=-this.dx;
    }
    if(this.y+this.radius>innerHeight || this.y-this.radius<0){
      this.dy=-this.dy;
    }
    this.x=this.x+this.dx;
    this.y=this.y+this.dy;
    this.draw();
  }
}