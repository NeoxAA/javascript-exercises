const removeFromArray = (arr, ...args) => {
    return arr.filter(elem => !args.includes(elem));
}

module.exports = removeFromArray
