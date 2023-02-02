const skills = [
    {name: 'JavaScript', mastery: 'Intermediate', yearsExp: 2},
    {name: 'ExpressJS', mastery: 'Beginner', yearsExp: 1},
    {name: 'Python', mastery: 'Proficient', yearsExp: 4},
    {name: 'HTML/CSS', mastery: 'Intermediate', yearsExp: 3}
];

module.exports = {
    getAll,
    getOne,
    create
}

function getAll() {
    return skills;
}

function getOne(yrs) {
    yrs = parseInt(yrs);
    return skills.find(skill => skill.yearsExp === yrs);
}

function create(skill) {
    skill.yearsExp = Date.now() % 100;
    skill.mastery = 'Beginner';
    skills.push(skill);
}