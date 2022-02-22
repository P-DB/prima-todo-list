import { useEffect, useState } from "react";
import "./taskDetail.scss";
import { ReactComponent as IconTrash } from "assets/icons/icon-trash.svg";
import { TodoObj } from "../addTask/addTask";
import { useDispatch } from "react-redux";
import { updateTodos, removeTodos } from "store/todos/todosSlice";
import MyButton from "components/shared/myButton/MyButton";

export interface TaskDetailProps {
  todo: TodoObj;
  onClick: () => void;
}

function TaskDetail({ todo, onClick }: TaskDetailProps) {
  const { id, description, completed, highPriority } = todo;
  const [done, setDone] = useState<boolean>(completed);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateTodos({ id, completed: done }));
  }, [done, dispatch, id]);

  let classList = "task-detail";
  classList += done ? ` task-detail--done` : "";

  const handleDelete = () => {
    dispatch(removeTodos(id));
    onClick();
  }

  return (
    <div className={classList}>
      <div className="modal__title">
        <div className="task-detail__title">
          <div className={`task-detail__status ${highPriority ? " task-detail__status--high" : ""}`}/>
          <h3>Task</h3>
        </div>
        <div className="modal__title__close" onClick={() => onClick()} />
      </div>
      <div className="modal__content">
        <p className={`task-detail__description ${done ? " task-detail__description--striked" : ""}`}>
          {description}
        </p>
        <div className="task-detail__footer">
          <div onClick={handleDelete} className="task-detail__trash">
            <IconTrash />
          </div>
          <MyButton 
            type={done ? "DEFAULT" : "SUCCESS"} 
            label={done ? 'In progress' : 'Completed'} 
            onClick={() => setDone((prevState) => !prevState)} 
          />
        </div>
      </div>
      
    </div>
  );
}

export default TaskDetail;
