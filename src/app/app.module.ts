import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormBoxComponent } from './shared/form-box/form-box.component';
import { LottoFormComponent } from './lotto-form/lotto-form.component';
import { ViewPickedNumbersComponent } from './shared/view-picked-numbers/view-picked-numbers.component';
import { FormsModule } from '@angular/forms';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { rootReducer, IAppState, INITIAL_STATE } from 'src/app/redux/store';
import { UPDATELOTTORESULTS } from './redux/app.actions';
import { ResultsTableComponent } from './lotto-form/results-table/results-table.component';


@NgModule({
  declarations: [
    AppComponent,
    FormBoxComponent,
    LottoFormComponent,
    ViewPickedNumbersComponent,
    ResultsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor(ngRedux: NgRedux<IAppState>,
                devTools: DevToolsExtension) {
      const storeEnhancers = devTools.isEnabled() ?
      [ devTools.enhancer() ] :
      []; 
      ngRedux.configureStore(
        rootReducer,
        INITIAL_STATE,
        [],
        storeEnhancers);
    }
}
