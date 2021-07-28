import { createAction, handleActions } from "redux-actions";

// 액션
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// 액션함수
export const increaseDispatch = createAction(INCREASE);
export const decreaseDispatch = createAction(DECREASE);

// redux thunk
export const increaseAsync = () => (dispatch) => {
    setTimeout(() => dispatch(increaseDispatch()), 1000);
};
export const decreaseAsync = () => (dispatch) => {
    setTimeout(() => dispatch(decreaseDispatch()), 1000);
};

const initialState = 0;

const counter = handleActions(
    {
        [INCREASE]: (state, action) => state + 1,
        [DECREASE]: (state, action) => state - 1,
    },
    initialState,
);

export default counter;
