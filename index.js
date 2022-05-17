const snakeSpeed = 2;
const snake = [
    {x:8, y:8},
    {x:9, y:8},
    {x:10, y:8}


];




function showSnake() {
    snake.forEach((seg) => {
        let snakeSegment = document.createElement('div');
        snakeSegment.style.gridRowStart = seg.y;
        snakeSegment.style.gridColumnStart = seg.x;
        snakeSegment.classList.add('head');
        playground.appendChild(snakeSegment);
    })
}

showSnake()

function move(){
    for (let i = snake.length - 2; i >= 0; i-- ){
        snake[i + 1] = snake[i]
    }
    snake[0].x += 0;
    snake[0].y += 1;
};

move()