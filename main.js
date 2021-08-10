function preload()
{
      
}

function setup()
{
    canvas = createCanvas(600,400);
    canvas.position(600,500);
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("MobileNet", modelLoaded);
}

function modelLoaded()
{
    console.log("Model Loaded Succcessfully");
}

function draw()
{
    image(video,0,0,600,400);
    classifier.classify(video,gotResult);
    filter(OPAQUE);

}

function gotResult(error,result)
{
    if(error)
    {
        console.log(error);
    }
    else{
        console.log(result);
        document.getElementById("ob").innerHTML = result[0].label;
        document.getElementById("acc").innerHTML = result[0].confidence;
    }
}

function apply_filter()
{
    image(video,0,0,600,400);
    
}
    