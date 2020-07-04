const setItem = (item, value) => window.localStorage.setItem(item, JSON.stringify(value));
const getItem = (item) => JSON.parse(window.localStorage.getItem(item));
const removeItem = (item) => window.localStorage.removeItem(item);

module.exports = { getItem, setItem, removeItem };
