const Gameboard = (() => {
    board =[];
    const initialize = () => {
        board = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
    };
})();

const Player = (name, symbol) => {
    return {name, symbol};
};

const GameController = (() => {

})();