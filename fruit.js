fruit_img = "";

function preload() {
    fruit_img = loadImage("fruit.jpg");
}

function setup() {
    canvas = createCanvas(500, 250);
    canvas.center();
}

function draw() {
    image(fruit_img, 0, 0, 500, 250);
}

function back() {
    window.location = "home.html";
}