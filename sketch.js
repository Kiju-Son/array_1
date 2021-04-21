let x = [];
let y = [];

function setup(){
    createCanvas(windowWidth, windowHeight);
    
    for(let i=0; i<1000; i++){
        x[i] = random(width);
        y[i] = random(height);
    }

}

function draw() {
    background(62, 180, 137, 5);

    for(let i=0; i<1000; i++){
        point(x[i], y[i]);
        x[i] += random(-10, 20);
        y[i] -= 2;
        
    }
}
