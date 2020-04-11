  function sumAll(num1, num2) {
    if (typeof num1 == "number" && typeof num2 == "number") {
      if (num1 < num2 && num1 >= 0) {
        counter = num1;
        total = 0;
        if (num1 >= 0) {
          for (let i = 0; i < num2; i++) {
            total += counter + i;
          }
        } else {
          total = "Error";
        }
        return total;
      } else if (num1 > num2 && num2 >= 0) {
        counter = num2;
        total = 0;
        if (num1 >= 0 && typeof num2 == "number") {
          for (let i = 0; i < num1; i++) {
            total += counter + i;
          }
        } else {
          total = "ERROR";
        }
        return total;
      } else {
        return "ERROR";
      }
    } else {
      return "ERROR";
    }
  }
module.exports = sumAll
