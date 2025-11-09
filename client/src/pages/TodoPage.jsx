import { useState, useEffect } from 'react';
import TodoForm from '../components/TodoForm';
import TodoItem from '../components/TodoItem';
import * as api from '../services/api';

function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingTodo, setEditingTodo] = useState(null);

  // Fetch todos on mount
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const data = await api.getTodos();
      setTodos(data);
      setError(null);
    } catch (err) {
      setError('Failed to load todos. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (todoData) => {
    try {
      const newTodo = await api.createTodo(todoData);
      setTodos([newTodo, ...todos]);
    } catch (err) {
      alert('Failed to create todo');
      console.error(err);
    }
  };

  const handleUpdate = async (todoData) => {
    try {
      const updated = await api.updateTodo(editingTodo._id, todoData);
      setTodos(todos.map(t => t._id === updated._id ? updated : t));
      setEditingTodo(null);
    } catch (err) {
      alert('Failed to update todo');
      console.error(err);
    }
  };

  const handleToggle = async (id) => {
    try {
      const updated = await api.toggleTodoDone(id);
      setTodos(todos.map(t => t._id === updated._id ? updated : t));
    } catch (err) {
      alert('Failed to toggle todo');
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this todo?')) return;

    try {
      await api.deleteTodo(id);
      setTodos(todos.filter(t => t._id !== id));
    } catch (err) {
      alert('Failed to delete todo');
      console.error(err);
    }
  };

  if (loading) return <div className="container"><p>Loading...</p></div>;

  return (
    <div className="container">
      <h1>📝 My Todo App</h1>

      {error && <div className="error-banner">{error}</div>}

      <div className="form-section">
        <h2>{editingTodo ? 'Edit Todo' : 'Add New Todo'}</h2>
        <TodoForm
          onSubmit={editingTodo ? handleUpdate : handleCreate}
          initialData={editingTodo}
          onCancel={editingTodo ? () => setEditingTodo(null) : null}
        />
      </div>

      <div className="todos-section">
        <h2>Todo List ({todos.length})</h2>
        {todos.length === 0 ? (
          <p className="empty-state">No todos yet. Add one above!</p>
        ) : (
          <div className="todo-list">
            {todos.map(todo => (
              <TodoItem
                key={todo._id}
                todo={todo}
                onToggle={handleToggle}
                onEdit={setEditingTodo}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default TodoPage;
