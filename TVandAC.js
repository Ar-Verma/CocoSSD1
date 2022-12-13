tv_img = "";

function preload() {
    tv_img = loadImage("TVandAC.jpg");
}

function setup() {
    canvas = createCanvas(500, 250);
    canvas.center();
}

function draw() {
    image(tv_img, 0, 0, 500, 250);
}

function back() {
    window.location = "home.html";
}