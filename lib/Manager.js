const Employee = require('../lib/Employee');
class Manager extends Employee {
    constructor(props,officeNumber) {
        super(props);
        this.officeNumber = officeNumber;
    }
    getRole () {
        return 'Manager'
    }
}

module.exports = Manager;
