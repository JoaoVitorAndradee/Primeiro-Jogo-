# Primeiro-Jogo-
Este é meu primeiro projeto de desenvolvimento web, apenas uma demonstração. 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jogo da Cobrinha</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
        }

        .container {
            text-align: center;
        }

        h1 {
            font-size: 2rem;
            margin-bottom: 20px;
        }

        #game-area {
            margin-top: 20px;
            border: 2px solid #333;
            width: 400px; /* Defina o tamanho do campo de jogo */
            height: 400px; /* Defina o tamanho do campo de jogo */
            overflow: hidden; /* Para esconder partes do canvas fora da área delimitada */
        }

        #gameCanvas {
            background-color: #8bea5c;
        }

        #score {
            margin-top: 20px;
            font-size: 1.2rem;
        }

        button {
            margin-top: 20px;
            padding: 10px 20px;
            font-size: 1rem;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Jogo da Cobrinha</h1>
        <div id="game-area">
            <canvas id="gameCanvas" width="400" height="400"></canvas>
        </div>
        <div id="score">Pontuação: <span id="score-value">0</span></div>
        <button id="start-btn">Iniciar Jogo</button>
    </div>

    <script src="script.js"></script>
</body>
</html>
body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f0f0f0;
}

.container {
    text-align: center;
}

h1 {
    font-size: 2rem;
    margin-bottom: 20px;
}

#game-area {

    margin-top: 20px;
}

#gameCanvas {
    border: 2px solid #333;
    background-color: #fff;
}

#score {
    margin-top: 20px;
    font-size: 1.2rem;
}

button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
}

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    const startButton = document.getElementById('start-btn');
    const scoreElement = document.getElementById('score-value');

    const GRID_SIZE = 20;
    const CANVAS_SIZE = 400;
    const INITIAL_SPEED = 200; // milliseconds
    let snake = [{ x: 200, y: 200 }];
    let food = { x: 0, y: 0 };
    let dx = GRID_SIZE;
    let dy = 0;
    let score = 0;
    let gameSpeed = INITIAL_SPEED;
    let gameRunning = false;

    function startGame() {
        snake = [{ x: 200, y: 200 }];
        food = getRandomFoodPosition();
        dx = GRID_SIZE;
        dy = 0;
        score = 0;
        scoreElement.textContent = score;
        gameRunning = true;
        moveSnake();
    }

    function moveSnake() {
        if (!gameRunning) return;

        const head = { x: snake[0].x + dx, y: snake[0].y + dy };

        // Verificar se a cobra atingiu as bordas do campo
        if (head.x < 0 || head.x >= CANVAS_SIZE || head.y < 0 || head.y >= CANVAS_SIZE) {
            gameOver();
            return;
        }

        snake.unshift(head);

        if (head.x === food.x && head.y === food.y) {
            score++;
            scoreElement.textContent = score;
            food = getRandomFoodPosition();
        } else {
            snake.pop();
        }

        clearCanvas();
        drawSnake();
        drawFood();
        setTimeout(moveSnake, gameSpeed);
    }

    function clearCanvas() {
        ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    }

    function drawSnake() {
        snake.forEach(segment => {
            ctx.fillStyle = '#4CAF50';
            ctx.fillRect(segment.x, segment.y, GRID_SIZE, GRID_SIZE);
        });
    }

    function drawFood() {
        ctx.fillStyle = '#f44336';
        ctx.fillRect(food.x, food.y, GRID_SIZE, GRID_SIZE);
    }

    function getRandomFoodPosition() {
        const x = Math.floor(Math.random() * (CANVAS_SIZE / GRID_SIZE)) * GRID_SIZE;
        const y = Math.floor(Math.random() * (CANVAS_SIZE / GRID_SIZE)) * GRID_SIZE;
        return { x, y };
    }

    function gameOver() {
        gameRunning = false;
        alert(`Você perdeu! Pontuação: ${score}`);
    }

    document.addEventListener('keydown', (event) => {
        if (!gameRunning) return;

        const key = event.key;
        if (key === 'ArrowUp' && dy === 0) {
            dx = 0;
            dy = -GRID_SIZE;
        } else if (key === 'ArrowDown' && dy === 0) {
            dx = 0;
            dy = GRID_SIZE;
        } else if (key === 'ArrowLeft' && dx === 0) {
            dx = -GRID_SIZE;
            dy = 0;
        } else if (key === 'ArrowRight' && dx === 0) {
            dx = GRID_SIZE;
            dy = 0;
        }
    });

    startButton.addEventListener('click', startGame);
});
