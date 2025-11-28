"use strict";
import promptSync from "prompt-sync";

const prompt = promptSync({ sigint: true });

// Board tiles
const PLAYER = "*";
const EMPTY = "░";
const HOLE = "O";
const HAT = "^";


// Hardcoded board
let board = [
	[PLAYER, EMPTY, HOLE],
	[EMPTY, HOLE, EMPTY],
	[EMPTY, HAT, EMPTY],
];
const rowLength = board.length;
const colLength = board[0].length;
const move = [];

// Game state
let playerRow = 0;
let playerCol = 0;
let playing = true;
move.push(board[playerRow][playerCol]);
// Print board
function printBoard(board) {
	console.clear(); // call console.clear() before print each move
	board.forEach(row => console.log(row.join("")));
	for ( let row of board){
		console.log(row(""))
	}
}


function moveRight() {
	if (playerCol < colLength ) {
		playerCol++;
		move.push(board[playerRow][playerCol]);
	} else {
		console.log("Invalid move");
	}
}

function moveLeft() {
	if (playerCol > 0) {
		playerCol--;
		move.push(board[playerRow][playerCol]);
	} else {
		console.log("Invaid move");
	}
}

function moveUp() {
	if (playerRow > 0) {
		playerRow--;
		move.push(board[playerRow][playerCol]);
	} else {
		console.log("Invaid move");
	}
}

function moveDown() {
	if (playerRow < rowLength) {
		playerRow++;
		move.push(board[playerRow][playerCol]);
	} else {
		console.log("Invaid move");
	}
}



// Game play loop
printBoard(board);
const input = prompt("Which way? (w/a/s/d): ");
console.log(input);
console.log(move);

while (playing){
	if (move === EMPTY){
		console.log("You can walk");
		playing = true;
	} else if (move === HOLE){
		console.log("GAME OVER you falling THE HOLE");
		playing = false;
	} else if ( move === HAT ){
		console.log("YOU WON");
		playing = false;
	} else {
		console.log("You lose");
		playing = false;
	}
};
