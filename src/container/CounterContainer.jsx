import React from "react";
import { connect } from "react-redux";
import { increaseDispatch, decreaseDispatch } from "@modules/counter";
import Counter from "@components/Counter";

const CounterContainer = ({ number, increaseDispatch, decreaseDispatch }) => {
    return <Counter number={number} onIncrease={increaseDispatch} onDecrease={decreaseDispatch} />;
};

export default connect(
    (state) => ({
        number: state.counter,
    }),
    {
        increaseDispatch,
        decreaseDispatch,
    },
)(CounterContainer);
