import { TodoObj } from 'components/dashboard/components/addTask/addTask';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import './itemCounter.scss';

function ItemCounter() {
  const todos = useSelector((state: RootState) => state.todos);
  const [todosCompleted, setTodosCompleted] = useState<TodoObj[]>([]);

  useEffect(() => {
    setTodosCompleted(todos.filter((todo) => todo.completed));
  }, [todos]);
  
  return (
    <div className='item-counter'>
      <span className='item-counter__text'>{todosCompleted.length}/{todos.length}</span>
    </div>
  );
}

export default ItemCounter;
