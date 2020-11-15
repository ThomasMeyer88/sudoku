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
    for (let i = 0; i < 1; i++) {
      let rowVals = [];
      for (let x = 0; x < 1; x++) {
        let colVals = [];
        // 012 345 678
        let startRow = i*3;
        let startCol = x*3;

        board = this.generateMatrix(board, colVals, rowVals, startRow, startCol);
      }
    }
    return board;
  }

  generateMatrix(board: Array<Array<BoardPiece>>, colVals: Array<number>, 
    rowVals: Array<number>, startRow: number, startCol: number): Array<Array<BoardPiece>> {
    let potentialValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let adjRowVals = this.removedUsedValues(rowVals, potentialValues);
    let adjColVals = this.removedUsedValues(colVals, potentialValues);
    let matrixValues = this.removedUsedValues([], potentialValues);

    for (let i = startRow; i < startRow+3; i++) {
      for (let x = startCol; x < startCol+3; x++) {
        let rand = this.randomValue(matrixValues.length);
        board[i].push(this.newBoardPiece(matrixValues[rand], false));
        matrixValues.splice(rand, 1);
      }
    }
    return board;
  }

  removedUsedValues(usedVals: Array<number>, values: Array<number>) {
    usedVals.forEach((i) => {
        values.splice(values.indexOf(i), 1);
    });
    return values;
  }

  newBoardPiece(value: number, visible: Boolean): BoardPiece {
    return {value: value, visible: visible};
  }

  randomValue(length: number): number {
    return Math.floor((Math.random()*(length)));
  }
}
