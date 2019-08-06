const canvasBorderColour = "black";
const canvasBackgroundColour = "white";

let gameCanvas = document.getElementById("gameCanvas");
let ctx = gameCanvas.getContext("2d");

ctx.fillStyle = canvasBackgroundColour;
ctx.strokeStyle = canvasBorderColour;

ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);

const snakeColour = "lightgreen"
const snakeBorderColour = "darkgreen"

let snake = [
    {x: 150, y: 150},
    {x: 140, y: 150},
    {x: 130, y: 150},
    {x: 120, y: 150},
    {x: 110, y: 150},
];

let score = 0;

function drawSnake() {
    snake.forEach(drawSnakePart)
}

function drawSnakePart(snakePart) {
    ctx.fillStyle = snakeColour;
    ctx.strokeStyle = snakeBorderColour;
    ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
    ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

function changeDirection(event) {
    const left_key = 37;
    const right_key = 39;
    const up_key = 38;
    const down_key = 40;

    if (changingDirection) return;

    changingDirection = true;

    const keyPressed = event.keyCode;
    const goingUp = dy === -10;
    const goingDown = dy === 10;
    const goingRight = dx === 10;
    const goingLeft = dx === -10;

    if (keyPressed === left_key && !goingRight) {
        dx = -10;
        dy = 0;
    }

    if (keyPressed === up_key && !goingDown) {
        dx = 0;
        dy = -10;
    }

    if (keyPressed === right_key && !goingLeft){
        dx = 10;
        dy = 0;
    }

    if (keyPressed === down_key && !goingDown){
        dx = 0;
        dy = 10;
    }
}

document.addEventListener("keydown", changeDirection)

// drawSnake(); 

let dx = 10;
let dy = 0;

function advanceSnake() {
    const head = {x: snake[0].x + dx, y: snake[0].y + dy};
    snake.unshift(head);

    const didEatFood = snake[0].x === foodX && snake[0].y === foodY;
    if (didEatFood) {
        score += 10;
        document.getElementById('score').innerHTML = score;
        
        createFood();
    } else {
        snake.pop();
    }
}

// advanceSnake()

// dx = 0;
// dy = -10;

// advanceSnake()

// drawSnake()

function clearCanvas() {
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";

    ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
    ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);
}

// clearCanvas()

function main() {
    
    if (didGameEnd()) return;
    
    setTimeout(function onTick() {
        changingDirection = false;
        clearCanvas();
        drawFood();
        advanceSnake();
        drawSnake();

        main();
    }, 100)
}

// main()

function randomTen(min, max) {
    return Math.round((Math.random() * (max-min) + min) / 10) * 10;
}

function createFood() {
    foodX = randomTen(0, gameCanvas.width - 10);
    foodY = randomTen(0, gameCanvas.height - 10);

    snake.forEach(function isFoodOnSnake(part) {
        const foodIsOnSnake = part.x == foodX && part.y == foodY
        if (foodIsOnSnake)
            createFood();
    });
}

function drawFood() {
    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'darkred';
    ctx.fillRect(foodX, foodY, 10, 10);
    ctx.strokeRect(foodX, foodY, 10, 10);
}

// createFood()
// main()

function didGameEnd() {
    for (let i = 4; i < snake.length; i++) {
        const didCollide = snake[i].x === snake[0].x &&
            snake[i].y === snake[0].y
        
        if (didCollide) return true
    }

    const hitLeftWall = snake[0].x < 0;
    const hitRightWall = snake[0].x > gameCanvas.width - 10;
    const hitTopWall = snake[0].y < 0;
    const hitBottomWall = snake[0].y > gameCanvas.height - 10;

    return hitLeftWall || hitRightWall || hitTopWall || hitBottomWall
}

createFood()
main()