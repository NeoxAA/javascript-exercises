function reverseString(theString) {
    splitString = theString.split("");
    reverseIt = splitString.reverse();
    joinIt = reverseIt.join("");
    return joinIt
}

module.exports = reverseString
