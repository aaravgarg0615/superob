img = "";
status = "";
objects = [];
r = (0);
g = (0);
b = (205);
function preload(){
   img = loadImage('desk.jpg');
}
function setup(){
    canvas = createCanvas(380,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    objectDetector = ml5.objectDetector("coccossd",modelLoaded);
    document.getElementById("status").innerHTML = "Status : detecting objects";
}
function modelLoaded(){
    console.log("Model Loaded cocossd is loaded")
    status = true;
    
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}
function draw(){
    image(video,0,0,380,380);

     if(status != ""){
        
        objectDetector.detect(video,gotResult);
        for(i=0; i<objects.length; i++){
            document.getElementById("status").innerHTML = "Status : Object Detected";
            document.getElementById("number_of_objects").innerHTML = " Objects Detected are : " + objects.length;

            fill(r,g,b);
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + "" + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke(r,g,b);
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)
        }
     }
}
function change(){
    r = random(255);
    g = random(255);
    b = random(255);
}