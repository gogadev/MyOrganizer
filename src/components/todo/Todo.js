import React, { useState } from "react";

import todoImg from "../../assets/line.png";

import db from "../../firebase/firebase";

import { Button, Modal } from "@material-ui/core/";

import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";

import { makeStyles } from "@material-ui/core/styles";

import "./todo.style.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    left: "0",
    right: "0",
    top: "20%",
    transform: "translate(50%, 50%)",
  },
}));

const Todo = ({ text }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const updateTodo = () => {
    db.collection("todos").doc(text.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    setOpen(false);
  };

  return (
    <div className="todo">
      <React.Fragment>
        <Modal open={open} onClose={(e) => setOpen(false)}>
          <div className={classes.paper}>
            <form>
              <input
                placeholder={text.todo}
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <Button type="submit" onClick={updateTodo}>
                Update Todo
              </Button>
            </form>
          </div>
        </Modal>
        <div className="list" key={text.id}>
          <li>{text.todo}</li>
          <img src={todoImg} alt="" />
          <div className="buttons">
            <EditIcon onClick={(e) => setOpen(true)}>Edit</EditIcon>
            <DeleteForeverIcon
              onClick={(e) => db.collection("todos").doc(text.id).delete()}
            ></DeleteForeverIcon>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
};

export default Todo;
