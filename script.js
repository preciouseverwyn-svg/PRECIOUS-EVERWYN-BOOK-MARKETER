const b=document.querySelector('.burger'),n=document.querySelector('nav');
b.onclick=()=>{n.classList.toggle('open');b.setAttribute('aria-expanded',n.classList.contains('open'))};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.card,section h2,.split>*,details,.stats .grid>div').forEach(e=>{e.classList.add('rv');io.observe(e)});
document.querySelectorAll('[data-n]').forEach(e=>{const t=+e.dataset.n;let i=0;const s=Math.max(1,Math.ceil(t/40));const k=setInterval(()=>{i=Math.min(t,i+s);e.textContent=i+(e.dataset.s||'');if(i>=t)clearInterval(k)},35)});
document.querySelectorAll('form').forEach(f=>f.addEventListener('submit',async e=>{e.preventDefault();
try{const r=await fetch(f.action,{method:'POST',body:new FormData(f),headers:{Accept:'application/json'}});
if(r.ok){const d=document.createElement('div');d.className='thanks';d.textContent=f.dataset.thanks;f.replaceWith(d);d.scrollIntoView({block:'center'})}else throw 0}
catch(x){alert('Something went wrong. Please email preciouseverwyn@gmail.com')}}));
const steps=[...document.querySelectorAll('.step')];
if(steps.length){let i=0;const bar=document.querySelector('.bar i');
const show=()=>{steps.forEach((s,j)=>s.classList.toggle('on',j===i));bar.style.width=(i+1)/steps.length*100+'%'};
document.querySelectorAll('.next').forEach(x=>x.onclick=()=>{const ok=[...steps[i].querySelectorAll('input,select,textarea')].every(f=>f.reportValidity());if(ok){i++;show()}});
document.querySelectorAll('.back').forEach(x=>x.onclick=()=>{i--;show()});show()}
