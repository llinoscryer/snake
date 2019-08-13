const canvasBorderColour = "black";
const canvasBackgroundColour = "white";

let gameCanvas = document.getElementById("gameCanvas");
let ctx = gameCanvas.getContext("2d");

ctx.fillStyle = canvasBackgroundColour;
ctx.strokeStyle = canvasBorderColour;

ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);

class Snake{
    constructor(name, snakeColour, snakeBorderColour, snakePosition){
        this._name = name;
        this._snakeColour = snakeColour;
        this._snakeBorderColour = snakeBorderColour;
        this._snakePosition = snakePosition;
    }

    drawSnake(){
        this._snakePosition.forEach(part => {
            this.drawSnakePart(part)
        });
    }
    drawSnakePart(snakePart) {
        ctx.fillStyle = this._snakeColour;
        ctx.strokeStyle = this._snakeBorderColour;
        ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
        ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
    }
}

const cobra = new Snake("kingCobra", "yellow", "darkgreen", [{x: 150, y: 150}, {x: 140, y: 150}, {x: 130, y: 150}, {x: 120, y: 150}, {x: 110, y: 150},])
cobra.drawSnake();
const mamba = new Snake("blackMamba", "black", "red", [{x: 80, y: 80}, {x: 70, y: 80}, {x: 60, y: 80}, {x: 50, y: 80}, {x: 40, y: 80},])
mamba.drawSnake();


// const snakeColour = "lightgreen"
// const snakeBorderColour = "darkgreen"

// let snakePosition = [
//     {x: 150, y: 150},
//     {x: 140, y: 150},
//     {x: 130, y: 150},
//     {x: 120, y: 150},
//     {x: 110, y: 150},
// ];

// let score = 0;

// function drawSnake() {
//     snakePosition.forEach(drawSnakePart)
// }

// function drawSnakePart(snakePart) {
//     ctx.fillStyle = snakeColour;
//     ctx.strokeStyle = snakeBorderColour;
//     ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
//     ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
// }

// function changeDirection(event) {
//     const left_key = 37;
//     const right_key = 39;
//     const up_key = 38;
//     const down_key = 40;

//     if (changingDirection) return;

//     changingDirection = true;

//     const keyPressed = event.keyCode;
//     const goingUp = dy === -10;
//     const goingDown = dy === 10;
//     const goingRight = dx === 10;
//     const goingLeft = dx === -10;

//     if (keyPressed === left_key && !goingRight) {
//         dx = -10;
//         dy = 0;
//     }

//     if (keyPressed === up_key && !goingDown) {
//         dx = 0;
//         dy = -10;
//     }

//     if (keyPressed === right_key && !goingLeft){
//         dx = 10;
//         dy = 0;
//     }

//     if (keyPressed === down_key && !goingUp){
//         dx = 0;
//         dy = 10;
//     }
// }

// document.addEventListener("keydown", changeDirection)

// // drawSnake(); 

// let dx = 10;
// let dy = 0;

// function advanceSnake() {
//     const head = {x: snakePosition[0].x + dx, y: snakePosition[0].y + dy};
//     snakePosition.unshift(head);

//     const didEatFood = snakePosition[0].x === foodX && snakePosition[0].y === foodY;
//     if (didEatFood) {
//         score += 10;
//         document.getElementById('score').innerHTML = score;
        
//         createFood();
//     } else {
//         snakePosition.pop();
//     }
// }

// // advanceSnake()

// // dx = 0;
// // dy = -10;

// // advanceSnake()

// // drawSnake()

// function clearCanvas() {
//     ctx.fillStyle = "white";
//     ctx.strokeStyle = "black";

//     ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
//     ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);
// }

// // clearCanvas()

// function main() {
    
//     if (didGameEnd()) return;
    
//     setTimeout(function onTick() {
//         changingDirection = false;
//         clearCanvas();
//         drawFood();
//         advanceSnake();
//         drawSnake();

//         main();
//     }, 100)
// }

// // main()

// function randomTen(min, max) {
//     return Math.round((Math.random() * (max-min) + min) / 10) * 10;
// }

// function createFood() {
//     foodX = randomTen(0, gameCanvas.width - 10);
//     foodY = randomTen(0, gameCanvas.height - 10);

//     snakePosition.forEach(function isFoodOnSnake(part) {
//         const foodIsOnSnake = part.x == foodX && part.y == foodY
//         if (foodIsOnSnake)
//             createFood();
//     });
// }

// function drawFood() {
//     ctx.fillStyle = 'red';
//     ctx.strokeStyle = 'darkred';
//     ctx.fillRect(foodX, foodY, 10, 10);
//     ctx.strokeRect(foodX, foodY, 10, 10);
// }

// // createFood()
// // main()

// function didGameEnd() {
//     for (let i = 4; i < snakePosition.length; i++) {
//         const didCollide = snakePosition[i].x === snakePosition[0].x &&
//             snakePosition[i].y === snakePosition[0].y
        
//         if (didCollide) return true
//     }

//     const hitLeftWall = snakePosition[0].x < 0;
//     const hitRightWall = snakePosition[0].x > gameCanvas.width - 10;
//     const hitTopWall = snakePosition[0].y < 0;
//     const hitBottomWall = snakePosition[0].y > gameCanvas.height - 10;

//     return hitLeftWall || hitRightWall || hitTopWall || hitBottomWall
// }

// createFood()
// main()