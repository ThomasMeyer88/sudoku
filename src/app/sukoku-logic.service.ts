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
        let startRow = i*3;
        let startCol = x*3;

        board = this.generateMatrix(board, startRow, startCol);
      }
    }
    return board;
  }

  getRowVals(board: Array<Array<BoardPiece>>,  startRow: number): Array<number> {
    let rowVals = [];
    board[startRow].forEach((x) => {
      rowVals.push(x.value);
    })
    return rowVals;
  }

  getColVals(board: Array<Array<BoardPiece>>, startCol: number): Array<number> {
    let colVals = [];
    board.forEach((x) => {
      if (x[startCol]) {
        colVals.push(x[startCol].value);
      }
    })
    return colVals;
  }

  generateMatrix(board: Array<Array<BoardPiece>>, startRow: number, 
                startCol: number): Array<Array<BoardPiece>> {
    let matrixValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = startRow; i < startRow+3; i++) {

      for (let x = startCol; x < startCol+3; x++) {
        let rowVals = this.getRowVals(board, i);
        console.log(`%c ROWS`, 'color: green');
        console.log(rowVals);
        let colVals = this.getColVals(board, x);
        console.log(`%c COLS`, 'color: blue');
        console.log(colVals);
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
