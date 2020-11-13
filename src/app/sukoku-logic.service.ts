import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SukokuLogicService {

  constructor() { }

  generateBoard() {
    let difficulty = 0;
 
  }

  buildBoard() {
    let board: Array<Array<Object>> = [];
    board = this.buildRows(board);
    console.log(board);
  }

  buildRows(board: Array<Array<Object>>): Array<Array<Object>>{
    for (let i = 0; i < 9; i++) {
      board.push([]);
      for (let x = 0; x < 9; x ++) {
        board[i].push({value: 0, visible: false});
      }
    }
    return board;
  }

  generateValues(board: Array<Array<Object>>): Array<Array<Object>> {
    for (let i = 0; i < 9; i++) {
      for (let x = 0; x < 9; x++) {
        let values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        board[i][x];
      }
    }
    return board;
  }

  randomValue(length: number): number {
    return Math.floor((Math.random()*(length+1)));
  }
}
