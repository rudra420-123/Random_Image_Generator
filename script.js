const container = document.querySelector('.container');
const rows = 5;

for (let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img');
    const width = getRandomNr();
    const height = getRandomNr();
    img.src = `https://picsum.photos/${width}/${height}`;
    container.appendChild(img);
}

function getRandomNr() {
    return Math.floor(Math.random() * 100) + 300;
}