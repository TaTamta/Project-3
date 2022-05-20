let direction = {x:0, y:0};
let score = 0;
const playground = document.getElementById('board')
let width = 15;
let height = 15;
let food = {x:5, y:4};
let startbutton = document.getElementById('startGame')
let inputDirection = { x: 0, y: 0 };
import {speed} from './config.js';
import {showSnake, snake} from './snake.js';



startbutton.addEventListener('click', () => {
    start();
})


function start(){
    setInterval(gamePlay, speed);
}


function gamePlay() {
    if (isDead(snake)){
        clearInterval;
    }
    else gameEngine()
}


function gameEngine() {
    move()

    eatFood()

    showSnake()

    showFood()
}




// snake Death versions 
function isDead(snakeEl) {
    for (let i = 1; i < snake.length; i++) {
        if (snakeEl[i].x === snakeEl[0].x && snakeEl[i].y === snakeEl[0].y) {
            return true;
        }
    }
    // If you bump into the wall
    if (snakeEl[0].x >= 18 || snakeEl[0].x <= 0 || snakeEl[0].y >= 18 || snakeEl[0].y <= 0) {
        return true;
    }

    return false;
}

//displays food on playground 
function showFood(){
    let foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food')
    board.appendChild(foodElement);       
}


//Snake eats food, grows and rendom food is displayed
function eatFood(){
    if(snake[0].y === food.y && snake[0].x === food.x){
        snake.unshift({x: snake[0].x + direction.x, y: snake[0].y + direction.y});
        food = {x: Math.floor(Math.random() * width) + 1,
            y: Math.floor(Math.random() * width) + 1};
    }
}

//Snake moves
function move(){
    playground.innerHTML='';
    const direction = getInputDirection()
    for (let i = snake.length - 2; i>=0; i--) { 
        snake[i+1] = {...snake[i]};
    }
    snake[0].x += direction.x;
    snake[0].y += direction.y;
}


//snake controllers
window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
        if (inputDirection.y !== 0) break
        direction = { x: 0, y: -1 }
        console.log("ArrowUp")
        break
        case 'ArrowDown':
        if (inputDirection.y !== 0) break
        direction = { x: 0, y: 1 }
        break
        case 'ArrowLeft':
        if (inputDirection.x !== 0) break
        direction = { x: -1, y: 0 }
        break
        case 'ArrowRight':
        if (inputDirection.x !== 0) break
        direction = { x: 1, y: 0 }
        break
    }
});

function getInputDirection(){
    inputDirection = direction;
    return direction
}