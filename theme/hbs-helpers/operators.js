const operatorHelpers = {
  and:  () => {
    return Array.prototype.every.call(arguments, Boolean);
  },
  or: () => Array.prototype.slice.call(arguments, 0, -1).some(Boolean),
};

module.exports = { operatorHelpers };
