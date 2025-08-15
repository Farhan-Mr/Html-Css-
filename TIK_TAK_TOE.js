// TIK_TAK_TOE.js

document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('#BIG div[id^="box"]');
    const resetButton = document.getElementById('button');
    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', '']; // Represents the 9 boxes
    let gameActive = true; // To stop the game after a win or draw

    // Winning conditions
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    // Function to handle a player's move
    function handleBoxClick(event) {
        const clickedBox = event.target;
        // Ensure we get the actual box div, even if h1 is clicked
        const boxId = clickedBox.id || clickedBox.parentElement.id;
        const boxIndex = parseInt(boxId.replace('box', '')) - 1;

        // Check if the box is already filled or game is inactive
        if (gameBoard[boxIndex] !== '' || !gameActive) {
            return;
        }

        // Update the game board and display the player's mark
        gameBoard[boxIndex] = currentPlayer;
        // Clear existing content and set the new mark
        clickedBox.innerHTML = `<h1>${currentPlayer}</h1>`;


        checkResult();
    }

    // Function to check for a win or draw
    function checkResult() {
        let roundWon = false;
        for (let i = 0; i < winningConditions.length; i++) {
            const winCondition = winningConditions[i];
            let a = gameBoard[winCondition[0]];
            let b = gameBoard[winCondition[1]];
            let c = gameBoard[winCondition[2]];

            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                roundWon = true;
                break;
            }
        }

        if (roundWon) {
            alert(`Player ${currentPlayer} has won! this GAME 🏆🥇`);
            alert(" You are Looser 🤏");
            gameActive = false;
            return;
        }

        // Check for a draw
        let roundDraw = !gameBoard.includes('');
        if (roundDraw) {
            alert('Game is a draw!');
            gameActive = false;
            return;
        }

        // If no win or draw, switch players
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }

    // Function to reset the game
    function resetGame() {
        currentPlayer = 'X';
        gameBoard = ['', '', '', '', '', '', '', '', ''];
        gameActive = true;
        boxes.forEach(box => {
            box.innerHTML = '<h1></h1>'; // Clear the content of each box
        });
    }

    // Event Listeners
    boxes.forEach(box => {
        box.addEventListener('click', handleBoxClick);
    });

    resetButton.addEventListener('click', resetGame);
});