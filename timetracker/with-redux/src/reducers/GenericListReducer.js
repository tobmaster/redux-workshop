import {TIME_ADD, TIMES_LOAD, TIMES_LOADED} from "../actions/TimeActions";


export const genericListReducerFactory = (ACTION_ADD) => {
    const initialState = {
        entries: []
    };

    const reducer = (state = initialState, action) => {
        switch (action.type) {
            case ACTION_ADD:
                return {
                    ...state,
                    entries: [
                        ...state.entries,
                        action.payload
                    ]
                };
            default:
                return state;
        }
    };

    return reducer;
};