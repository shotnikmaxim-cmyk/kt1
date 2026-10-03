import { TaskItem } from './TaskItem'
import type { Task } from './types'

interface TaskBoardProps {
  tasks: Task[]
}

export function TaskBoard({ tasks }: TaskBoardProps) {
  if (tasks.length === 0) {
    return <p className="empty-state">Задач пока нет</p>
  }

  return (
    <ul className="task-list" aria-label="Список задач">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  )
}
