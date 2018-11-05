class Player{
  constructor(x, y, name, number, col){
    this.pos = createVector(x, y);
    this.name = name;
    this.number = number;
    this.col = col;
    this.score = 0;
  }

  display(){
    noStroke();
    fill(this.col);
    textAlign(CENTER);
    textStyle(NORMAL);
    textSize(32);
    text(`${this.name}\t\t${this.score}`, this.pos.x, this.pos.y);
  }
}
