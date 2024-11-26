const users = [];

function addUser(user) {
    users.push(user);
}

function getUser(id) {
    return users.find(user => user.id === id);
}

function getActiveUserCount() {
    return users.filter(user => user.active).length;
}

module.exports = { addUser, getUser, getActiveUserCount };
