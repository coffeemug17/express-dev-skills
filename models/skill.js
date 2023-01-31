const skills = [
    {skill: 'JavaScript', mastery: 'Intermediate', yearsExp: 1},
    {skill: 'ExpressJS', mastery: 'Beginner', yearsExp: 1},
    {skill: 'Python', mastery: 'Proficient', yearsExp: 4},
    {skill: 'HTML/CSS', mastery: 'Intermediate', yearsExp: 2}
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