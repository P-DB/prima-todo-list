import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import AddTask, { TodoObj } from "./components/addTask/addTask";
import Task from "./components/task/Task";
import TaskDetail from "./components/taskDetail/TaskDetail";
import "./dashboard.scss";
import { RootState } from "store/store";

interface DashboardProps {}

function Dashboard(props: DashboardProps) {
  const todos = useSelector((state: RootState) => state.todos);

  const [modalNewTaskIsOpen, setModalNewTaskIsOpen] = useState<boolean>(false);
  const [modalTaskDetailIsOpen, setModalTaskDetailIsOpen] = useState<boolean>(false);
  const [modalTaskDetailItem, setModalTaskDetailItem] = useState<TodoObj>();
  const [todosCompleted, setTodosCompleted] = useState<TodoObj[]>([]);
  const [todosInProgress, setTodosInProgress] = useState<TodoObj[]>([]);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const tabletWidth: number = 900;
  const isMobile = () => windowWidth < tabletWidth;

  const detectWidth = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', detectWidth)

    return () => {
      window.removeEventListener('resize', detectWidth)
    }
  }, [windowWidth]);

  useEffect(() => {
    setTodosCompleted(
      todos
        .filter((todo) => todo.completed)
        .sort(highPrioritySorting)
      );
    setTodosInProgress(
      todos
      .filter((todo) => !todo.completed)
      .sort(highPrioritySorting)
    )
  }, [todos]);

  const highPrioritySorting = (a:TodoObj, b:TodoObj) => a.highPriority < b.highPriority ? 1 : -1; 

  const renderNewTaskModal = () => {
    return (
      <Modal
        isOpen={modalNewTaskIsOpen}
        onRequestClose={() => setModalNewTaskIsOpen(false)}
        className="modal"
        overlayClassName="modal__overlay"
        contentLabel="New Task"
      >
        <div className="modal__title">
          <h3>New Task</h3>
          <div
            className="modal__title__close"
            onClick={() => setModalNewTaskIsOpen(false)}
          />
        </div>
        <AddTask />
      </Modal>
    );
  };

  const renderTaskDetailModal = () => {
    return (
      <Modal
        isOpen={modalTaskDetailIsOpen}
        onRequestClose={() => setModalTaskDetailIsOpen(false)}
        className="modal modal--detail"
        overlayClassName="modal__overlay modal__overlay--detail"
        contentLabel="Task"
      >
        <TaskDetail 
          todo={modalTaskDetailItem as TodoObj} 
          onClick={() => setModalTaskDetailIsOpen(false)} 
        /> 
      </Modal>
    );
  };

  const taskDetailHandler = (todo:TodoObj) => {
    if(isMobile()) {
      setModalTaskDetailIsOpen(true);
      setModalTaskDetailItem(todo);
    }
  }

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
        <Task key={todo.id} todo={todo} onDescriptionClick={taskDetailHandler} />
      ))}
    </div>
  );

  const renderDone = () => (
    <div className="dashboard__done">
      <div className="dashboard__title">
        <h4>Done</h4>
        <div className="dashboard__title__counter">
          {todosCompleted.length}
        </div>
      </div>
      {todosCompleted.map(
        (todo: TodoObj) => (
          <Task key={todo.id} todo={todo} onDescriptionClick={taskDetailHandler}/>
        )
      )}
    </div>
  );

  return (
    <section className="dashboard">
      <div className="dashboard__container">
        <h1>MyTrack</h1>
        <div
          className="dashboard__cta-new-task"
          onClick={() => setModalNewTaskIsOpen(true)}
        >
          <p>New task</p>
          <div className="dashboard__cta-new-task__plus" />
        </div>
        {renderNewTask()}
        {todosInProgress.length ? renderInProgess() : null}
        {todosCompleted.length ? renderDone() : null}
        {isMobile() && renderNewTaskModal()}
        {isMobile() && renderTaskDetailModal()}
      </div>
    </section>
  );
}

export default Dashboard;