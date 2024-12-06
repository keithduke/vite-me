import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = ``;

(function() {
  window._state = window._state || {};
  document.body.addEventListener('mouseleave', showModal, false);
  _state['online'] = true;
  const footer = document.querySelector('footer');
  jitter(footer);

  const element = document.querySelector('#about h2');
  const max_rotation = 90;
  window.addEventListener('scroll', () => {
    let rotation_angle = Math.min(window.scrollY / 10, max_rotation);
    element.style.transform = `rotate(${rotation_angle}deg)`;
  });
}());

function jitter(footer){
  const textToEffect = document.getElementById("colophon"); 

  for(let i=0; i < 20; i++){
    setTimeout(function() {
      let textClone = textToEffect.cloneNode(true);
      textClone.id = `colophon-${i}`;
      textClone.classList.add('jittery');
      textClone.ariaHidden = "true";
      textToEffect.before(textClone);
      // apply random values
      const oddOrEven = Math.random() < 0.5 ? -1 : 1;
      const a = oddOrEven * (Math.floor(Math.random() * 100));
      const b = oddOrEven * (Math.random() * 40);
      const c = Math.random();
      textClone.style.opacity = c;
      const keyframe = `@keyframes animate-${i} {
        0% { transform: rotate(0) scale(0); }
        50% { transform: rotate(${a/2}deg) scale(${b/2}); }
        100% { transform: rotate(${a}deg) scale(${b}); }
      }`;

      const style = document.createElement('style');
      style.innerHTML = keyframe;
      document.head.appendChild(style);

      textClone.style.animation = `animate-${i} .25s linear forwards`;
    }, i * i);
  }
}

// On mouse leave, assume they are navigating and show modal
function showModal() {
  if (!_state['shownModal'] === true){
    document.body.removeEventListener('mouseleave', showModal, false);
    _state['shownModal'] = true;
    const modal = document.getElementById("thanksMessage");
    modal.showModal();
  }
}

