const gameBoard = document.getElementById(gameBoard);
const ctx = gameBoard.getContext("2d");
const scoreText = document.getElementById("scoreText");
const resetBtn = document.getElementById("resetBtn");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackgroundColor = "white";
const foodColor = "red";
const snakeColor = "lightgreen";
const  snakeBorder = "black";
const unitSize = 25;

let running = false;
let foodX;
let foodY;
let xVelocity = unitSize;
let yVelocity = 0;
let score = 0
let snake = [
    {x: unitSize * 4, y: 0},
    {x: unitSize * 3, y: 0},
    {x: unitSize * 2, y: 0},
    {x: unitSize, y: 0},
    {x: 0, y:0}
];

window.addEventListener("keydown", changeDirection);
resetBtn.addEventListener("click", resetGame);

    drawFood();
    createFood();
    initialiseGame()


function initialiseGame(){
    running = true;
    scoreText.textContent = score;
    drawFood();
    createFood();
    nextTick();
};
function nextTick(){
    if(running){
        setTimeout(() => {
            clearBoard()
            drawFood();
            createFood()
            drawSnake();
            moveSnake();
            checkGameOver()
            nextTick();
        }, 75);
    }
    else{
        displayGameOver();
    }
};
function clearBoard(){
    ctx.fillStyle = boardBackgroundColor;
    ctx.fillRect(0, 0, gameWidth, gameHeight);
};
function drawFood(){

};
function createFood(){
    function randomFood(min, max){
        const randFood = Math.round((Math.random() * (max - min) + min / unitSize)) * unitSize
        return randFood
    }
    foodX = randomFood(0, gameWidth - unitSize);
    foodY = randomFood(0, gameHeight - unitSize);
}
function drawSnake(){

};
function moveSnake(){

};
function changeDirection(){

};
function checkGameOver(){

}
function displayGameOver(){

};
function resetGame(){

}