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
    let board: Array<Array<BoardPiece>> = [];
    board = this.buildRows(board);
    board = this.assignValues(board);
    this.generateValues();
    // console.log(board);
    return board;
  }

  buildRows(board: Array<Array<BoardPiece>>): Array<Array<BoardPiece>>{
    for (let i = 0; i < 9; i++) {
      board.push([]);
      for (let x = 0; x < 9; x ++) {
        board[i].push({value: 0, visible: false});
      }
    }
    return board;
  }

  assignValues(board: Array<Array<BoardPiece>>): Array<Array<BoardPiece>> {
    for (let i = 0; i < 9; i++) {
      let values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      for (let x = 0; x < 9; x++) {
        let random = this.randomValue(values.length);
        board[i][x].value = values[random];
        values.splice(random, 1);
      }
    }
    return board;
  }

  generateModifier(i: number): number {
    let modifier = 0;
    if (i == 2 || i == 5 || i == 8) {
      modifier = 3;
    }
    if (i == 3 || i == 6 || i == 9) {
      modifier = 6;
    }
    if (i > 3) {
      modifier++;
    }
    if (i > 6) {
      modifier++;
    }
    return modifier;
  }

  generateValues(): Array<Array<number>> {
    let values = [];
    for (let i = 1; i < 10; i++) {
      values.push([]);
      for (let x = 1; x < 10; x++) {
       
        let value = (x+this.generateModifier(i));

        if (value > 9) {
          value = value - 9;
        }

        values[i-1].push(value);
      }
    }
    return values;
  }

  randomValue(length: number): number {
    return Math.floor((Math.random()*(length)));
  }
}
