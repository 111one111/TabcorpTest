import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.sass']
})
export class ResultsTableComponent implements OnInit {

  lottoNumbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 , 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30 ];
  largeScreenEdgeLineNumbers = [ 1, 10, 11, 20, 21, 30 ];

  constructor() { }

  ngOnInit() {
  }

  /**
   * Used for helping ui set end columns to col-2
   * @param currentNumber Number the ui for loop is up to.
   */
  isEndNumber(currentNumber) {
    const indexOfSearchedNumber = this.largeScreenEdgeLineNumbers.findIndex(num => num === currentNumber);

    if (indexOfSearchedNumber !== -1) {
      return true;
    }
    return false;
  }

  /**
   * Used to see if number is odd. hoping to catch the first number of the row.
   * @param currentNumber Number the ui for loop is up to.
   */
  isOddNumber(currentNumber) {
    return currentNumber % 2;
  }
}
