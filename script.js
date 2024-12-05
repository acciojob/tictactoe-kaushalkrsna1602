//your JS code here. If required.
 const submitButton = document.getElementById('submit');
  const player1Input = document.getElementById('player-1');
  const player2Input = document.getElementById('player-2');
  const form = document.getElementById('form');
  const game = document.getElementById('game');
  const message = document.querySelector('.message');
  const cells = document.querySelectorAll('.cell');

  let player1 = '';
  let player2 = '';
  let currentPlayer = '';
  let moves = 0;

  submitButton.addEventListener('click', () => {
    player1 = player1Input.value.trim();
    player2 = player2Input.value.trim();
    if (player1 && player2) {
      form.classList.add('hidden');
      game.classList.remove('hidden');
      currentPlayer = player1;
      message.textContent = `${currentPlayer}, you're up!`;
    } else {
      alert('Please enter names for both players.');
    }
  });

  cells.forEach(cell => {
    cell.addEventListener('click', function () {
      if (this.textContent === '' && message.textContent.includes('up')) {
        this.textContent = currentPlayer === player1 ? 'X' : 'O';
        moves++;
        if (checkWin()) {
          message.textContent = `${currentPlayer}, congratulations you won!`;
        } else if (moves === 9) {
          message.textContent = 'It\'s a draw!';
        } else {
          currentPlayer = currentPlayer === player1 ? player2 : player1;
          message.textContent = `${currentPlayer}, you're up!`;
        }
      }
    });
  });

  function checkWin() {
    const winCombinations = [
      [1, 2, 3], [4, 5, 6], [7, 8, 9],
      [1, 4, 7], [2, 5, 8], [3, 6, 9],
      [1, 5, 9], [3, 5, 7]
    ];

    return winCombinations.some(combination => {
      return combination.every(index => {
        return document.getElementById(index).textContent === (currentPlayer === player1 ? 'X' : 'O');
      });
    });
  }