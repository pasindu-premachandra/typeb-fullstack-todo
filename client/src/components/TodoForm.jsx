import { useState } from 'react';

function TodoForm({ onSubmit, initialData = null, onCancel }) {
  const [title, setTitle] = useState(initialData?.title || '');
  const [description, setDescription] = useState(initialData?.description || '');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setError('Title is required');
      return;
    }

    onSubmit({ title, description });

    if (!initialData) {
      setTitle('');
      setDescription('');
    }
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <div className="form-group">
        <input
          type="text"
          placeholder="Todo title *"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-input"
        />
        {error && <span className="error">{error}</span>}
      </div>

      <div className="form-group">
        <textarea
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-input"
          rows="3"
        />
      </div>

      <div className="form-actions">
        <button type="submit" className="btn btn-primary">
          {initialData ? 'Update' : 'Add'} Todo
        </button>
        {onCancel && (
          <button type="button" onClick={onCancel} className="btn btn-secondary">
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default TodoForm;
