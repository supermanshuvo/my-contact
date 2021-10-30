import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { useHistory } from "react-router-dom";
export default function Todo({ user }) {
  const [todoInput, setTodoInput] = useState("");
  const [myTodos, setTodos] = useState([]);
  const history = useHistory();

  useEffect((user) => {
    if (user) {
      const result = db.collection("todos").doc(user.uid);
      result.onSnapshot((docSnap) => {
        if (docSnap.exists) {
          console.log(docSnap.data().todos);
          setTodos(docSnap.data().todos);
        } else {
          console.log(`No Docs`);
        }
      });
    } else {
      history.push("/");
    }
  }, []);

  const addTodo = () => {
    db.collection("todos")
      .doc(user.uid)
      .set({
        todos: [...myTodos, todoInput],
      });
    setTodoInput("");
  };
  return (
    <div className="center container">
      <h3>Todo</h3>
      <div className="input-field">
        <input
          type="text"
          name="addTodo"
          id="addTodo"
          placeholder="Enter your Todo"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <button className="btn blue" onClick={() => addTodo()}>
          Add
        </button>
      </div>
    </div>
  );
}
