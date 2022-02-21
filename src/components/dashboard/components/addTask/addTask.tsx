import React, { useState } from "react";
import { addTodo } from "store/todos/todosSlice";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import MySwitch from "components/shared/mySwitch/MySwitch";
import MyButton from "components/shared/myButton/MyButton";
import "./addTask.scss";

export interface AddTaskProps {}

export interface TodoObj {
  id: number;
  description: string;
  completed: boolean;
  highPriority: boolean;
}

function AddTask(props: AddTaskProps) {
  const [highPriority, setHighPriority] = useState<boolean>(false);
  const [todo, setTodo] = useState<string>("");
  const dispatch = useDispatch();

  const add = () => {
    if (todo !== null) {
      dispatch(
        addTodo({
          id: uuidv4(),
          description: todo,
          completed: false,
          highPriority: highPriority,
        })
      );
      setTodo("");
      setHighPriority(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  return (
    <div className="add-task">
      <input
        type={"text"}
        placeholder={"Insert task title..."}
        onChange={(e) => handleChange(e)}
        value={todo}
      />
      <div className="add-task__switch">
        <span className="add-task__switch__label">High Priority</span>
        <MySwitch
          enabled={highPriority}
          onClick={() => setHighPriority((prevstate) => !prevstate)}
        />
      </div>
      <MyButton
        label="add"
        disabled={!todo || !todo.replace(/\s/g, "").length ? true : false}
        onClick={add}
      />
    </div>
  );
}

export default AddTask;
