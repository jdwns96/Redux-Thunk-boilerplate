import { createAction, handleActions } from "redux-actions";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

export const increaseDispatch = createAction(INCREASE);
export const decreaseDispatch = createAction(DECREASE);

const initialState = 0;

const counter = handleActions(
    {
        [INCREASE]: (state, action) => state + 1,
        [DECREASE]: (state, action) => state - 1,
    },
    initialState,
);

export default counter;
