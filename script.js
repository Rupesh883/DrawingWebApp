const canvas=document.getElementById('canvas');
const pen=document.querySelector('.pen')
const ctx=canvas.getContext('2d');


canvas.width=window.innerWidth;
canvas.height=  window.innerHeight;

let erese=false;
let drawing=false;
let strokestyle= "black"
let linecap='round'
let linewidth=10
let ereserWidth=10

document.querySelector('.pensize').addEventListener('click',(e)=>{
    erese=false
    linewidth=e.target.value;
   
})
document.querySelector('.eresarsize').addEventListener('change',(e)=>{
     ereserWidth=e.target.value;
     erese=true;
    
})

 canvas.addEventListener('mousedown',()=>{drawing=true; ctx.beginPath()})
 canvas.addEventListener('mouseup',()=>{drawing=false; ctx.closePath();})
 canvas.addEventListener('mousemove',(e)=>{
 if (!drawing) return;



  if( drawing && !erese){
    
    ctx.globalCompositeOperation = "source-over";
     ctx.lineCap=linecap;
 ctx.lineWidth=linewidth;
 ctx.strokeStyle=strokestyle;
 ctx.lineTo(e.clientX,e.clientY)
 ctx.moveTo(e.clientX,e.clientY)
 ctx.stroke()
  }
  else if (drawing && erese) {
    ctx.globalCompositeOperation = "destination-out";
    ctx.lineWidth = ereserWidth;
    ctx.lineCap = "round";
    ctx.lineTo(e.clientX,e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX,e.clientY);
  }

 })
 
 pen.addEventListener('click',()=>{
     erese=false
     
 })

document.querySelector("#clearButton").addEventListener('click',()=>{
    erese=true
})
document.querySelector("#color").addEventListener('change',(e)=>{
    strokestyle=e.target.value;
})

document.querySelector(".allclear").addEventListener('click',()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height);
})
document.querySelector('.start').addEventListener('click',()=>{
    document.querySelector('.cover').style.display = "none";
})

























