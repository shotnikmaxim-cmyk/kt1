import { useState } from 'react'
import { TaskBoard } from './TaskBoard'
import type { Task } from './types'

const initialTasks: Task[] = [
  { id: 1, title: 'Создать интерфейс Task', isCompleted: true },
  { id: 2, title: 'Передать список задач через props', isCompleted: true },
  { id: 3, title: 'Добавить условный рендеринг', isCompleted: false },
]

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)

  return (
    <main className="app">
      <section className="board" aria-labelledby="board-title">
        <p className="eyebrow">React + TypeScript</p>
        <h1 id="board-title">Доска задач</h1>
        <p className="description">Список рендерится через map(), а завершённые задачи отмечены отдельно.</p>
        <TaskBoard tasks={tasks} />
        <button className="clear-button" type="button" onClick={() => setTasks([])}>
          Показать пустой список
        </button>
      </section>
    </main>
  )
}

export default App
