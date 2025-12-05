// anim.js — Vector_Sec animations using anime.js

document.addEventListener('DOMContentLoaded', ()=> {

  // 1) Hero title animation (letter reveal)
  const title = document.querySelector('.hero-title');
  if(title){
    const text = title.textContent.trim();
    title.innerHTML = text.split('').map(ch =>
      `<span class="letter">${ch === ' ' ? '&nbsp;' : ch}</span>`
    ).join('');

    anime.timeline({loop:false})
      .add({
        targets: '.hero-title .letter',
        translateY: [40,0],
        opacity: [0,1],
        easing: 'spring(1,80,12,0)',
        duration: 700,
        delay: anime.stagger(40)
      });
  }

  // 2) Sidebar nav slide-in
  anime({
    targets: '.nav-item',
    translateX: [-18,0],
    opacity: [0,1],
    easing: 'easeOutCubic',
    delay: anime.stagger(80, {start: 300})
  });

  // 3) Hover micro-interaction on nav
  document.querySelectorAll('.nav-item').forEach(item=>{
    item.addEventListener('mouseenter', ()=>{
      anime({targets:item, translateX:8, duration:200, easing:'easeOutCubic'});
    });
    item.addEventListener('mouseleave', ()=>{
      anime({targets:item, translateX:0, duration:200, easing:'easeOutCubic'});
    });
  });

  // 4) Card tilt animation
  document.querySelectorAll('.card').forEach(card=>{
    card.addEventListener('mousemove', e=>{
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      const rx = (y - 0.5) * 8;
      const ry = (x - 0.5) * -8;

      anime({
        targets: card,
        rotateX: rx,
        rotateY: ry,
        scale: 1.02,
        duration: 250,
        easing: 'easeOutQuad'
      });
    });

    card.addEventListener('mouseleave', ()=>{
      anime({
        targets: card,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 350,
        easing: 'easeOutElastic(1, .8)'
      });
    });
  });

  // 5) Portrait card entrance
  anime({
    targets: '.portrait-card',
    opacity: [0,1],
    translateY: [30,0],
    scale: [0.95,1],
    duration: 700,
    easing: 'easeOutQuart',
    delay: 600
  });

});
