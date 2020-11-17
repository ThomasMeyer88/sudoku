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
      let row = [];
      for (let x = 1; x < 10; x++ ) {
        row.push({value: x, visible: true});
      }
      sudokuGrid.push(this.shuffleRow(row));
    }

    return sudokuGrid;
  }

  shuffleRow(row: Array<BoardPiece>): Array<BoardPiece> {
    for (let i = row.length - 1; i > 0; i--) {
      const x = this.randomValue(row.length);
      [row[i], row[x]] = [row[x], row[i]];
    }
    return row;
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
      console.log(i);
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
