const { addUser, getUser, getActiveUserCount } = require('./user');

test('Adicionar e recuperar usuário', () => {
    const user = { id: 1, name: 'Alice', active: true };
    addUser(user);

    const retrievedUser = getUser(1);
    expect(retrievedUser).toEqual(user);
});

test('Verificar total de usuários ativos', () => {
    const user1 = { id: 2, name: 'Bob', active: true };
    const user2 = { id: 3, name: 'Charlie', active: false };
    addUser(user1);
    addUser(user2);

    expect(getActiveUserCount()).toBe(2);
});
