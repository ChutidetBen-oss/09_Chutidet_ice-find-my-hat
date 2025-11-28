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
}


function moveRight() {
	if (playerCol < colLength - 1) {
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

function movedown() {
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


// this playing === true
while (playing ===true ) {
	if(move ==="HAT"){
		console.log("You can found HAT You won !!!");
		playing = false;
	} else if ( move === "HOLE"){
		console.log("You fall HOLE YOU LOSE 😭");
		playing = false;
	} else{
			if (input === "w") {
			moveUp()
			console.log("You can move");
		} else if (input === "s") {
			movedown()
			console.log("You can move");
		} else if (input === "d") {
			moveRight()
			console.log("You can move");
		} else if (input === "a") {
			moveLeft()
			console.log("You can move");
		} else {
			console.log("Game over");
			playing = false;
		}
	}
} i++ ;

