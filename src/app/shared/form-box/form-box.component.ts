import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { DrawResults } from 'src/app/interfaces/draw-results.interface';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/redux/store';

@Component({
  selector: 'app-form-box',
  templateUrl: './form-box.component.html',
  styleUrls: ['./form-box.component.sass']
})
export class FormBoxComponent implements OnInit, OnDestroy {
  @Input()
  lottoNumber;

  subscription;
  primaryNumbers: any;
  secondaryNumbers: any;
  isSelected = false;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    this.subscription = this.ngRedux.select<DrawResults>('lottoResults')
      .subscribe(lottoResult => {
        if (!lottoResult) {
          return;
        }
        this.primaryNumbers = lottoResult.PrimaryNumbers;
        this.secondaryNumbers = lottoResult.SecondaryNumbers;
        this.checkNumber();
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /**
   * Checks to see if the number is selected.
   */
  checkNumber() {
    const checkNumber = +this.lottoNumber;
    const indexOfNumberPrimary = this.primaryNumbers.findIndex(num => num === checkNumber);
    const indexOfNumberSecondary = this.secondaryNumbers.findIndex(num => num === checkNumber);

    if (indexOfNumberPrimary !== -1 || indexOfNumberSecondary !== -1) {
      this.isSelected = true;
    }
  }

}
