import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/store';
import { DrawResults } from 'src/app/interfaces/draw-results.interface';

@Component({
  selector: 'app-view-picked-numbers',
  templateUrl: './view-picked-numbers.component.html',
  styleUrls: ['./view-picked-numbers.component.sass']
})
export class ViewPickedNumbersComponent implements OnInit, OnDestroy {

  primaryNumbers: Array<number>;
  secondaryNumbers: Array<number>;

  display1stPick = '';
  display2ndPick = '';
  display3rdPick = '';
  display4thPick = '';
  display5thPick = '';
  display6thPick = '';
  display7thPick = '';
  displayPBPick = 'PB';
  subscription;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    this.subscription = this.ngRedux.select<DrawResults>('lottoResults')
      .subscribe(lottoResult => {
        if (!lottoResult) {
          return;
        }
        this.primaryNumbers = lottoResult.PrimaryNumbers;
        this.secondaryNumbers = lottoResult.SecondaryNumbers;
        this.populateData();
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /**
   * Populates data for display
   */
  populateData() {
    if (this.primaryNumbers.length === 7) {
      this.display1stPick = this.primaryNumbers[0].toString();
      this.display2ndPick = this.primaryNumbers[1].toString();
      this.display3rdPick = this.primaryNumbers[2].toString();
      this.display4thPick = this.primaryNumbers[3].toString();
      this.display5thPick = this.primaryNumbers[4].toString();
      this.display6thPick = this.primaryNumbers[5].toString();
      this.display7thPick = this.primaryNumbers[6].toString();
    } else {
      // throw error
      return;
    }

    if (this.secondaryNumbers.length > 0) {
      this.displayPBPick = this.secondaryNumbers[0].toString();
    } else {
      // throw error
      return;
    }
  }
}
