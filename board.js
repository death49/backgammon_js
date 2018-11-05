class Board{
  constructor(x, y, w, h){
    this.pos = createVector(x, y);
    this.w = w;
    this.h = h;
    this.initBoard();
  }

  initBoard(){
    this.triangles = new Array(TRIANGLES_NUM);
    var x = this.pos.x;
    var y = this.pos.y;
    var i = 0;
    for (i = 0; i < TRIANGLES_NUM / 2; i++){
      this.triangles[i] = new Triangle(i + 1, x, y, 'up');
      if (i == 5){
        x += 2 * CHECKER_DIAMETER;
      }
      else{
        x += CHECKER_DIAMETER;
      }
    }
    x = this.pos.x + BOARD_WIDTH - CHECKER_DIAMETER;
    y = this.pos.x + BOARD_HEIGHT - CHECKER_DIAMETER;
    for (; i < TRIANGLES_NUM; i++){
      this.triangles[i] = new Triangle(i + 1, x, y, 'down');
      if (i == 17){
        x -= 2 * CHECKER_DIAMETER;
      }
      else{
        x -= CHECKER_DIAMETER;
      }
    }

    this.triangles[0].set(2, 'B');
    this.triangles[5].set(5, 'R');
    this.triangles[7].set(3, 'R');
    this.triangles[11].set(5, 'B');
    this.triangles[12].set(5, 'R');
    this.triangles[16].set(3, 'B');
    this.triangles[18].set(5, 'B');
    this.triangles[23].set(2, 'R');
  }

  setTriangle(index, checkersNum, col){
    this.triangles[index].set(checkersNum, col);
  }

  display(){
    noStroke();
    fill(200);
    rect(this.pos.x, this.pos.y, this.w, this.h);

    strokeWeight(1);
    stroke(0);
    // upper triangles
    let x = this.pos.x;
    let y = this.pos.y;
    for (let i = 0; i < 12; i++){
      if (i % 2 == 1){
        fill(50);
      }
      else{
        fill(150);
      }
      triangle(x, y, x + CHECKER_DIAMETER, y, x + CHECKER_RADIUS, y + 5 * CHECKER_DIAMETER);
      if (i == 5){
        x += 2 * CHECKER_DIAMETER;
      }
      else{
        x += CHECKER_DIAMETER;
      }
    }

    // bottom triangles
    x = this.pos.x;
    y = this.pos.y;
    for (let i = 0; i < 12; i++){
      if (i % 2 == 0){
        fill(50);
      }
      else{
        fill(150);
      }
      triangle(x, y + BOARD_HEIGHT, x + CHECKER_DIAMETER, y + BOARD_HEIGHT, x + CHECKER_RADIUS, y + 6 * CHECKER_DIAMETER);
      if (i == 5){
        x += 2 * CHECKER_DIAMETER;
      }
      else{
        x += CHECKER_DIAMETER;
      }
    }

    rect(this.pos.x + 6 * CHECKER_DIAMETER, this.pos.y, CHECKER_DIAMETER, BOARD_HEIGHT);

    for (let i = 0; i < this.triangles.length; i++){
      this.triangles[i].display();
    }
  }
}
