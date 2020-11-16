import { Injectable } from '@angular/core';
import { BoardPiece } from './models/boardPiece';

@Injectable({
  providedIn: 'root'
})
export class SudokuGridService {

  newBoardPiece: BoardPiece = {value: 0, visible: false};
 
  constructor() { }

  generateNewGrid(): Array<Array<BoardPiece>> {
    let sudokuGrid: Array<Array<BoardPiece>> = [];

    for (let i = 0; i < 9; i++) {
      for (let x = 0; x < 9; x++ ) {
        sudokuGrid[i].push(this.newBoardPiece);
      }
    }

    return sudokuGrid;
  }

  checkRow(row: number, grid: Array<Array<BoardPiece>>): Boolean {
    let sum: number = 0;
    for (let i = 0; i < 9; i++) {
      sum += grid[row][i].value;
    }
    if (sum == 55) {
      return true;
    } else {
      return false;
    }
  }

  checkCol(col: number, grid: Array<Array<BoardPiece>>): Boolean {
    let sum: number = 0;
    for (let i = 0; i < 9; i++) {
      sum += grid[i][col].value;
    }
    if (sum == 55) {
      return true;
    } else {
      return false;
    }
  }
}
