var game;
var rollDieButton;
var rollDiceButton;
var msg;


function setup(){
	createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
	background(100);
	resetGame();
	game.display();
	setButtons();
}

function draw(){
	// background(0);
}


function resetGame(){
	game = new Game();
}

function setButtons(){
	rollDiceButton = createButton('Roll Dice');
	rollDiceButton.style('font-size', '24px');
	rollDiceButton.position(BOARD_X + BOARD_WIDTH + 100, height / 2);
	rollDiceButton.mousePressed(rollDice);
	rollDiceButton.hide();

	rollDieButton = createButton('Roll Die');
	rollDieButton.style('font-size', '24px');
	rollDieButton.position(BOARD_X + BOARD_WIDTH + 300, height / 2);
	rollDieButton.mousePressed(rollDie);
}

function displayMessage(msg, msg_color){
	noStroke();
	fill(msg_color);
	textSize(32);
	text(msg, width * 0.5, height * 0.75);
}

function updateGame(){
	background(100);
	game.display();

}

function rollDie(){
	game.rollDie();
	updateGame();
}

function rollDice(){
	game.rollDice();
	rollDiceButton.attribute('disabled', true);
	updateGame();
}

function keyPressed(){
	if (key == 'Q'){
		rollDie();
	}
	if (key == 'R'){
		rollDice();
	}
}
