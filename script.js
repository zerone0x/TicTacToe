
// start --> init 2 players -->change round --> move --> checkgame
// 角色选择 - round 设置- 填充xo - 显示输赢 - 重置

let color = 'x'
let board = initBoard();
const player1 = createPlayer('x');
const player2 = createPlayer('o');
reset_btn = document.querySelector('#reset');
reset_btn.onclick = clear;


function choosePlayer(player){
    clear()
    console.log(player);
    if(player === 'x'){
        color = 'x';
        player1.start();
    }
    else{
        color = 'o';
        player2.start();
}
console.log('collllllor',color);
}

function clear(){
    square = document.querySelectorAll('.square');
    square.forEach((elem) => {
        elem.innerHTML = '';
    });
    result = document.querySelector('#winner');
    result.innerHTML = '';
    board = initBoard();
    color='x';
    player1.start();
    console.log(board);
}

function clicker (x,y,elem){
    if (color === 'x'){
    player1.move(x,y,board);
    } else{
    player2.move(x,y,board);
    }
    elem.innerHTML = color;
}

function initBoard(){
    let board = [];
    for(let i = 0; i < 3; i++){
        board[i] = [];
        for(let j = 0; j < 3; j++){
            board[i][j] = '';
        }
    }
    return board;
}

function createPlayer(name){
    const move = function(x,y,board){
        if(board[x][y] === ''){
            board[x][y] = name;
        }
        res =checkwin(board);
        if(res == true){
            console.log(this.name +' win');
            result = document.querySelector('#winner');
            result.innerHTML = this.name + ' win';
        }else{
            aimove();
        }
    }
    const clicker = function(x,y){
        console.log(x + ' ' + y);
        this.move(x,y,board);
    }
    const initBoard = function(){
        let board = [];
        for(let i = 0; i < 3; i++){
            board[i] = [];
            for(let j = 0; j < 3; j++){
                board[i][j] = '';
            }
        }
        return board;
    }
    const start = function(){
        board = initBoard();
        console.log(board)
        console.log('start game: ' + this.name);
    }
    const aimove = function(){  
        let x = Math.floor(Math.random() * 3);
        let y = Math.floor(Math.random() * 3);
        if(board[x][y] === ''){
            if (color === 'x'){
                colv = 'o';
            } else {
                colv = 'x';
            }
            board[x][y] = colv;
            console.log('ai movefdsafdsafdsfds: ' + x + ' ' + y);
            var selector = `.square[data-x="${x}"][data-y="${y}"]`;
            var specificDiv = document.querySelector(selector);
            console.log('fadsffajskdfjladksfjlkdsafjldjkl',color);
            specificDiv.innerHTML = colv;
        }
        else{
            aimove();
        }
        console.log('ai move: ' + x + ' ' + y);
        res =checkwin(board);
        if(res == true){
            console.log(this.name +' win');
            result = document.querySelector('#winner');
            result.innerHTML = this.name + ' win';
        }
    }

    const checkwin = function(board){
        let win = false;
        for(let i = 0; i < 3; i++){
            if(board[i][0] === board[i][1] && board[i][0] === board[i][2] && board[i][0] !== ''){
                win = true;
            }
        }
        for(let i = 0; i < 3; i++){
            if(board[0][i] === board[1][i] && board[0][i] === board[2][i] && board[0][i] !== ''){
                win = true;
            }
        }
        if(board[0][0] === board[1][1] && board[0][0] === board[2][2] && board[0][0] !== ''){
            win = true;
        }
        if(board[0][2] === board[1][1] && board[0][2] === board[2][0] && board[0][2] !== ''){
            win = true;
        }
        if(win == false){
            let count = 0;
            for(let i = 0; i < 3; i++){
                for(let j = 0; j < 3; j++){
                    if(board[i][j] !== ''){
                        count++;
                    }
                }
            }
            if(count == 9){
                console.log('draw');
            }
        }
        console.log(board);
        console.log(win);
        return win;
    }
    return {clicker,initBoard,start,name, move, aimove, choosePlayer}
}
// board = gameboard();

// player1.start();
// player1.move(0,2,board);
// player2.move(2,1,board);
// player2.move(1,1,board);
// player2.move(0,1,board);
// console.log(board);



