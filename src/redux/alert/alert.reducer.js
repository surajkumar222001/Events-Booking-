import * as alertAction from "./alert.action";


export const alertFeatureKey = 'alert';

let initialState = [];

export const reducer = (state=initialState,action) => {
    let {type , payload} = action;
    switch (type) {
        case alertAction.SET_ALERT :
            return [...state , payload]

        case alertAction.REMOVE_ALERT :
            return state.filter(alert => {
                return alert.id !== payload.id
            });

        default:return  state
    }
}