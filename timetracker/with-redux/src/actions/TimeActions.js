export const TIME_ADD = 'TIME_ADD';
export const TIMES_LOAD = 'TIMES_LOAD';
export const TIMES_LOADED = 'TIMES_LOADED';

export const addNewTime = (from, to) => {
    return {
        type: TIME_ADD,
        payload: {
            from,
            to
        }
    }
};

export const loadTimesFromServer = () => {
    return function (dispatch) {
        dispatch({
            type: TIMES_LOAD
        });

        fetch('/api/times.json').then(
            (response) => response
                .json()
                .then((data) =>
                    dispatch({
                        type: TIMES_LOADED,
                        payload: data
                    })
                )
        )
    }
};