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
import { rootReducer, IAppState, INITIAL_STATE } from 'src/store';
import { UPDATELOTTORESULTS } from './app.actions';


@NgModule({
  declarations: [
    AppComponent,
    FormBoxComponent,
    LottoFormComponent,
    ViewPickedNumbersComponent
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
      const storeEnhancers = devTools.isEnabled() ? // <- New
      [ devTools.enhancer() ] : // <- New
      []; // <- New
      ngRedux.configureStore(
        rootReducer,
        INITIAL_STATE,
        [],
        storeEnhancers);
    }
}
