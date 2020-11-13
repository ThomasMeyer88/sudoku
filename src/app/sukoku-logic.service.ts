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
    board = this.generateValues(board);
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
    if (modifier > 9) {
      modifier - 9;
    }
    return modifier;
  }

  generateValues(values: Array<Array<BoardPiece>>): Array<Array<BoardPiece>> {
    let rand = this.randomValue(10);
    for (let i = 1; i < 10; i++) {
      for (let x = rand; x < rand+9; x++) {
       
        let value = (x+this.generateModifier(i));

        if (value > 9) {
          value = value - 9;
        }
        values[i-1][x-rand].value = value;
      }
    }
    console.log(values);
    return values;
  }

  randomValue(length: number): number {
    return Math.floor((Math.random()*(length)));
  }
}
