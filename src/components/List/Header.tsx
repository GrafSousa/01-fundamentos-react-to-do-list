import styles from './Header.module.css';

interface HeaderProps {
  tasksCounter: number;
  checkedTaskCounter: number;
}

export function ListHeader({
  tasksCounter = 0,
  checkedTaskCounter = 0,
}: HeaderProps) {
  return (
    <header className={styles.container}>
      <aside>
        <p className={styles.createdTasks}>Tarefas Criadas</p>
        <span className={styles.taskCounter}>{tasksCounter}</span>
      </aside>
      <aside>
        <p className={styles.doneTasks}>Concluídas</p>
        <span className={styles.taskCounter}>
          {checkedTaskCounter} de {tasksCounter}
        </span>
      </aside>
    </header>
  );
}
