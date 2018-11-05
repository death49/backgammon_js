class Triangle{
  constructor(index, x, y, side){
    this.pos = createVector(x, y);
    this.side = side;
    this.index = index;
    this.checkersNum = [];
    this.col = '-';
  }

  set(checkersNum, col){
    this.checkersNum = checkersNum;
    this.col = col;
  }

  display(){
    noStroke();
    if (this.col == 'R'){
      fill(220, 0, 0);
    }
    else{
      fill(0);
    }
    var y = this.pos.y;
    if (this.side == 'up'){
      for (let i = 0; i < this.checkersNum; i++){
        rect(this.pos.x, y, CHECKER_DIAMETER, CHECKER_DIAMETER, 100);
        y += CHECKER_DIAMETER;
      }
    }
    else{
      for (let i = 0; i < this.checkersNum; i++){
        rect(this.pos.x, y, CHECKER_DIAMETER, CHECKER_DIAMETER, 100);
        y -= CHECKER_DIAMETER;
      }
    }
  }
}
