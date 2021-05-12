const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext("2d");
const scale = 10;

var points = 0;
const points_display = document.getElementById("points");

const rows = canvas.height / scale;
const columns = canvas.width / scale;


 var snake;

    (function setup(){
        snake = new Snake();
        fruit = new Fruit();
        fruit.pickLocation();
        
    
    
        window.setInterval(()=> {
            ctx.clearRect(0,0, canvas.width, canvas.height);
            fruit.draw();
            snake.update();
            snake.draw();
    
            if (snake.eat(fruit)) {
                
                fruit.pickLocation();
                fruit.draw();
                points+= 1;
                points_display.innerHTML = points;
            }

             if (snake.isDead()) {
                 points = 0;
                 points_display.innerHTML = points;
                 snake = new Snake();
                 fruit = new Fruit();
                 fruit.pickLocation();
             }
        },150);
    }())
 



window.addEventListener('keydown', ((evt)=> {
    const direction = evt.key.replace("Arrow", '');
    snake.changeDirection(direction);

}))