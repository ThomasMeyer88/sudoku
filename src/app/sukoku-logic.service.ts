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
    for (let i = 0; i < 2; i++) {
      for (let x = 0; x < 2; x++) {
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

    let matrixValues = [];
 
    for (let i = startRow; i < startRow + 3; i++) {
      for (let x = startCol; x < startCol + 3; x++) {

        let rowVals = this.getRowVals(board, i);

        let colVals = this.getColVals(board, x);

        let potentialValues = this.removedUsedValues([rowVals, colVals, matrixValues]);

        if (potentialValues.length == 0) {
          console.log(`%c No Value Assignable`, 'color: red; font-weight: bold');
          console.log(`%c Failed at ${startRow}, ${startCol}`, 'color: red; font-weight: bold');
          this.deleteFromBoard(board, startRow, startCol);
          break;
        }

        let rand = this.randomValue(potentialValues.length);
        board[i].push(this.newBoardPiece(potentialValues[rand], false));
        matrixValues.push(potentialValues[rand]);
      }
    }
    return board;
  }

  deleteFromBoard(board: Array<Array<BoardPiece>>, startRow: number, 
    startCol: number): Array<Array<BoardPiece>> {
    for (let i = startRow; i < startRow + 3; i++) {
        board[i].splice(startCol, board[i].length);
    }
    return board;
  }

  removedUsedValues(usedVals: Array<Array<number>>): Array<number> {
    let values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    usedVals.forEach((arr: Array<number>) => {
      values = this.removeValuesFromArray(values, arr);
    });
    return values;
  }

  removeValuesFromArray(values: Array<number>, refArray: Array<number>): Array<number> {
    if (refArray.length > 0) {
      refArray.forEach((x) => {
        if (values.indexOf(x) > -1) {
          values.splice(values.indexOf(x), 1);
        }
      });
    }
    return values;
  } 

  newBoardPiece(value: number, visible: Boolean): BoardPiece {
    return {value: value, visible: visible};
  }

  randomValue(length: number): number {
    return Math.floor((Math.random()*(length)));
  }
}
