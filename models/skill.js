const skills = [
    {name: 'JavaScript', mastery: 'Intermediate', yearsExp: 1},
    {name: 'ExpressJS', mastery: 'Beginner', yearsExp: 1},
    {name: 'Python', mastery: 'Proficient', yearsExp: 4},
    {name: 'HTML/CSS', mastery: 'Intermediate', yearsExp: 2}
];

module.exports = {
    getAll,
    getOne
}

function getAll() {
    return skills;
}

function getOne(yrs) {
    yrs = parseInt(yrs);
    return skills.find(skill => skill.yearsExp === yrs);
}