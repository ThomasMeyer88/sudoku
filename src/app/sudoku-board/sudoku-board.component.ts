import { Component, OnInit } from '@angular/core';
import { BoardPiece } from '../models/boardPiece';
import { SukokuLogicService } from '../sukoku-logic.service';
import { SudokuGridService } from '../sudoku-grid.service';

@Component({
  selector: 'app-sudoku-board',
  templateUrl: './sudoku-board.component.html',
  styleUrls: ['./sudoku-board.component.scss']
})
export class SudokuBoardComponent implements OnInit {

  board: Array<Array<BoardPiece>> = [];
  constructor(
    private logicService: SukokuLogicService,
    public gridService: SudokuGridService
  ) {}

  ngOnInit(): void {
    this.board = this.logicService.buildBoard();
  }

}
