const expect = require('expect');
var { Users } = require('./users');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: 1,
            name: 'Vi',
            room: 'Node Course'
        }, {
            id: 2,
            name: 'Andres',
            room: 'React Course'
        }, {
            id: 3,
            name: 'Max',
            room: 'Node Course'
        }];
    });

    it('Should add a new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Andres',
            room: 'Room Test'
        };

        var resUser = users.addUser(user.id, user.name, user.room);
        expect(users.users).toMatchObject([user]);
    });

    it('Should remove a user', () => {
        var userId = 1;
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('Should not remove a user', () => {
        var userId = 10;
        var user = users.removeUser(userId);

        expect(user).toBeFalsy();
        expect(users.users.length).toBe(3);
    });

    it('Should find a user', () => {
        var userId = 2;
        var user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('Should not find a user', () => {
        var userId = 10;
        var user = users.getUser(userId);

        expect(user).toBeFalsy();
    });

    it('Should return names for Node Course', () => {
        var userList = users.getUserList('Node Course');

        expect(userList).toMatchObject(['Vi', 'Max']);
    });

    it('Should return names for React Course', () => {
        var userList = users.getUserList('React Course');

        expect(userList).toMatchObject(['Andres']);
    });
});