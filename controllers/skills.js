const Todo = require('../models/skill');

module.exports = {
    index,
    show
};

function index(req, res) {
    res.render('skills/index', {
      todos: Todo.getAll()
    });
  }

function show(req, res) {
  res.render('skills/show', {
    todo: Todo.getOne(req.params.id)
  });
}