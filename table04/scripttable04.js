const canvas = document.getElementById('pepita-canvas');
const ctx = canvas.getContext('2d');

const tileSize = 50; // A négyzetek mérete
const numRows = 10; // Sorok száma
const numCols = 10; // Oszlopok száma

for (let row = 0; row < numRows-2; row++) {
  for (let col = 0; col < numCols-2; col++) {
    // Váltakozó színek
    const color = (row + col) % 2 === 0 ? 'white' : 'black';

    // Négyzetek rajzolása
    ctx.fillStyle = color;
    ctx.fillRect(col * tileSize, row * tileSize, tileSize, tileSize);
  }
}
