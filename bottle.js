bottle_img = "";

function preload() {
    bottle_img = loadImage("bottle.jpg");
}

function setup() {
    canvas = createCanvas(500, 250);
    canvas.center();
}

function draw() {
    image(bottle_img, 0, 0, 500, 250);
}

function back() {
    window.location = "home.html";
}