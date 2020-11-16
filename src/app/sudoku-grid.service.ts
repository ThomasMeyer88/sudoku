import { Injectable } from '@angular/core';
import { BoardPiece } from './models/boardPiece';

@Injectable({
  providedIn: 'root'
})
export class SudokuGridService {

  newBoardPiece: BoardPiece = {value: 0, visible: false};
 
  constructor() { }

  generateNewGrid(isTest: Boolean): Array<Array<BoardPiece>> {
    let sudokuGrid: Array<Array<BoardPiece>> = [];

    for (let i = 0; i < 9; i++) {
      for (let x = 0; x < 9; x++ ) {
        sudokuGrid[i].push(this.newBoardPiece);
      }
    }

    return sudokuGrid;
  }

  validateSum(sum: number): Boolean {
    if (sum == 45) {
      return true;
    } else {
      return false;
    }
  }

  checkRow(row: number, grid: Array<Array<BoardPiece>>): Boolean {
    let sum: number = 0;
    for (let i = 0; i < 9; i++) {
      sum += grid[row][i].value;
    }
    return this.validateSum(sum);
  }

  checkCol(col: number, grid: Array<Array<BoardPiece>>): Boolean {
    let sum: number = 0;
    for (let i = 0; i < 9; i++) {
      sum += grid[i][col].value;
    }
    return this.validateSum(sum);
  }

  checkMatrix(startRow: number, startCol: number, grid: Array<Array<BoardPiece>>): Boolean {
    let sum: number = 0;
    for (let i = startRow; i < startRow + 3; i++) {
      for (let x = startCol; x < startCol + 3; x++) {
        sum += grid[i][x].value;
      }
    }
    return this.validateSum(sum);
  }

  randomValue(length: number): number {
    return Math.floor((Math.random()*(length)));
  }
}
