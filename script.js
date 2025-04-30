// Write your code here
const bulbs = document.querySelectorAll('.lightbulb');
const subtitle = document.querySelector('.subtitle');
let clickCount = 0;
bulbs.forEach(bulb => {
  bulb.addEventListener('click', () => {
    bulb.classList.toggle('active');
    clickCount++;
    subtitle.textContent = `You've clicked the lights ${clickCount} times`;
  });
});
