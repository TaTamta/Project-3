const playground = document.getElementById('board');
import {snake} from './index.js'

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

