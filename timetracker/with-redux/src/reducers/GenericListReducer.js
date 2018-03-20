
// Diese Funktion gibt eine Funktion zurück - nämlich einen neuen reducer
export const genericListReducerFactory = (ACTION_ADD) => {
    // den initialstate könnten wir ggf. auch als parameter von genericListReducerFactory übergeben.
    const initialState = {
        entries: []
    };

    const reducer = (state = initialState, action) => {
        switch (action.type) {
            // Der Action Type wurde genericListReducerFactory übergeben
            case ACTION_ADD:
                return {
                    ...state,
                    entries: [
                        ...state.entries,
                        // Wir schreiben hier einfach die gesamte Payload rein.
                        // Man könnte natürlich genericListReducerFactory auch noch eine Funktion übergeben,
                        // welche dann die payload nochmal umwandelt.
                        action.payload
                    ]
                };
            default:
                return state;
        }
    };

    return reducer;
};