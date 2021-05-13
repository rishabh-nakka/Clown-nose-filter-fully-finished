var head_x=""
var head_y=""
var clown_nose_x=""
var clown_nose_y=""
var nose_x="";
var nose_y="";
var cownboy_hat="";
function preload(){
    clown_nose=loadImage("https://i.postimg.cc/nL8JVh8F/476-4761771-circle-hd-png-download-removebg-preview.png")
    cownboy_hat=loadImage("https://i.postimg.cc/PxR83RVF/pngtree-male-cowboy-hat-with-front-tie-rope-png-image-3053578-removebg-preview.png")
}
function setup(){
   canvas=createCanvas(400,400)
    canvas.center()
    video=createCapture(VIDEO)
    video.size(400,400)
    video.hide()
    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on("pose",gotPoses)
}
function modelLoaded(){
    console.log("YAY IT'S WORKING")
}
function draw(){
    image(video,0,0,400,400)
    image(clown_nose,clown_nose_x,clown_nose_y,60,60)
    image(cownboy_hat,head_x,head_y,240,220)
}
function snap(){
    save("downloads.png");
}
function gotPoses(result){
    if(result.length>0){
        console.log(result);
        nose_x=result[0].pose.nose.x
        clown_nose_x=nose_x-30
        nose_y=result[0].pose.nose.y
        clown_nose_y=nose_y-30
        head_x=nose_x-120
        head_y=nose_y-180
        console.log(nose_x)
        console.log(nose_y)
    }
}
