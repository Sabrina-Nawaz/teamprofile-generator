const Engineer = require('../lib/Engineer');
const engineer = new Engineer('fooguy64');

engineer.name = 'Sabrina'
engineer.email = 'sn@gmail.com'
engineer.id = 7

test('engineer has a name', () => {
    expect(engineer.name).toBe('Sabrina');
});

test('engineer has an id', () => {
    expect(engineer.id).toBe(7);
});

test('engineer has an email', () => {
    expect(engineer.email).toBe('sn@gmail.com');
});

test('engineer has a getName function', () => {
    expect(typeof engineer.getName).toBe('function');
});

test('engineer has a getId function', () => {
    expect(typeof engineer.getId).toBe('function');
});

test('engineer has a getEmail function', () => {
    expect(typeof engineer.getEmail).toBe('function');
});

test('engineer has a getRole function', () => {
    expect(typeof engineer.getRole).toBe('function');
});

test('engineer has a github username', () => {
    expect(engineer.github).toBe('fooguy64');
});

test('engineer has a getGitHub function', () => {
    expect(typeof engineer.getGitHub).toBe('function');
});