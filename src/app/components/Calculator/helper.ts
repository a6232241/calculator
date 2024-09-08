const calculate = (prev: string, next: string, operator: string): string => {
  let result = 0;
  const num1 = parseFloat(prev);
  const num2 = parseFloat(next);
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "x":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      break;
  }
  return result.toString();
};

export const getResult = (
  valueList: string[],
  operatorList: (string | null)[],
): string | undefined => {
  if (operatorList.length <= 1) return undefined;

  let result: string | undefined =
    operatorList[0] === "/" || operatorList[0] === "x" ? "0" : valueList[0];
  let tempOperator: string | undefined;
  let multiDivTemp: string | undefined;

  for (let i = 0; i < operatorList.length; i++) {
    switch (operatorList[i]) {
      case "/":
      case "x":
        multiDivTemp = calculate(
          multiDivTemp ?? valueList[i],
          valueList[i + 1] ?? "1",
          operatorList[i] as string,
        );
        break;
      default:
        if (
          operatorList[i + 1] === "+" ||
          operatorList[i + 1] === "-" ||
          operatorList[i + 1] === "="
        ) {
          result = calculate(
            result,
            valueList[i + 1] ?? "0",
            operatorList[i] as string,
          );
        } else {
          result = calculate(
            result,
            multiDivTemp ?? "0",
            tempOperator ?? "+",
          );
          tempOperator = operatorList[i] as string;
          multiDivTemp = undefined;
        }
        break;
    }
  }

  return multiDivTemp?.slice(0, 10) ?? result?.slice(0, 10);
};