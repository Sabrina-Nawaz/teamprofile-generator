const Manager = require('../lib/Manager');
const engineerProps={
    name:"Sabrina",
    email:"sn@gmail.com",
    id:7
}
const manager = new Manager(engineerProps,100);

test('manager has a name', () => {
    expect(manager.name).toBe('Sabrina');
});

test('manager has an id', () => {
    expect(manager.id).toBe(7);
});

test('manager has an email', () => {
    expect(manager.email).toBe('sn@gmail.com');
});

test('manager has a getName function', () => {
    expect(typeof manager.getName).toBe('function');
});

test('manager has a getId function', () => {
    expect(typeof manager.getId).toBe('function');
});

test('manager has a getEmail function', () => {
    expect(typeof manager.getEmail).toBe('function');
});

test('manager has a getRole function', () => {
    expect(typeof manager.getRole).toBe('function');
});

test('manager has an office number', () => {
    expect(manager.officeNumber).toBe(100);
});