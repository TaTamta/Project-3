let direction = {x:0, y:0};
let score = 0;
let snake = [{x:8, y:8}];
let food = {x:5, y:4}
const playground = document.getElementById('board')
let width = 15;
let height = 15;
let startbutton = document.querySelector('startGame')
let lastInputDirection = { x: 0, y: 0 };
import { speed } from './config.js'

setInterval(mainGame, speed);

//snake Death versions 
function isDead(snk){
    for (let i = 0; i < snake.length; i++) {
        if (snk[i].x === snk[0].x && snk[i].y === snk[0].y ){
            return true;
        }
    }

    if(snk[0].x >=15 || snk[0].x <=0 || snk[0].y >= 15 || snk[0].y <=0  ){
        return true;
    }
    return false;
}

function mainGame(){
    if (isDead(snake)){
        clearInterval
    }
  
    move()

    eatFood()   

    showSnake()
    
    showFood()
    
}
    


function move(){
    playground.innerHTML='';
    for (let i = snake.length - 2; i>=0; i--) { 
        snake[i+1] = {...snake[i]};
    }
    snake[0].x += direction.x;
    snake[0].y += direction.y;
}


window.addEventListener('keydown', e => {
switch (e.key) {
    case 'ArrowUp':
    if (lastInputDirection.y !== 0) break
    direction = { x: 0, y: -1 }
    console.log("ArrowUp")
    break
    case 'ArrowDown':
    if (lastInputDirection.y !== 0) break
    direction = { x: 0, y: 1 }
    break
    case 'ArrowLeft':
    if (lastInputDirection.x !== 0) break
    direction = { x: -1, y: 0 }
    break
    case 'ArrowRight':
    if (lastInputDirection.x !== 0) break
    direction = { x: 1, y: 0 }
    break
}
});



function eatFood(){
    if(snake[0].y === food.y && snake[0].x === food.x){
        snake.unshift({x: snake[0].x + direction.x, y: snake[0].y + direction.y});
        food = {x: Math.floor(Math.random() * width) + 1,
            y: Math.floor(Math.random() * width) + 1};
    }
}

function showSnake(){
    snake.forEach((seg, index) => {
        let snakeSegment = document.createElement('div');
        snakeSegment.style.gridRowStart = seg.y;
        snakeSegment.style.gridColumnStart = seg.x;
        snakeSegment.classList.add('head');

        if (index === 0){
            snakeSegment.classList.add('head');
        }
        else{
            snakeSegment.classList.add('snakeBody');
        }
        playground.appendChild(snakeSegment)
    });
}

function showFood(){
    let foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food')
    board.appendChild(foodElement);       
}