module.exports = function reverse(n) {
    return [...('' + n)].reverse().join('').replace('-', '');
}