const Intern = require('../lib/Intern');
const intern = new Intern('UofT');

intern.name = 'Sabrina'
intern.email = 'sn@gmail.com'
intern.id = 7
intern.school = 'UofT'

test('intern has a name', () => {
    expect(intern.name).toBe('Sabrina');
});

test('intern has an id', () => {
    expect(intern.id).toBe(7);
});

test('intern has an email', () => {
    expect(intern.email).toBe('sn@gmail.com');
});

test('intern has a getName function', () => {
    expect(typeof intern.getName).toBe('function');
});

test('intern has a getId function', () => {
    expect(typeof intern.getId).toBe('function');
});

test('intern has a getEmail function', () => {
    expect(typeof intern.getEmail).toBe('function');
});

test('intern has a getRole function', () => {
    expect(typeof intern.getRole).toBe('function');
});

test('intern has a school', () => {
    expect(intern.school).toBe('UofT');
});

test('intern has a getSchool function', () => {
    expect(typeof intern.getSchool).toBe('function');
});