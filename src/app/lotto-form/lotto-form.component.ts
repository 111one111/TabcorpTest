import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { DrawResults } from '../interfaces/draw-results.interface';
import { restoreView } from '@angular/core/src/render3';
import { IAppState } from 'src/store';
import { NgRedux, select } from '@angular-redux/store';
import { UPDATELOTTORESULTS } from '../app.actions';


@Component({
  selector: 'app-lotto-form',
  templateUrl: './lotto-form.component.html',
  styleUrls: ['./lotto-form.component.sass']
})
export class LottoFormComponent implements OnInit {

  lottoUrl = 'https://data.api.thelott.com/sales/vmax/web/data/lotto/latestresults';
  lottoPayLoad = '{"CompanyId":"GoldenCasket","MaxDrawCountPerProduct":1,"OptionalProductFilter":["Powerball"]}';
  lottoData: DrawResults;
  resultDataName = 'DrawResults';

  constructor(private rest: RestService,
              private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

  /**
   * Retrieves data from lotto
   */
  getLottoDatta() {
    this.rest.postRequest(this.lottoUrl, this.lottoPayLoad)
      .subscribe(result => {
              if (result.Success) {
                const downloadedData: DrawResults = result[this.resultDataName][0];
                this.ngRedux.dispatch({type: UPDATELOTTORESULTS, data: downloadedData});
              } else {
                console.warn('no can do');
              }
    });
  }

}
