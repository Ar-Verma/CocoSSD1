bed_img = "";

function preload() {
    bed_img = loadImage("bed.jpg");
}

function setup() {
    canvas = createCanvas(500, 250);
    canvas.center();
}

function draw() {
    image(bed_img, 0, 0, 500, 250);
}

function back() {
    window.location = "home.html";
}