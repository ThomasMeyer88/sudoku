import { Injectable } from '@angular/core';
import { BoardPiece } from './models/boardPiece';

@Injectable({
  providedIn: 'root'
})
export class SukokuLogicService {
  matrix = [[], [], []];
  constructor() { }

  generateBoard() {
    let difficulty = 0;
 
  }

  buildBoard(): Array<Array<BoardPiece>> {
    let board: Array<Array<BoardPiece>> = [];
    board = this.fillBoard(board);
    return board;
  }

  fillBoard(board: Array<Array<BoardPiece>>): Array<Array<BoardPiece>> {
    board = this.generateFirstMatrix();
    return board;
  }

  generateFirstMatrix(): Array<Array<BoardPiece>> {
    let matrix = this.matrix;
    let potentialValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < 3; i++) {
      for (let x = 0; x < 3; x++) {
        let rand = this.randomValue(potentialValues.length);
        matrix[i].push(this.newBoardPiece(potentialValues[rand], false));
        potentialValues.splice(rand, 1);      
      }
    }
    return matrix;
  }

  newBoardPiece(value: number, visible: Boolean): BoardPiece {
    return {value: value, visible: visible};
  }

  randomValue(length: number): number {
    return Math.floor((Math.random()*(length)));
  }
}
