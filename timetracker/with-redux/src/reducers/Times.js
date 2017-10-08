import {TIME_ADD, TIMES_LOAD, TIMES_LOADED} from '../actions/TimeActions';

const initialTimes = {
    isLoading: false,
    entries: []
};

const Times = (state = initialTimes, action) => {
    switch (action.type) {
        case TIME_ADD:
            return {
                ...state,
                entries: [
                    ...state.entries,
                    {
                        from: action.payload.from,
                        to: action.payload.to
                    }
                ]
            };
        case TIMES_LOAD:
            return {
                entries: [],
                isLoading: true
            };
        case TIMES_LOADED:
            return {
                ...state,
                entries: action.payload.times,
                isLoading: false
            };
        default:
            return state;
    }
};

export default Times;