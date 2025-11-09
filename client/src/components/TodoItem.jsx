function TodoItem({ todo, onToggle, onEdit, onDelete }) {
  return (
    <div className={`todo-item ${todo.done ? 'done' : ''}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggle(todo._id)}
          className="todo-checkbox"
        />
        <div className="todo-text">
          <h3 className="todo-title">{todo.title}</h3>
          {todo.description && (
            <p className="todo-description">{todo.description}</p>
          )}
        </div>
      </div>

      <div className="todo-actions">
        <button onClick={() => onEdit(todo)} className="btn btn-edit">
          Edit
        </button>
        <button onClick={() => onDelete(todo._id)} className="btn btn-delete">
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
