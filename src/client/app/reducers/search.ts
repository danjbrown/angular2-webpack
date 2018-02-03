import { ActionReducer, Action } from '@ngrx/store';

export const SET = 'SET';
export const RESET = 'RESET';

export function searchReducer(state: string = '', action: Action) {
    switch (action.type) {
        case SET:
        return action.payload;

    case RESET:
        return '';

    default:
        return state;
    }
}