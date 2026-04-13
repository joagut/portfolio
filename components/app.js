function setLang(lang){
  document.documentElement.lang=lang;
  document.getElementById('btnES').classList.toggle('active',lang==='es');
  document.getElementById('btnEN').classList.toggle('active',lang==='en');
  const d=T[lang];
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k=el.dataset.i18n; if(d[k]!==undefined) el.innerHTML=d[k];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el=>{
    const k=el.dataset.i18nPh; if(d[k]!==undefined) el.placeholder=d[k];
  });
  document.getElementById('navLogo').innerHTML=d['navLogo'];
  document.title=d['pageTitle'];
}

window.addEventListener('scroll',()=>{
  document.getElementById('navbar').classList.toggle('scrolled',window.scrollY>40);
});
function toggleMenu(){document.getElementById('navLinks').classList.toggle('open')}
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>document.getElementById('navLinks').classList.remove('open')));

function switchTab(btn,id){
  document.querySelectorAll('.about-tab').forEach(b=>b.classList.remove('active'));
  document.querySelectorAll('.about-tab-content').forEach(c=>c.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(id).classList.add('active');
}

function sendMail(e){
  e.preventDefault();
  const f=e.target;
  const name=encodeURIComponent(f.name.value.trim());
  const email=encodeURIComponent(f.email.value.trim());
  const msg=encodeURIComponent(f.msg.value.trim());
  const body=`Nombre: ${decodeURIComponent(name)}%0D%0AEmail: ${decodeURIComponent(email)}%0D%0A%0D%0A${msg}`;
  window.location.href=`mailto:joaquingutierrez456@gmail.com?subject=Contacto%20portfolio%20-%20${name}&body=${body}`;
  return false;
}

const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('visible');
      e.target.querySelectorAll('.skill-bar-fill').forEach(b=>b.style.width=b.dataset.width+'%');
      obs.unobserve(e.target);
    }
  });
},{threshold:.15});
document.querySelectorAll('.fade-in,.fade-in-left,.fade-in-right').forEach(el=>obs.observe(el));

document.addEventListener('DOMContentLoaded',()=>{
  ['.hero-tag','.hero-name','.hero-title','.hero-subtitle','.hero-buttons','.pcb-wrap'].forEach((s,i)=>{
    const el=document.querySelector(s); if(!el)return;
    el.style.cssText+='opacity:0;transform:translateY(18px);transition:opacity .7s ease,transform .7s ease';
    setTimeout(()=>{el.style.opacity='1';el.style.transform='none'},120+i*110);
  });
});
