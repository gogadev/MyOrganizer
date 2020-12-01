import React, { useEffect } from "react";

import { Button, FormControl, Input, InputLabel } from "@material-ui/core/";

import tickIcon from "../../assets/tick.png";

import firebase from "firebase";

import db from "../../firebase/firebase";

import "./form.style.css";

const Form = ({ input, setInput, setTodos }) => {
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);

  const addTodo = (e) => {
    e.preventDefault();

    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <form className="form">
      <FormControl>
        <InputLabel>e.g. buy milk</InputLabel>
        <img className="tick-icon" src={tickIcon} alt="" />
        <Input value={input} onChange={handleChange} />
      </FormControl>
      <Button
        disabled={!input}
        type="submit"
        variant="contained"
        onClick={addTodo}
      >
        Add Todo
      </Button>
    </form>
  );
};

export default Form;
