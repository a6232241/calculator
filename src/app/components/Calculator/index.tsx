import Button from "./Button";
import "../../styles/components/calculator.css";

const calculator = () => {
  return (
    <div className="flex h-auto w-full flex-wrap justify-evenly gap-2 md:w-48">
      <Button className="bg-gray-300" onClick={() => {}}>
        AC
      </Button>
      <Button className="bg-gray-300" onClick={() => {}}>
        +/-
      </Button>
      <Button className="bg-gray-300" onClick={() => {}}>
        %
      </Button>
      <Button className="bg-orange-400" onClick={() => {}}>
        /
      </Button>
      <Button
        className="bg-gray-600"
        classNameText="text-white"
        onClick={() => {}}
      >
        7
      </Button>
      <Button
        className="bg-gray-600"
        classNameText="text-white"
        onClick={() => {}}
      >
        8
      </Button>
      <Button
        className="bg-gray-600"
        classNameText="text-white"
        onClick={() => {}}
      >
        9
      </Button>
      <Button className="bg-orange-400" onClick={() => {}}>
        x
      </Button>
      <Button
        className="bg-gray-600"
        classNameText="text-white"
        onClick={() => {}}
      >
        4
      </Button>
      <Button
        className="bg-gray-600"
        classNameText="text-white"
        onClick={() => {}}
      >
        5
      </Button>
      <Button
        className="bg-gray-600"
        classNameText="text-white"
        onClick={() => {}}
      >
        6
      </Button>
      <Button className="bg-orange-400" onClick={() => {}}>
        -
      </Button>
      <Button
        className="bg-gray-600"
        classNameText="text-white"
        onClick={() => {}}
      >
        1
      </Button>
      <Button
        className="bg-gray-600"
        classNameText="text-white"
        onClick={() => {}}
      >
        2
      </Button>
      <Button
        className="bg-gray-600"
        classNameText="text-white"
        onClick={() => {}}
      >
        3
      </Button>
      <Button className="bg-orange-400" onClick={() => {}}>
        +
      </Button>
      <Button
        className="calculator-zero flex items-center justify-start bg-gray-600"
        classNameText="text-white"
        onClick={() => {}}
      >
        0
      </Button>
      <Button
        className="bg-gray-600"
        classNameText="text-white"
        onClick={() => {}}
      >
        .
      </Button>
      <Button className="bg-orange-400" onClick={() => {}}>
        =
      </Button>
    </div>
  );
};

export default calculator;
