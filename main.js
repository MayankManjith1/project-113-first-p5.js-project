function preload()
{
}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color ="";
}

function draw()
{
    
    image(video, 0, 0, 640, 480);
    tint(tint_color);

    fill(255, 0, 0)
    circle(40, 40, 60);

    fill(0, 255, 0)
    rect(70, 30, 520, 20);

    fill(255, 0, 0)
    circle(600, 40, 60);

    
    fill(0, 255, 0)
    rect(590, 70, 20, 340);

    fill(255, 0, 0)
    circle(600, 440, 60);  

    fill(0, 255, 0)
    rect(40, 430, 530, 20);

    fill(255, 0, 0)
    circle(40, 440, 60);
    
    fill(0, 255, 0)
    rect(30, 70, 20, 340);
}

function take_snapshot()
{
    save('student_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}