class Game{
  constructor(){
    this.board = new Board(BOARD_X, BOARD_Y, BOARD_WIDTH, BOARD_HEIGHT);
    this.setDice();
    this.setPlayers();
    this.turn = 0;
    this.isGameRoutine = false;
    this.diceRolled = false;
    this.movesToPlay = 0;
  }

  display(){
    this.displayBoard();
  	this.displayPlayers();
    if (this.diceRolled){
      this.displayPlayMessage();
    }
    else{
      if (this.isGameRoutine){
        this.displayRollDiceMessage(msg);
      }
      else{
        this.displayRollDieMessage(msg);
      }
    }
    this.displayDice();
  }

  displayBoard(){
    this.board.display();
  }

  displayPlayers(){
    for (let player of this.players){
      player.display();
    }
  }

  setDice(){
  	this.dice = [];
  	this.dice.push(new Die(SCREEN_WIDTH * 0.75, SCREEN_HEIGHT * 0.25, DICE_WIDTH));
  	this.dice.push(new Die(SCREEN_WIDTH * 0.75, SCREEN_HEIGHT * 0.25 + DICE_WIDTH + 10, DICE_WIDTH));
  }

  setPlayers(){
    this.players = [];
    this.players.push(new Player(200, 50, 'Player1', 1, color(240, 0, 0)));
    this.players.push(new Player(700, 50, 'Player2', 2, color(0)));
  }

  displayDice(){
    for (let die of this.dice){
      die.display();
    }
  }

  rollDie(){
    this.dice[this.turn].roll();
    if (this.dice[0].result > 0 && this.dice[1].result > 0){
      let startingPlayerIndex = this.setFirstTurn();
      if (startingPlayerIndex > -1){
        console.log(`${this.players[this.turn].name} starts.`);
        rollDieButton.hide();
        rollDiceButton.show();
      }
    }
    else{
      this.nextTurn();
    }
  }

  setFirstTurn(){
    if (this.dice[0].result > this.dice[1].result){
      this.turn = 0;
      this.isGameRoutine = true;
      return 0;
    }
    else if (this.dice[0].result < this.dice[1].result){
      this.turn = 1;
      this.isGameRoutine = true;
      return 1;
    }
    else{
      return -1;
    }
  }

  isDiceDouble(){
    return this.dice[0].result == this.dice[1].result;
  }

  rollDice(){
  	for (let die of this.dice){
      die.roll();
  	}
    this.diceRolled = true;
    this.movesToPlay = this.isDiceDouble() ? 4 : 2;
    console.log(this.movesToPlay);
  }

  displayRollDieMessage(){
    displayMessage(`${this.players[this.turn].name}: Roll.`, this.players[this.turn].col);
  }

  displayRollDiceMessage(){
    displayMessage(`${this.players[this.turn].name}: Roll dice.`, this.players[this.turn].col);
  }

  displayPlayMessage(){
    let r1 = this.dice[0].result;
    let r2 = this.dice[1].result;
    displayMessage(`${this.players[this.turn].name}: Play dice: ${r1} , ${r2}`, this.players[this.turn].col);
  }

  nextTurn(){
    this.turn = 1 - this.turn;
  }
}
