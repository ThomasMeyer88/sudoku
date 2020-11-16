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
}
