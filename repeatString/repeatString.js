function repeatString(theString, theNum) {
    if (theNum == 0) {
        return ""
    }
    else if (theNum < 0) {
        return "ERROR"
    }
    else {
        finalString = theString.repeat(theNum);
        return finalString
    }
}

module.exports = repeatString

