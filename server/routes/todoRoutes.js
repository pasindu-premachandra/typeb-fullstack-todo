const express = require('express');
const router = express.Router();
const {
  getAllTodos,
  createTodo,
  updateTodo,
  toggleDone,
  deleteTodo,
} = require('../controllers/todoController');

// GET /api/todos - Get all todos
router.get('/', getAllTodos);

// POST /api/todos - Create new todo
router.post('/', createTodo);

// PUT /api/todos/:id - Update todo
router.put('/:id', updateTodo);

// PATCH /api/todos/:id/done - Toggle done status
router.patch('/:id/done', toggleDone);

// DELETE /api/todos/:id - Delete todo
router.delete('/:id', deleteTodo);

module.exports = router;
