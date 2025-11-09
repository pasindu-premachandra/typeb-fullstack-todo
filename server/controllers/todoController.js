const Todo = require('../models/Todo');

// Get all todos
exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch todos', error: error.message });
  }
};

// Create new todo
exports.createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || title.trim() === '') {
      return res.status(400).json({ message: 'Title is required' });
    }

    const todo = await Todo.create({ title, description });
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create todo', error: error.message });
  }
};

// Update todo
exports.updateTodo = async (req, res) => {
  try {
    const { title, description } = req.body;

    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      { title, description },
      { new: true, runValidators: true }
    );

    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    res.json(todo);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update todo', error: error.message });
  }
};

// Toggle done status
exports.toggleDone = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    todo.done = !todo.done;
    await todo.save();

    res.json(todo);
  } catch (error) {
    res.status(500).json({ message: 'Failed to toggle todo', error: error.message });
  }
};

// Delete todo
exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);

    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    res.json({ message: 'Todo deleted successfully', id: req.params.id });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete todo', error: error.message });
  }
};
