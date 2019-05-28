import { Action } from 'redux';
import { UPDATELOTTORESULTS } from './app.actions';
import { DrawResults } from '../interfaces/draw-results.interface';

/**
 * Define the shape of global storage.
 */
export interface IAppState {
    lottoResults: DrawResults;
}

/**
 * intialize the state so it isnt null.
 */
export const INITIAL_STATE: IAppState = {
    lottoResults: null
};

/**
 * Typical reducer for app state, updates the global store with supplied data.
 * @param state the store where all info is held.
 * @param action contains thetype and the payload.
 */
export function rootReducer(state: IAppState, action): IAppState {
    switch (action.type) {
        case UPDATELOTTORESULTS:
            return Object.assign({}, state, {lottoResults: action.data});
        default:
            return state;
    }
}
