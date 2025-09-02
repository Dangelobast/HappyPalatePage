'use strict';
document.addEventListener('DOMContentLoaded', () => {
function createHeart() {
  const container = document.querySelector('.card-container');
  const svg = document.querySelector('.all-icons');
  const randomImage = Math.floor(Math.random() * 9) + 1;
  svg.src = `images/icon-${randomImage}.svg`;
  const svgClone = svg.cloneNode(true);
  const personName = document.querySelector('.profile-name');
  const audio = document.querySelector('.audio-file');
  
 

  const containerWidth = container.offsetWidth;
  console.log(containerWidth);
  const heartWidth = Math.random() * 80 + 40;
  svgClone.style.width = heartWidth + 'px';
  const maxLeft = containerWidth - heartWidth;
  const left = Math.random() * maxLeft;
  svgClone.style.left = left + 'px';
  svgClone.style.animation = 'floatUp 8s';
  svgClone.style.cursor = "pointer";
  container.appendChild(svgClone);

  svgClone.addEventListener('click', () => {
    audio.play();
    svgClone.style.transition = "0.5s";
    svgClone.style.width = "150px";
    personName.style.color = '#ccd69dff';
    setTimeout(() => {
      personName.style.transition = 'color 0.5s'
      personName.style.color = 'rgba(12, 12, 12, 0.603)';
    }, 300);
  });

  svgClone.addEventListener('animationend', () => {
    svgClone.remove();
  });
}

setInterval(createHeart, 1000);
});