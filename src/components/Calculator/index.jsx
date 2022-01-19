import Button from "../Button";
import Display from "../Display";

const Calculator = () => {
  return (
    <div className="h-[320px] w-[235px] rounded-b-xl overflow-hidden">
      <div className="flex justify-end px-4 py-2.5 overflow-hidden text-3xl text-white 2 bg-gradient-to-r from-sky-600/50 to-sky-900/70 cursor-text rounded-t-xl">
        <Display value={0.12} />
      </div>
      <div className="grid justify-center h-full grid-cols-4 grid-rows-6 text-xl text-gray-700 bg-transparent">
        <Button label="AC" />
        <Button label="/" />
        <Button label="7" />
        <Button label="8" />
        <Button label="9" />
        <Button label="*" />
        <Button label="4" />
        <Button label="5" />
        <Button label="6" />
        <Button label="-" />
        <Button label="1" />
        <Button label="2" />
        <Button label="3" />
        <Button label="+" />
        <Button label="0" />
        <Button label="." />
        <Button label="=" />
      </div>
    </div>
  );
};

export default Calculator;
