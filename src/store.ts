import { Action } from 'redux';
import { UPDATELOTTORESULTS } from './app/app.actions';
import { DrawResults } from './app/interfaces/draw-results.interface';

export interface IAppState {
    lottoResults: DrawResults;
}

export const INITIAL_STATE: IAppState = {
    lottoResults: null
};

export function rootReducer(state: IAppState, action): IAppState {
    switch (action.type) {
        case UPDATELOTTORESULTS:
            return Object.assign({}, state, {lottoResults: action.data});
        default:
            return state;
    }
}
