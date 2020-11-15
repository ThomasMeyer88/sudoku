import { Injectable } from '@angular/core';
import { BoardPiece } from './models/boardPiece';

@Injectable({
  providedIn: 'root'
})
export class SukokuLogicService {
  constructor() { }

  generateBoard() {
    let difficulty = 0;
 
  }

  buildBoard(): Array<Array<BoardPiece>> {
    let board: Array<Array<BoardPiece>> = [[], [], [], [], [], [], [], [], []];
    board = this.fillBoard(board);
    return board;
  }

  fillBoard(board: Array<Array<BoardPiece>>): Array<Array<BoardPiece>> {
    for (let i = 0; i < 3; i++) {
      for (let x = 0; x < 3; x++) {
        // 012 345 678
        board = this.generateMatrix(board, [], [], [], i*3, x*3);
      }
    }
    return board;
  }

  generateMatrix(board: Array<Array<BoardPiece>>, matUsed: Array<number>, colUsed: Array<number>, 
    rowUsed: Array<number>, startRow: number, startCol: number): Array<Array<BoardPiece>> {
    let potentialValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = startRow; i < startRow+3; i++) {
      for (let x = startCol; x < startCol+3; x++) {
        console.log(i, x);
        let rand = this.randomValue(potentialValues.length);
        board[i].push(this.newBoardPiece(potentialValues[rand], false));
        potentialValues.splice(rand, 1);   
        console.log(board);   
      }
    }
    return board;
  }

  newBoardPiece(value: number, visible: Boolean): BoardPiece {
    return {value: value, visible: visible};
  }

  randomValue(length: number): number {
    return Math.floor((Math.random()*(length)));
  }
}
