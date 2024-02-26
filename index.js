document.getElementById(`main`).remove()

const newHeader = document.createElement('h1');

newHeader.id = 'victory';

newHeader.innerHTML = `Billy is the champion`;

document.body.appendChild(newHeader);