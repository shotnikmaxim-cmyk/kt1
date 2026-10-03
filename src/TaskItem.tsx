import type { Task } from './types'

interface TaskItemProps {
  task: Task
}

export function TaskItem({ task }: TaskItemProps) {
  return (
    <li className={task.isCompleted ? 'task task--completed' : 'task'}>
      <span className="task__status" aria-label={task.isCompleted ? 'Выполнено' : 'Не выполнено'}>
        {task.isCompleted ? '✓' : '○'}
      </span>
      <span>{task.title}</span>
    </li>
  )
}
