import { Trash, Check } from '@phosphor-icons/react/dist/ssr';

import styles from './Task.module.css';

import { TaskType } from '../App';

interface TaskProps {
  task: TaskType;
  onCheckTask: (taskId: number) => void;
  onDeleteTask: (taskId: number) => void;
}

export function Task({ task, onCheckTask, onDeleteTask }: TaskProps) {
  const checkButtonClassName = task.isChecked
    ? styles['checkButton-checked']
    : styles['checkButton-unchecked'];

  const textClassName = task.isChecked ? styles['text-checked'] : '';

  return (
    <div className={styles.task}>
      <div className={styles.content}>
        <button
          type='button'
          className={`${styles.checkbox} ${checkButtonClassName}`}
          onClick={() => onCheckTask(task.id)}
        >
          {task.isChecked && <Check size={12} color='#f2f2f2' weight='bold' />}
        </button>
        <p className={`${styles.text} ${textClassName}`}>{task.content}</p>
      </div>
      <button
        className={styles.deleteButton}
        onClick={() => onDeleteTask(task.id)}
      >
        <Trash />
      </button>
    </div>
  );
}
