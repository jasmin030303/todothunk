import { useState } from "react";
import "./Home.scss";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Home = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();
  const { todo } = useSelector((s) => s);

  function addTodo() {
    let res = {
      name: name,
      price: price,
    };
    axios.post(`https://686f92c791e85fac42a19ed6.mockapi.io/todo/todo`, res);
    dispatch({ type: "ADD_TODO", payload: res });
  }
  console.log(todo);

  return (
    <div id="home">
      <div className="container">
        <div className="home">
          <input
            type="text"
            placeholder="Product Name... "
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="text"
            placeholder="Product Price... "
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
          <button onClick={() => addTodo()}>Create</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
