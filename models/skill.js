const skills = [
    {name: 'JavaScript', mastery: 'Intermediate', yearsExp: 2},
    {name: 'ExpressJS', mastery: 'Beginner', yearsExp: 1},
    {name: 'Python', mastery: 'Proficient', yearsExp: 4},
    {name: 'HTML/CSS', mastery: 'Intermediate', yearsExp: 3}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
}

function deleteOne(yrs) {
    yrs = parseInt(yrs);
    const year = skills.findIndex(skill => skill.yearsExp === yrs);
    skills.splice(year,1);
}

function create(skill) {
    skill.yearsExp = Date.now() % 100;
    skill.mastery = 'Beginner';
    skill.name = skill.skill;
    skills.push(skill);
}

function getAll() {
    return skills;
}

function getOne(yrs) {
    yrs = parseInt(yrs);
    return skills.find(skill => skill.yearsExp === yrs);
}