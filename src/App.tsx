import { PlusCircle } from '@phosphor-icons/react/dist/ssr';

import './global.css';

import styles from './App.module.css';

import { Header } from './components/Header';
import { Input } from './components/Input';
function App() {
  return (
    <main>
      <Header />
      <form className={styles.wrapper}>
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
      </form>
    </main>
  );
}

export default App;
