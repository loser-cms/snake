// const canvas = document.querySelector('canvas');
// const context = canvas.getContext('2d');

// const ground = new Image();
// ground.src = 'page.jpg';

// const foodImg = new Image();
// foodImg.src = 'fiid.png';

// let box = 64;

// let score = 0;

// let food = {
//     x: parseInt(Math.random() * 6 + 1) * box,
//     y: parseInt(Math.random() * 8 + 1) * box
// }

// let snake = [];
// snake[0] = {
//     x: 3 * box,
//     y: 3 * box
// }

// let key;

// document.addEventListener('keydown', direction);
// function direction(e) {
//     if (e.keyCode == 37 && key != 'right') {
//         key = "left";
//     }
//     else if (e.keyCode == 38 && key != 'up') {
//         key = "down";
//     }
//     else if (e.keyCode == 39 && key != 'left') {
//         key = "right";
//     }
//     else if (e.keyCode == 40 && key != 'down') {
//         key = "up";
//     }
// }



// function eatTail(head, arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (head.x == arr[i].x && head.y == arr[i].y) {
//             clearInterval(game)
//         }
//     }
// }


// function drawObjects() {
//     context.drawImage(ground, 0, 0);
//     context.drawImage(foodImg, food.x, food.y);

//     for (let i = 0; i < snake.length; i++) {
//         context.fillStyle = "blue";
//         context.fillRect(snake[i].x, snake[i].y, box, box)
//     }

//     context.fillStyle = "blue";
//     context.font = "40px Impact";
//     context.fillText(`score ${score}`, box, box);


//     let snakeX = snake[0].x;
//     let snakeY = snake[0].y;


//     if (snakeX == food.x && snakeY == food.y) {
//         score++;
//         food = {
//             x: parseInt(Math.random() * 6 + 1) * box,
//             y: parseInt(Math.random() * 8 + 1) * box
//         }
//     }
//     else {
//         snake.pop();
//     }

//     if (snakeX < box || snakeX > box * 6 || snakeY < box || snakeY > box * 8) {
//         clearInterval(game)
//     }

//     if (key == 'left') {
//         snakeX -= box;
//     }
//     if (key == 'right') {
//         snakeX += box;
//     }
//     if (key == 'up') {
//         snakeY += box;
//     }
//     if (key == 'down') {
//         snakeY -= box;
//     }


//     let newHead = {
//         x: snakeX,
//         y: snakeY
//     }

//     eatTail(newHead, snake)

//     snake.unshift(newHead);
// }

// let game = setInterval(drawObjects, 300);



const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let box = 20;

let food = {
    x: parseInt((Math.random() * 28 + 1)) * box,
    y: parseInt((Math.random() * 18 + 2)) * box
}

let snake = [];
snake[0] = {
    x: box * 5,
    y: box * 5
}

let key;
let score = 0;

document.addEventListener('keydown', direction);
function direction(e) {
    if (e.keyCode == 37 && key != 'right') {
        key = "left";
    }
    else if (e.keyCode == 38 && key != 'up') {
        key = "down";
    }
    else if (e.keyCode == 39 && key != 'left') {
        key = "right";
    }
    else if (e.keyCode == 40 && key != 'down') {
        key = "up";
    }
}

function eatTail(head, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (head.x == snake[i].x && head.y == snake[i].y) {
            clearInterval(game)
        }
    }
}

function drawField() {
    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, 600, 400);

    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, box, box);

    ctx.fillStyle = 'white';
    ctx.font = '30px Impact';
    ctx.fillText(`SCORE: ${score}`, box, 2 * box);

    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = 'yellow';
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
    }

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (snake[0].x == food.x && snake[0].y == food.y) {
        score++;
        food = {
            x: parseInt((Math.random() * 28 + 1)) * box,
            y: parseInt((Math.random() * 20 + 2)) * box
        }
    }
    else {
        snake.pop()
    }




    if (key == 'left') {
        snakeX -= box;
    }
    if (key == 'right') {
        snakeX += box;
    }
    if (key == 'up') {
        snakeY += box;
    }
    if (key == 'down') {
        snakeY -= box;
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    }
    eatTail(newHead, snake)

    snake.unshift(newHead);

    if (newHead.x < 0) {
        newHead.x = 30 * box
    }
    if (newHead.x > 30 * box) {
        newHead.x = 0;
    }
    if (newHead.y > 20 * box) {
        newHead.y = 0;
    }
    if (newHead.y < 0) {
        newHead.y = 20 * box;
    }
    // console.log(newHead.y)
}

let game = setInterval(drawField, 150)
