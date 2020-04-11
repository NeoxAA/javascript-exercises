  function ctof(degreesCelsius) {
    conversionFormula = degreesCelsius * (9 / 5) + 32;
    roundIt = Math.round(conversionFormula * 10 + Number.EPSILON) / 10;
    return roundIt;
  }
  function ftoc(degreesFarenheit) {
    conversionFormula = (degreesFarenheit - 32) * (5 / 9);
    roundIt = Math.round(conversionFormula * 10 + Number.EPSILON) / 10;
    return roundIt;
  }

module.exports = {
  ftoc,
  ctof
}
