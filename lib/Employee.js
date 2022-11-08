class Employee {
    constructor(props){
        this.name = props.name ||'';
        this.id = props.id || 0;
        this.email = props.email || '';
    }
    getId () {
        return this.id;
    } 
    getEmail () {
        return this.email;
    }
    getName () {
        return this.name;
    }
    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;