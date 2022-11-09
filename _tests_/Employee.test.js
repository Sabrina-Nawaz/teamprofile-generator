const Employee = require('../lib/Employee');

const engineerProps={
    name:"Sabrina",
    email:"sn@gmail.com",
    id:7
}
const employee= new Employee(engineerProps);

test('employee has a name', () => {
    expect(employee.name).toBe('Sabrina');
});

test('employee has an id', () => {
    expect(employee.id).toBe(7);
});

test('employee has an email', () => {
    expect(employee.email).toBe('sn@gmail.com');
});

test('employee has a getName function', () => {
    expect(typeof employee.getName).toBe('function');
});

test('employee has a getId function', () => {
    expect(typeof employee.getId).toBe('function');
});

test('employee has a getEmail function', () => {
    expect(typeof employee.getEmail).toBe('function');
});

test('employee has a getRole function', () => {
    expect(typeof employee.getRole).toBe('function');
});