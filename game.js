const Gameboard = (() => {
    board =[];
    const initialize = () => {
        board = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
    };
    const makeMove = (row,col,symbol) => {
        if(board[row][col] === null){
            board[row][col] = symbol;
            return true;
        }
        return false;
    };

    const checkWin = () => {
        //check rows
        for (let i = 0; i < 3; i++) {
            if (board[i][0] && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
                return board[i][0];
            }
        }
        //check columns
        for (let j = 0; j < 3; j++){
            if (board[0][j] && board[0][j] === board[1][j] && board[0][j] === board[2][j]){
                return board[0][j];
            }
        }
        //check diagonals
        if (board[0][0] && board[0][0] === board[1][1] && board[0][0] === board[2][2]){
            return board[0][0];
        }
        if (board[0][2] && board[0][2] === board[1][1] && board[0][2] === board[2][0]){
            return board[0][2];
        }
        //no winner
        return null;
    };
    const checkDraw = () => {
        return board.every(row => row.every(cell => cell !== null)) && !checkWin();
    };
    const getBoard = () => {
        board.map(row => [...row])
    };

    return {initialize, makeMove, checkWin, checkDraw};
})();

const Player = (name, symbol) => {
    let score = 0
    const getName = () => name;
    const getSymbol = () => symbol;
    const getScore = () => score;
    const incrementScore = () => {
        score++;
    };
    const makeMove = (gameboard, row, col) => {
        return gameboard.makeMove(row, col, symbol);
    };

    return {getName, getSymbol, getScore, incrementScore, makeMove};
};

const GameController = (() => {

})();