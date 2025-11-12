let paletaFiambre = ["#F22727", "#F288A4", "#F26F63"];
let b = [];
let bocata1;

let rotacionMin = -120;
let rotacionMax = 120;

function setup() {
  createCanvas(displayWidth, displayHeight,true);
  for (let i = 0; i < 20; i++) {
    b[i] = new Bocata(240, 120, 200, 150, random(width), random(height), random(rotacionMin,rotacionMax));
  }

  bocata1 = new Bocata(240, 120, 200, 150, mouseX, mouseY, 0);
}

function draw() {
  background("#FFC421");

  for (let i = 0; i < b.length; i++) {
    b[i].show();
  }

  bocata1.movex = mouseX;
  bocata1.movey = mouseY;
  bocata1.show();
}

function mousePressed() {
  if (mouseButton === LEFT) {
    b = [];
    for (let i = 0; i < 20; i++) {
      b[i] = new Bocata(240, 120, 200, 150, random(width), random(height),random(rotacionMin,rotacionMax));
    }
    bocata1 = new Bocata(240, 120, 200, 150, mouseX, mouseY,random(-5,5));
  }
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

class Bocata {
  constructor(x, y, w, h, movex, movey,r) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.movex = movex;
    this.movey = movey;
    this.r = r;
    
    this.fiambres = this.crearFiambre();
  }

  crearFiambre() {
    let fiambres = [];
    for (let i = 0; i < 20; i++) {
      let fx = this.x + random(0, this.w);
      let fy = this.y + random(0, this.h);
      let colorFiambre = random(paletaFiambre);
      fiambres.push({ x: fx, y: fy, c: colorFiambre });
    }
    return fiambres;
  }

  show() {
    push();
    angleMode(DEGREES);
    translate(this.movex - this.w - 10, this.movey - this.h - 40);
    rotate(this.r);
    noStroke();

    // fiambre
    for (let f of this.fiambres) {
      fill(f.c);
      circle(f.x, f.y, 70);
    }

    // pan
    fill("#8F3F29");
    rect(this.x, this.y, this.w, this.h, 0, 100, 100, 0);

    // bolsa
    fill("#ffffff");
    rect(20, 100, 20, 200);
    rect(40, 100, 200, 200);
    triangle(240, 100, 260, 120, 240, 150);
    triangle(240, 150, 260, 170, 240, 200);
    triangle(240, 200, 260, 220, 240, 250);
    triangle(240, 250, 260, 270, 240, 300);

    // texto
    fill("#000000");
    textAlign(CENTER);
    textSize(70);
    text("C", 150, 220);
    pop();
  }
}
