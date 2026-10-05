const progress=document.querySelector('.progress');
const glow=document.querySelector('.cursor-glow');
window.addEventListener('scroll',()=>{
  const h=document.documentElement.scrollHeight-window.innerHeight;
  progress.style.width=(window.scrollY/h*100)+'%';
});
window.addEventListener('mousemove',e=>{
  glow.style.left=e.clientX+'px'; glow.style.top=e.clientY+'px';
});
const observer=new IntersectionObserver(entries=>{
  entries.forEach((entry,i)=>{
    if(entry.isIntersecting){
      entry.target.style.transitionDelay=(i%5)*80+'ms';
      entry.target.classList.add('visible');
    }
  });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
