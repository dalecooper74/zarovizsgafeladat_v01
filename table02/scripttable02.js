const chessboard = document.getElementById('chessboard');

for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
        const cell = document.createElement('div');
        cell.classList.add(row % 2 === col % 3 ? 'gray' : 'white');
        chessboard.appendChild(cell);
    }
}
