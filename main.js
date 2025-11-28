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
	console.log(board);
}


function moveRight(){
	if (playerCol <= colLength) {
		playerCol++;
		console.log("You move right");
	} else {
		console.log("Invalid move");
	}
}

function moveLeft(){
	if (playerCol >= 0){
		playerCol--;
		console.log("You move Left");
	} else {
		console.log("Invaid move");
	}
}

function moveUp(){
	if (playerRow <= 0 ){
		playerRow++;
		console.log("You move UP");
	} else {
		console.log("Invaid move");
	}
}

function movedown(){
	if (playerRow >= rowLength  ){
		playerRow--;
		console.log("You move down");
	} else {
		console.log("Invaid move");
	}
}



// Game play loop
printBoard(board);
const input = prompt("Which way? (w/a/s/d): ");
console.log(input);