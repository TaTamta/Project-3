const playground = document.getElementById('board');
export let snake = [{x:8, y:8}];

export function showSnake(){
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

