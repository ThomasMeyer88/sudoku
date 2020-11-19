import { Injectable } from '@angular/core';
import { BoardPiece } from './models/boardPiece';


@Injectable({
  providedIn: 'root'
})
export class SukokuLogicService {

  constructor(
  ) { }


  buildBoard(): Array<Array<BoardPiece>> {
    let board: Array<Array<BoardPiece>> = this.getEmptyBoard();
    board = this.addStartValues(board);
    return board;
  }

  addStartValues(board: Array<Array<BoardPiece>>): Array<Array<BoardPiece>> {
    let visible = 0;
    for (let i = 0; i < 9; i++) {
      for (let x = 0; x < 9; x++ ) {
        if (this.randomValue(4) == 1) {
          visible++;
          let rand = this.randomValue(9)+1;
          if (!this.validateBoard(board, x, i, rand)) {
            do {
              rand = this.randomValue(9)+1;
              console.log(`%c INVALID`, 'color: red; font-weight: bold');
            } while (!this.validateBoard(board, x, i, rand));
          }
          board[i].push(this.newBoardPiece(rand, true));
        } else {
          board[i].push(this.newBoardPiece(0, false));
        }
      }
    }
    if (visible < 17 || visible > 22) {
      board = this.getEmptyBoard();
      this.addStartValues(board);
    }
    return board;
  }

  validateBoard(board: Array<Array<BoardPiece>>, col: number, row: number, val: number): Boolean {
    if (!this.verifyRow(board[row], val)) {
      return false;
    } else if (!this.verifyCol(board, col, val)) {
      return false;
    } else {
      return true;
    }
  }

  verifyRow(row: Array<BoardPiece>, val: number): Boolean {
    let valid = true;
    row.forEach((i: BoardPiece) => {
      if(i.value == val) {
        valid = false;
      }
    });
    return valid;
  }

  verifyCol(board: Array<Array<BoardPiece>>, col: number, val: number): Boolean {
    let valid = true;
    board.forEach((row: Array<BoardPiece>) => {
      if(row[col]) {
        if(row[col].value == val) {
          valid = false;
        }
      }
    })
    return valid;
  }


  getEmptyBoard(): Array<Array<BoardPiece>> {
    return [[], [], [], [], [], [], [], [], []];
  }

  newBoardPiece(value: number, visible: Boolean): BoardPiece {
    return {value: value, visible: visible};
  }

  randomValue(length: number): number {
    return Math.floor((Math.random()*(length)));
  }
}
