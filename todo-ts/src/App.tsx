import { useState } from "react"
import type { ITodo } from "./entities/todo/todo.model"
import Todo from "./shared/todo/todo.ui"

function App() {
  const [todos, setTodos] = useState<ITodo[]>([])

  const handleAdd = (e) => {

  }

  const setStatus = (id: number) => {

  }

  const deleteTodo = (id: number) => {

  }

  return (
    <div className="container">
      <div className="header">
        <h1>Todo App</h1>
        <p>Управляйте своими задачами</p>
      </div>

      <div className="add-todo">
        <form className="input-container">
          <input type="text" className="todo-input" placeholder="Добавить новую задачу..." id="todoInput" />
          <button className="add-btn" id="addBtn">Добавить</button>
        </form>
      </div>

      <div className="filters">
        <button className="filter-btn active" data-filter="all">Все</button>
        <button className="filter-btn" data-filter="active">Активные</button>
        <button className="filter-btn" data-filter="completed">Завершенные</button>
      </div>

      <div className="todo-list">
        {todos.map((el) => <Todo {...el}
          setStatus={() => { setStatus(el.id) }}
          deleteTodo={() => { deleteTodo(el.id) }}
        />)}
      </div>

      <div className="stats">
        Всего: 4 | Активных: 3 | Завершено: 1
      </div>
    </div>
  )
}

export default App
