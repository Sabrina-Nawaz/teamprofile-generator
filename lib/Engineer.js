const Employee = require('../lib/Employee');
class Engineer extends Employee {
    constructor(github) {
        super();
        this.github = github;
    }
    getGitHub () {
        return this.github;
    }
    getRole () {
        return this
    }
}

module.exports = Engineer