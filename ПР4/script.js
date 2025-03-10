const textElement = document.getElementById('text');
const changeColorBtn = document.getElementById('changecolor');
const changeFontSizeBtn = document.getElementById('changesize');
const changeBackgroundBtn = document.getElementById('changebackground');
const toggleTextBtn = document.getElementById('hidetext');
const resetBtn = document.getElementById('reset');

changeColorBtn.onclick = function() {
  if (textElement.style.color === 'red') {
    textElement.style.color = 'blue';
  } else {
    textElement.style.color = 'red';
  }
  localStorage.setItem('textcolor', textElement.style.color);
};
changeFontSizeBtn.onclick = function() {
  if (textElement.style.fontSize === '16px') {
    textElement.style.fontSize = '24px';
  } else {
    textElement.style.fontSize = '16px';
  }
  localStorage.setItem('fontsize', textElement.style.fontSize);
};
changeBackgroundBtn.onclick = function() {
  if (document.body.style.backgroundColor === 'lightgray') {
    document.body.style.backgroundColor = 'white';
  } else {
    document.body.style.backgroundColor = 'lightgray';
  }
  localStorage.setItem('backgroundColor', document.body.style.backgroundColor);
};
toggleTextBtn.onclick = function() {
  textElement.classList.toggle('hidden');
  if (textElement.classList.contains('hidden')) {
    localStorage.setItem('textVisible', 'false');
  } else {
    localStorage.setItem('textVisible', 'true');
  }
};

resetBtn.onclick = function() {
  localStorage.clear();
  location.reload();
};
window.onload = function() {
  if (localStorage.getItem('textColor')) {
    textElement.style.color = localStorage.getItem('textColor');
  }
  if (localStorage.getItem('fontSize')) {
    textElement.style.fontSize = localStorage.getItem('fontSize');
  }
  if (localStorage.getItem('backgroundColor')) {
    document.body.style.backgroundColor = localStorage.getItem('backgroundColor');
  }
  if (localStorage.getItem('textVisible') === 'false') {
    textElement.classList.add('hidden');
  }
};
