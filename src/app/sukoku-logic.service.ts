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

  generateValues(): Array<Array<Number>> {
    let values = [];
    for (let i = 0; i < 9; i++) {
      values.push([]);
      for (let x = 0; x < 9; x++) {
        let modifier = 1;
        if (i == 1 || i == 4 || i == 7) {
          modifier = 4;
        }
        if (i == 2 || i == 5 || i == 8) {
          modifier = 7;
        }
        let value = (x+modifier);
        if (value > 9) {
          value = value - 9;
        }
        values[i].push(value);
      }
      console.log(values);
    }
    return values;
  }

  randomValue(length: number): number {
    return Math.floor((Math.random()*(length)));
  }
}
