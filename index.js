const snakeSpeed = 2;
let direction = {x:0, y:0};
let score = 0;
const snake = [{x:8, y:8}];
let food = {x:5, y:4}
const playground = document.getElementById('board')
let width = 15;
let height = 15
let startbutton = document.querySelector('startGame')


showSnake();
showFood();

function mainGame(){
    move();
    controlSnake();
    checkFood();
    if(isDead){
        clearInterval
    }
}

setInterval(mainGame, 1000)




function showSnake() {
    snake.forEach((seg) => {
        let snakeSegment = document.createElement('div');
        snakeSegment.style.gridRowStart = seg.y;
        snakeSegment.style.gridColumnStart = seg.x;
        snakeSegment.classList.add('head');
        playground.appendChild(snakeSegment);

        for(let i = 0; i < snake.length; i++){
            if (i === 0){
                snakeSegment.classList.add('head');
            }
            else{
                snakeSegment.classList.add('snake');
            }

        }
    })        
}



function showFood(){
    let foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food')
    board.appendChild(foodElement);
}




function move(){
    for (let i = snake.length - 2; i >= 0; i-- ){
        snake[i + 1] = snake[i]
    }
    snake[0].x += 0;
    snake[0].y += 1;
};


//snake Death versions 
function isDead(snake){
    for (let i = 0; i < snake.length; i++) {
        if (snake[i].y === snake[0].y && snake[i].x === snake[0].x ){
            return true
        }
    }

    if(snake[0].x <= 0 || snake[0].x >= width || snake[0].y <= 0 || snake[0].y >= height ){
        return true
    }
    return false
}


function checkFood(){
    if(snake[0].y === food.y && snake[0].x === food.x){
        score +=1;
        score.innerHTML = 'Score: ' + score;
        snake.unshift({x: snake[0].x + direction.x, y: snake[0].y + direction.y});
        food = {x: Math.floor(Math.random() * width) + 1,
            y: Math.floor(Math.random() * width) + 1};
    }

    for (let i = snake.length - 2; i>=0; i--) { 
        snake[i+1] = {...snake[i]};
    }
    snake[0].x += direction.x;
    snake[0].y += direction.y;
}



let lastInputDirection = { x: 0, y: 0 }

function controlSnake(){

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
    })
}

// let interval = 0;
// let intervalTime = 0;

// function start(){
//     intervalTime =1000
//     interval = setInterval(mainGame, intervalTime)
// }

// function mainGame(){
//     if(isDead){
//         return clearInterval(interval)
//     }
//     showFood();
//     showSnake();
//     move();
//     checkFood();
//     controlSnake()

//     document.addEventListener('keyup', controlSnake);
//     startbutton.addEventListener('click', start)
// }

// document.addEventListener('DOMContentLoaded', () => {
//     start();
//     mainGame();
// })

