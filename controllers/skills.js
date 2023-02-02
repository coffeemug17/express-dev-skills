const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create
};

function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll(),
      title: 'All of My Skills'
    });
  }

function create(req, res) {
  console.log(req.body);
  // Models are responible for CRUD'ing the data
  Skill.create(req.body);
  // Always do a redirect when data has been changed
  res.redirect('/skills');
}

function show(req, res) {
  res.render('skills/show', {
    skill: Skill.getOne(req.params.id),
    title: "Detailed Skill"
  });
}

function newSkill(req, res) {
  res.render('/skills/new', { title: 'New Skill'});
}