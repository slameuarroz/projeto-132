var img=""
var estado=""
function draw(){
    image(img,0,0,640,420);
    fill(255,0,0);
    text("cachorro",45,75);
    noFill()
    stroke(255,0,0);
    rect(30,60,450,350)
    //gato
    fill(255,0,0);
    text("gato",320,120);
    noFill()
    stroke(255,0,0);
    rect(300,90,270,320)
    

}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd",modelLoad);
    document.getElementById("status").innerHTML="status:Detectando objetos";
}
function preload(){
    img=loadImage("dog_cat.jpg");
}
function modelLoad(){
    console.log("modelo carregado");
    estado=true;
    objectDetector.detect(img,gotResults)
}
function gotResults(error,results){
    if (error){
        console.error(error)
    }else{
        console.log(results)
    }
}