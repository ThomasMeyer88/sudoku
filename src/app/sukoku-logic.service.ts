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
    console.log(board);
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

  generateValues(board: Array<Array<BoardPiece>>): Array<Array<BoardPiece>> {
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

  randomValue(length: number): number {
    return Math.floor((Math.random()*(length)));
  }
}
