var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

// Set canvas size to full window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Flower class
function Flower(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.speed = Math.random() * 5 + 1; // Random speed for each flower

    this.draw = function () {
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
    }

    this.update = function () {
        this.y += this.speed; // Move the flower down
        if (this.y > canvas.height + this.size) {
            this.y = 0 - this.size; // Reset flower position when it goes off the screen
            this.x = Math.random() * canvas.width; // Randomize X position
        }
        this.draw();
    }
}

var flowers = [];

// Create flowers
for (var i = 0; i < 50; i++) {
    var x = Math.random() * canvas.width;
    var y = Math.random() * canvas.height;
    var size = Math.random() * 5 + 3; // Random size between 3 and 8
    var color = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
    flowers.push(new Flower(x, y, size, color));
}

function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < flowers.length; i++) {
        flowers[i].update();
    }
}

animate();