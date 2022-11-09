const Employee = require('../lib/Employee');
class Engineer extends Employee {
    constructor(props,github) {
        super(props);
        this.github = github;
    }
    getGitHub () {
        return this.github;
    }
    getRole () {
        return 'Engineer'
    }
}

module.exports = Engineer;