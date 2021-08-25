img = "";
status = "";
objects = [];
r = (0);
g = (0);
b = (205);
function preload() {
    img = loadImage('fruitbasket.jpg');

}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector("coccossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : detecting objects";
}

function modelLoaded() {
    console.log("Model Loaded cocossd is loaded")
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw() {
    image(img, 0, 0, 640, 420);

    if (status != "") {
        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : Object Detected";
            document.getElementById("number_of_objects").innerHTML = "Objects Detected are :" + objects.length;
            fill(r,g,b);
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + "" + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke(r,g,b);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}
function change(){
    r = random(255);
    g = random(255);
    b = random(255);
}
function back(){
    window.location.replace("index.html");
}

