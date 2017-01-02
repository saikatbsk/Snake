/*
 * TODO:
 *  --> Display score and lives.
 *  --> Restart game when all lives expire.
 *  --> Introduce some artwork and sound.
 */

var snake;
var food;
var Scale = 12;
var fps = 5;

function setup() {
    createCanvas(480, 480);
    snake = new Snake();
    food = new Food();
    frameRate(fps);
}

function draw() {
    background(51, 51, 51);

    snake.isdead();
    snake.update();
    snake.show();
    if (snake.eats(food)) {
        food.pickLocation();
    }
    food.show();
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        snake.direction(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        snake.direction(0, 1);
    } else if (keyCode === LEFT_ARROW) {
        snake.direction(-1, 0);
    } else if (keyCode === RIGHT_ARROW) {
        snake.direction(1, 0);
    }
}
