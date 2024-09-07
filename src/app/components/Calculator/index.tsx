import Button from "./Button";
import styles from "../../styles/components/calculator.module.css";
import { useState } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const Calculator = () => {
  const [valueList, setValueList] = useState<string[]>(["0"]);
  const [operatorList, setOperatorList] = useState<(string | null)[]>([null]);
  const [result, setResult] = useState<string>();

  const onUpdateValue = (text: string) => {
    setResult(undefined);
    if (operatorList[operatorList.length - 1]) {
      setOperatorList((prev) => [...prev, null]);
      return setValueList((prev) => [...prev, text]);
    }

    if (valueList[valueList.length - 1] === "0") {
      if (text === "0") return;
      return setValueList((prev) =>
        prev.slice(0, prev.length - 1).concat(text),
      );
    }
    setValueList((prev) =>
      prev.slice(0, prev.length - 1).concat(prev[prev.length - 1] + text),
    );
  };

  const onUpdateOperator = (text: string) => {
    setOperatorList((prev) => [...prev.slice(0, prev.length - 1), text]);
    setResult(
      getResult(valueList, [
        ...operatorList.slice(0, operatorList.length - 1),
        text,
      ]),
    );
  };

  const onClearValue = () => {
    if (result === "0" || valueList[valueList.length - 1] === "0") {
      setOperatorList([null]);
      setValueList(["0"]);
      return setResult(undefined);
    }

    if (!operatorList[operatorList.length - 1]) {
      setOperatorList((prev) => [...prev.slice(0, prev.length - 1)]);
      setValueList((prev) => [...prev.slice(0, prev.length - 1), "0"]);
    }
    setResult("0");
  };

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

  const getResult = (
    valueList: string[],
    operatorList: (string | null)[],
  ): string | undefined => {
    if (operatorList.length <= 1) return undefined;

    let result: string | undefined =
      operatorList[0] === "/" || operatorList[0] === "x" ? "0" : valueList[0];
    let tempOperator: string | undefined;
    let multiDivTemp: string | undefined;

    for (let i = 0; i < operatorList.length; i++) {
      // 沒有運算子就不做運算
      if (!operatorList[i]) continue;

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
          if (operatorList[i + 1] === "+" || operatorList[i + 1] === "-") {
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

    return multiDivTemp ?? result;
  };

  return (
    <section className="flex aspect-[4/3] w-full max-w-full flex-col gap-2 md:w-1/4">
      <header className="px-2">
        <input
          className="black w-full bg-transparent p-2 text-8xl font-bold text-black dark:text-white"
          dir="rtl"
          value={result ?? valueList[valueList.length - 1]}
          defaultValue={"0"}
        />
      </header>
      <div className="flex flex-1 flex-wrap justify-evenly gap-2">
        <Button
          className="bg-gray-300"
          classNameText="text-black"
          onClick={onClearValue}
        >
          {result === "0" || valueList[valueList.length - 1] === "0"
            ? "AC"
            : "C"}
        </Button>
        <Button
          className="bg-gray-300"
          classNameText="text-black"
          onClick={() => {}}
        >
          +/-
        </Button>
        <Button
          className="bg-gray-300"
          classNameText="text-black"
          onClick={() => {}}
        >
          %
        </Button>
        <Button
          className={clsx("bg-orange-500", {
            "bg-white": operatorList[operatorList?.length - 1] === "/",
          })}
          classNameText={clsx("text-white", {
            "text-orange-500": operatorList[operatorList?.length - 1] === "/",
          })}
          onClick={() => onUpdateOperator("/")}
        >
          /
        </Button>
        <Button className="bg-gray-900" onClick={() => onUpdateValue("7")}>
          7
        </Button>
        <Button className="bg-gray-900" onClick={() => onUpdateValue("8")}>
          8
        </Button>
        <Button className="bg-gray-900" onClick={() => onUpdateValue("9")}>
          9
        </Button>
        <Button
          className={clsx("bg-orange-500", {
            "bg-white": operatorList[operatorList?.length - 1] === "x",
          })}
          classNameText={clsx("text-white", {
            "text-orange-500": operatorList[operatorList?.length - 1] === "x",
          })}
          onClick={() => onUpdateOperator("x")}
        >
          x
        </Button>
        <Button className="bg-gray-900" onClick={() => onUpdateValue("4")}>
          4
        </Button>
        <Button className="bg-gray-900" onClick={() => onUpdateValue("5")}>
          5
        </Button>
        <Button className="bg-gray-900" onClick={() => onUpdateValue("6")}>
          6
        </Button>
        <Button
          className={clsx("bg-orange-500", {
            "bg-white": operatorList[operatorList?.length - 1] === "-",
          })}
          classNameText={clsx("text-white", {
            "text-orange-500": operatorList[operatorList?.length - 1] === "-",
          })}
          onClick={() => onUpdateOperator("-")}
        >
          -
        </Button>
        <Button className="bg-gray-900" onClick={() => onUpdateValue("1")}>
          1
        </Button>
        <Button className="bg-gray-900" onClick={() => onUpdateValue("2")}>
          2
        </Button>
        <Button className="bg-gray-900" onClick={() => onUpdateValue("3")}>
          3
        </Button>
        <Button
          className={clsx("bg-orange-500", {
            "bg-white": operatorList[operatorList?.length - 1] === "+",
          })}
          classNameText={clsx("text-white", {
            "text-orange-500": operatorList[operatorList?.length - 1] === "+",
          })}
          onClick={() => onUpdateOperator("+")}
        >
          +
        </Button>
        <Button
          className={twMerge("bg-gray-900", styles.zero)}
          onClick={() => onUpdateValue("0")}
        >
          0
        </Button>
        <Button className="bg-gray-900" onClick={() => onUpdateValue(".")}>
          .
        </Button>
        <Button className="bg-orange-500" onClick={() => {}}>
          =
        </Button>
      </div>
    </section>
  );
};

export default Calculator;
