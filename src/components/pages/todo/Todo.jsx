import React, { useEffect } from "react";
import "./Todo.scss";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Todo = () => {
  const { todo } = useSelector((s) => s);
  const dispatch = useDispatch();

  const getTodo = () => {
    return async (dispatch) => {
      let res = await axios(
        `https://686f92c791e85fac42a19ed6.mockapi.io/todo/todo`
      );
      let { data } = res;
      dispatch({ type: "GET_TODO", payload: data });
    };
  };

  const deleteTodo = (itemId) => {
    return async (dispatch) => {
      let res = await axios.delete(
        `https://686f92c791e85fac42a19ed6.mockapi.io/todo/todo/${itemId}`
      );
      let { data } = res;
      dispatch({ type: "DELETE", payload: data });
    };
  };

  useEffect(() => {
    dispatch(getTodo());
  }, []);
  return (
    <div id="todo">
      <div className="container">
        <div className="todo">
          {todo.map((el, idx) => (
            <div key={el.id || idx} className="todo--nav">
              <h1>{el.name}</h1>
              <h1>{el.price}</h1>
              <button onClick={() => dispatch(deleteTodo(el.id))}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
