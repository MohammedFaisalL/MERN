import React, { useReducer } from "react";
import { reducer } from "../util/reducerAndAction/reducer";
import { ACTION } from "../util/reducerAndAction/action";

function AboutUs() {
  const initialValue = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      <button
        className="p-2 m-2 bg-red-400 text-white rounded-lg"
        onClick={() => dispatch(ACTION.INCREMENT)}
      >
        Increment
      </button>
      <button
        className="p-2 m-2 bg-lime-800 text-white rounded-lg"
        onClick={() => dispatch(ACTION.ZERO)}
      >
        Reset
      </button>
      <h1>Count: {state.count}</h1>
      <button
        className="p-2 m-2 bg-lime-400 text-white rounded-lg"
        onClick={() => dispatch(ACTION.DECREMENT)}
      >
        Decrement
      </button>
      <button
        className="p-2 m-2 bg-amber-400 text-white rounded-lg"
        onClick={() => dispatch(ACTION.MULTIPLYTEN)}
      >
        Multiply Ten
      </button>
    </div>
  );
}

export default AboutUs;
