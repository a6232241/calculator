import Button from "./Button";
import styles from "../../styles/components/calculator.module.css";
import { useState } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { getResult } from "./helper";

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
      prev
        .slice(0, prev.length - 1)
        .concat((prev[prev.length - 1] + text).slice(0, 10)),
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

  const settlement = (valueList: string[], operatorList: (string | null)[]) => {
    let _result = getResult(valueList, [
      ...operatorList.splice(0, operatorList.length - 1),
      "=",
    ]);
    setValueList(_result ? [_result] : ["0"]);
    setOperatorList([null]);
  };

  return (
    <section className="flex aspect-[4/3] w-full max-w-full flex-col gap-2 md:w-1/4">
      <header className="px-2">
        <input
          className={clsx(
            "black w-full bg-transparent p-2 text-right text-8xl font-bold text-black dark:text-white",
            {
              "text-7xl":
                (result ?? valueList[valueList.length - 1]).length > 6,
              "text-6xl":
                (result ?? valueList[valueList.length - 1]).length > 8,
            },
          )}
          value={result ?? valueList[valueList.length - 1]}
          disabled
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
          disabled={true}
        >
          +/-
        </Button>
        <Button
          className="bg-gray-300"
          classNameText="text-black"
          onClick={() => {}}
          disabled={true}
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
        <Button
          className="bg-gray-900"
          onClick={() => onUpdateValue(".")}
          disabled={true}
        >
          .
        </Button>
        <Button
          className="bg-orange-500"
          onClick={() => settlement(valueList, operatorList)}
        >
          =
        </Button>
      </div>
    </section>
  );
};

export default Calculator;
