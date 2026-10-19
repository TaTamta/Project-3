# Snake — Leaderator Project 3

The classic Snake game built with **vanilla JavaScript (ES modules)**, HTML and CSS Grid. The third project of Bank of Georgia's Leaderator front-end bootcamp (2022).

## How to play

- Press **Start** to begin.
- Steer with the **arrow keys**.
- Eat the food to grow and score a point.
- Hitting a wall or your own tail ends the round and resets the snake.

## How it works

- The board is an 18×18 **CSS Grid**; the snake and food are positioned with `grid-row-start` and `grid-column-start`.
- A fixed-interval game loop (`setInterval`) moves the snake, checks collisions, and re-renders each tick.
- Food respawns at a random cell that isn't covered by the snake.
- Speed and board size live in `config.js`.

## Project structure

```
index.html   page and board
index.js     game loop, movement, collisions, food, score
snake.js     renders the snake
config.js    speed and board size
style.css
```

## Running locally

ES modules need to be served over HTTP:

```bash
git clone https://github.com/TaTamta/Project-3.git
cd Project-3
npx serve .
```

Or use the VS Code **Live Server** extension.

## Author

**Tamta Tavartkiladze** — [GitHub](https://github.com/TaTamta)
