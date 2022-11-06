class Employee {
    constructor(){
        this.name = '';
        this.id = 0;
        this.email = '';
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
        return this;
    }
}

module.exports = Employee