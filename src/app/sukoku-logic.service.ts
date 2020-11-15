import { Injectable } from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';
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
        board = this.generateMatrix(board, [1, 2], [4, 5], [7], i*3, x*3);
      }
    }
    return board;
  }

  generateMatrix(board: Array<Array<BoardPiece>>, matVals: Array<number>, colVals: Array<number>, 
    rowVals: Array<number>, startRow: number, startCol: number): Array<Array<BoardPiece>> {

    let potentialValues = this.removedUsedValues(matVals, colVals, rowVals);
    for (let i = startRow; i < startRow+3; i++) {
      for (let x = startCol; x < startCol+3; x++) {
        let rand = this.randomValue(potentialValues.length);
        board[i].push(this.newBoardPiece(potentialValues[rand], false));
        potentialValues.splice(rand, 1);   
      }
    }
    return board;
  }

  removedUsedValues(matVals: Array<number>, colVals: Array<number>, rowVals: Array<number>) {
    let potentialValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    matVals.forEach((x) => {
      potentialValues.splice(potentialValues.indexOf(x), 1);
    });
    colVals.forEach((x) => {
      potentialValues.splice(potentialValues.indexOf(x), 1);
    });
    rowVals.forEach((x) => {
      potentialValues.splice(potentialValues.indexOf(x), 1);
    });
    console.log(potentialValues);
    return potentialValues;
  }

  newBoardPiece(value: number, visible: Boolean): BoardPiece {
    return {value: value, visible: visible};
  }

  randomValue(length: number): number {
    return Math.floor((Math.random()*(length)));
  }
}
