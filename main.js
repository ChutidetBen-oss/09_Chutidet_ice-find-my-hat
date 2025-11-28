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
const rows = board.length;
const cols = board[0].length;
const move = [];

// Game state
let playerRow = 0;
let playerCol = 0;
let playing = true;
// move.push(board[playerRow][playerCol]);
// Print board
// function printBoard(board) {
// 	console.clear(); // call console.clear() before print each move
// 	board.forEach((row) => console.log(row.join("")));
// }
function printBoard(board){
	console.clear();
	const myboard = board.map(row => [...row]);
	myboard[playerRow][playerCol] = PLAYER
	const drawingboard = myboard.map( row => row.join("")).join("\n");
	console.log(drawingboard);
}


function moveRight() {
	if (playerCol < cols-1) {
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
	if (playerRow < rows -1) {
		playerRow++;
		move.push(board[playerRow][playerCol]);
	} else {
		console.log("Invaid move");
	}
}

// Game play loop
// printBoard(board);
function keyboard(input){
	if (input === "w") {
	moveUp();
}	else if (input === "s") {
	moveDown();
}	else if (input === "a") {
	moveLeft();
}	else if (input ==="d"){
	moveRight();
}	else {
	console.log("i dont have key");
}
}
// if (input === "w") moveUp();
// if (input === "s") moveDown();
// if (input === "a") moveLeft();
// if (input === "d") moveRight();
// console.log(input);
// console.log(move);

while (playing) {
	printBoard(board);
	const input = prompt("Which way? (w/a/s/d): ");
	keyboard(input)
	const tile = board[playerRow][playerCol];
	if (tile === EMPTY) {
		console.log("You can walk");
	} else if (tile === HOLE) {
		console.log("GAME OVER you falling THE HOLE");
		playing = false;
		break;
	} else if (tile === HAT) {
		console.log("YOU WON");
		playing = false;
		break;
	} else {
		console.log("You lose");
		playing = false;
		break;
	}
}
