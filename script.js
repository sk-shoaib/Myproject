// Simple script for index.html
document.addEventListener('DOMContentLoaded', function () {
  const el = document.createElement('p');
  el.textContent = 'This paragraph was added by script.js';
  document.body.appendChild(el);
  console.log('Hello from script.js');
});
