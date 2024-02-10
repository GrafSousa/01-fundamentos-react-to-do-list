import { useState, ChangeEvent } from 'react';
import { PlusCircle } from '@phosphor-icons/react/dist/ssr';

import './global.css';

import styles from './App.module.css';

import { Header } from './components/Header';
import { Input } from './components/Input';
import { List, ListHeader } from './components/List';
import { Task } from './components/Task';
import { Empty } from './components/List/Empty';

export interface TaskType {
  id: number;
  content: string;
  isChecked: boolean;
}

function App() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const handleNewTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const handleCreateTask = () => {
    event.preventDefault();

    setTasks((task) => [...task, { id: tasks.length, content: newTask }]);
    setNewTask('');
  };

  const handleDeleteTask = (taskId: number) => {
    const tasksWithoutDeleteOne = tasks.filter((task) => task.id !== taskId);

    setTasks(tasksWithoutDeleteOne);
  };

  const handleCheckTask = (taskId: number) => {
    const tasksWithCheckedOne = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isChecked: !task.isChecked,
        };
      }
      return task;
    });

    setTasks(tasksWithCheckedOne);
  };

  const isNewTaskEmpty = newTask.length === 0;
  const totalCheckedTasks = tasks.reduce((prevTask, currentTask) => {
    if (currentTask.isChecked) {
      return prevTask + 1;
    }

    return prevTask;
  }, 0);

  return (
    <main>
      <Header />
      <form className={styles.wrapper} onSubmit={handleCreateTask}>
        <div className={styles.createTaskContainer}>
          <Input
            value={newTask}
            placeholder='Adicione uma nova tarefa'
            onChange={handleNewTaskChange}
          />
          <button
            type='submit'
            className={styles.createTaskButton}
            disabled={isNewTaskEmpty}
          >
            Criar <PlusCircle size={16} />
          </button>
        </div>

        <ListHeader
          tasksCounter={tasks.length}
          checkedTaskCounter={totalCheckedTasks}
        />

        {tasks.length > 0 ? (
          <List>
            {tasks.map((task) => (
              <li key={task.id} className={styles.item}>
                <Task
                  task={task}
                  onCheckTask={handleCheckTask}
                  onDeleteTask={handleDeleteTask}
                />
              </li>
            ))}
          </List>
        ) : (
          <Empty />
        )}
      </form>
    </main>
  );
}

export default App;
