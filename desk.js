desk_img = "";

function preload() {
    desk_img = loadImage("desk.jpg");
}

function setup() {
    canvas = createCanvas(500, 250);
    canvas.center();
}

function draw() {
    image(desk_img, 0, 0, 500, 250);
}

function back() {
    window.location = "home.html";
}