
const main = document.querySelector('main#main');
main.remove();

const newHeader = document.createElement('h1');
newHeader.id = 'victory';

const yourName = 'james Kariuki'; 
newHeader.textContent = `${yourName} is the champion`;

const body = document.querySelector('body');
body.appendChild(newHeader)