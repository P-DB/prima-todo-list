import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import AddTask, { TodoObj } from "./components/addTask/addTask";
import Task from "./components/task/Task";
import "./dashboard.scss";
import { RootState } from "store/store";

interface DashboardProps {}

function Dashboard(props: DashboardProps) {
  const [modalTaskIsOpen, setModalTaskIsOpen] = React.useState(false);
  const todos = useSelector((state: RootState) => state.todos);
  const [todosCompleted, setTodosCompleted] = useState<TodoObj[]>([]);
  const [todosInProgress, setTodosInProgress] = useState<TodoObj[]>([]);

  useEffect(() => {
    setTodosCompleted(
      todos
        .filter((todo) => todo.completed)
        .sort((a, b) => a.highPriority > b.highPriority ? -1 : 1
    )
      );
    setTodosInProgress(
      todos
      .filter((todo) => !todo.completed)
      .sort((a, b) => a.highPriority > b.highPriority ? -1 : 1)
    )
  }, [todos]);

  const renderModal = () => {
    return (
      <Modal
        isOpen={modalTaskIsOpen}
        onRequestClose={() => setModalTaskIsOpen(false)}
        className="modal"
        overlayClassName="modal__overlay"
        contentLabel="New Task"
      >
        <div className="modal__title">
          <h3>New Task</h3>
          <div
            className="modal__title__close"
            onClick={() => setModalTaskIsOpen(false)}
          />
        </div>
        <AddTask />
      </Modal>
    );
  };

  const renderNewTask = () => (
    <div className="dashboard__new-task">
      <div className="dashboard__title">
        <h4>New task</h4>
      </div>
      <AddTask />
    </div>
  );

  const renderInProgess = () => (
    <div className="dashboard__in-progess">
      <div className="dashboard__title">
        <h4>In progress</h4>
        <div className="dashboard__title__counter">
          {todosInProgress.length}
        </div>
      </div>
      {todosInProgress.map((todo: TodoObj) => (
        <Task key={todo.id} todo={todo} />
      ))}
    </div>
  );

  const renderDone = () => (
    <div className="dashboard__done">
      <div className="dashboard__title">
        <h4>Done</h4>
        <div className="dashboard__title__counter">{todosCompleted.length}</div>
      </div>
      {todosCompleted.map(
        (todo: TodoObj) => (
          <Task key={todo.id} todo={todo} />
        )
      )}
    </div>
  );

  return (
    <section className="dashboard">
      <div className="dashboard__container">
        <h1>MyTrack</h1>
        <div
          className="dashboard__CTANewTask"
          onClick={() => setModalTaskIsOpen(true)}
        >
          <p>New task</p>
          <div className="dashboard__CTANewTask__plus" />
        </div>
        {renderModal()}
        {renderNewTask()}
        {todosInProgress.length ? renderInProgess() : null}
        {todosCompleted.length ? renderDone() : null}
      </div>
    </section>
  );
}

export default Dashboard;
