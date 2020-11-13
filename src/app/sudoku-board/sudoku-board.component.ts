import { Component, OnInit } from '@angular/core';
import { SukokuLogicService } from '../sukoku-logic.service';

@Component({
  selector: 'app-sudoku-board',
  templateUrl: './sudoku-board.component.html',
  styleUrls: ['./sudoku-board.component.scss']
})
export class SudokuBoardComponent implements OnInit {

  constructor(
    private logicService: SukokuLogicService,
  ) {}

  ngOnInit(): void {
    this.logicService.buildBoard();
  }

}
