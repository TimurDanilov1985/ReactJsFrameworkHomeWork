const TOGGLE_THEME = 'TOGGLE_THEME';

export const changeTheme = (style) => ({ type: TOGGLE_THEME, payload: style });

const initialState = {
    style: { background: 'white', color: 'black' }
}

export const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            return { ...state, style: action.payload };
        default:
            return state;
    }
}