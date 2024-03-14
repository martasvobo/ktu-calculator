const calculateResult = (expression) => {
  try {
    let formattedExpression = expression.replace(/sin/g, "Math.sin");
    formattedExpression = formattedExpression.replace(/cos/g, "Math.cos");
    formattedExpression = formattedExpression.replace(/tan/g, "Math.tan");
    formattedExpression = formattedExpression.replace(/sqrt/g, "Math.sqrt");
    formattedExpression = formattedExpression.replace(/log/g, "Math.log10");
    formattedExpression = formattedExpression.replace(/exp/g, "Math.exp");
    formattedExpression = formattedExpression.replace(/\^/g, "**");
    return eval(formattedExpression);
  } catch (error) {
    return "Error";
  }
};

module.exports = calculateResult;
