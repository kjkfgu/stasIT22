setTimeout(() => {
    alert('Час вийшов!');
}, 5000);

let seconds = 0;
const counterElement = document.getElementById('counter');
let intervalId;

intervalId = setInterval(() => {
    seconds++;
    counterElement.textContent = `${seconds} секунд`;
}, 1000);

const stopButton = document.getElementById('stopButton');
stopButton.addEventListener('click', () => {
    clearInterval(intervalId);
});

const blinkText = document.getElementById('blinkText');
setInterval(() => {
    blinkText.style.color = blinkText.style.color === 'red' ? 'blue' : 'red';
}, 500);


updateRecursiveCounter(); 