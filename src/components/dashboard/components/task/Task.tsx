import { useEffect, useState } from "react";
import "./task.scss";
import { ReactComponent as IconTrash } from "assets/icons/icon-trash.svg";
import MyCheckbox from "components/shared/myCheckbox/MyCheckbox";
import { TodoObj } from "../addTask/addTask";
import { useDispatch } from "react-redux";
import { updateTodos, removeTodos } from "store/todos/todosSlice";

export interface TaskProps {
  todo: TodoObj,
  onDescriptionClick?: (todo:TodoObj) => void
}

function Task({ todo, onDescriptionClick }: TaskProps) {
  const { id, description, completed, highPriority } = todo;
  const [done, setDone] = useState<boolean>(completed);
  const dispatch = useDispatch();

  let classList = "task";
  classList += done ? ` task--done` : "";

  useEffect(() => {
    dispatch(updateTodos({ id, completed: done }));
  }, [done]);

  return (
      <div className={classList} onClick={() => onDescriptionClick && onDescriptionClick(todo)}>
        <MyCheckbox flagged={done} onClick={() => setDone((prevState) => !prevState)} />
        <div className={`task__status ${highPriority ? " task__status--high" : ""}`} />
        <p className={`task__description ${done ? " task__description--striked" : ""}`}>
          {description}
        </p>
        <div onClick={() => dispatch(removeTodos(id))} className="task__trash">
          <IconTrash />
        </div>
      </div>
  );
}

export default Task;
