  function leapYears(year) {
    if (year % 4 === 0 || year % 400 === 0) {
      if (year % 100 === 0 && year % 400 >= 1) {
        leapYear = false;
      } else {
        leapYear = true;
      }
    } else {
      leapYear = false;
    }
    return leapYear;
  }

module.exports = leapYears
