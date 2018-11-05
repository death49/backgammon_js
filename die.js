class Die{
  constructor(x, y, w){
    this.pos = createVector(x, y);
    this.w = w;
    this.result = 0;
  }

  roll(){
    this.result = int(random() * 6 + 1);
  }

  reset(){
    this.result = 0;
  }

  displayDots(){
    noStroke();
    fill(0);
    if (this.result == 1 || this.result == 5){
      ellipse(this.pos.x + this.w / 2, this.pos.y + this.w / 2, 6, 6);
    }
    if (this.result == 2){
      ellipse(this.pos.x + this.w * 0.75, this.pos.y + this.w * 0.25, 6, 6);
      ellipse(this.pos.x + this.w * 0.25, this.pos.y + this.w * 0.75, 6, 6);
    }
    if (this.result == 3){
      ellipse(this.pos.x + this.w * 0.75, this.pos.y + this.w * 0.25, 6, 6);
      ellipse(this.pos.x + this.w * 0.5, this.pos.y + this.w * 0.5, 6, 6);
      ellipse(this.pos.x + this.w * 0.25, this.pos.y + this.w * 0.75, 6, 6);
    }
    if (this.result == 4 || this.result == 5 || this.result == 6){
      ellipse(this.pos.x + this.w * 0.25, this.pos.y + this.w * 0.25, 6, 6);
      ellipse(this.pos.x + this.w * 0.25, this.pos.y + this.w * 0.75, 6, 6);
      ellipse(this.pos.x + this.w * 0.75, this.pos.y + this.w * 0.25, 6, 6);
      ellipse(this.pos.x + this.w * 0.75, this.pos.y + this.w * 0.75, 6, 6);
    }
    if (this.result == 6){
      ellipse(this.pos.x + this.w * 0.25, this.pos.y + this.w * 0.5, 6, 6);
      ellipse(this.pos.x + this.w * 0.75, this.pos.y + this.w * 0.5, 6, 6);
    }
  }

  display(){
    strokeWeight(1);
    stroke(0);
    fill(255);
    rect(this.pos.x, this.pos.y, this.w, this.w, 5);
    this.displayDots(this.result);
  }
}
