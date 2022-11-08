const Employee = require('../lib/Employee');
class Engineer extends Employee {
    constructor({github, ...props}) {
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