import { createStore } from "redux";

/**
 * reduce 函数
 * @param state
 * @param action
 * @returns {{value}|{value: number}}
 */
function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case "counter/incremented":
      return { value: state.value + 1 };
    case "counter/decremented":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

// 创建一个包含应用程序 state 的 Redux store
let store = createStore(counterReducer);

store.subscribe(() => console.log(store.getState()));

// 改变内部状态的唯一方法是 dispatch 一个 action。
// 这些 action 可以被序列化、记录或存储，然后再重放。
store.dispatch({ type: "counter/incremented" });
// {value: 1}
store.dispatch({ type: "counter/incremented" });
// {value: 2}
store.dispatch({ type: "counter/decremented" });
