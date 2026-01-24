import { useState } from "react";

const Calculator = () => {
  const [result, setResult] = useState("");

  const clickHandle = (e) => {
    setResult(result + e.target.value);
  };

  const clearScreen = () => {
    setResult("");
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch {
      setResult("Error");
    }
  };

  return (
    <div className="flex items-center justify-center  bg-gray-100">
      <div className="bg-white p-4 rounded-xl shadow-lg w-64">
        {/* Display */}
        <input
          type="text"
          value={result}
          placeholder="0"
          readOnly
          className="w-full h-12 text-right text-2xl px-3 border rounded mb-4"
        />

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-2">
          {/* Row 1 */}
          <input
            type="button"
            value="C"
            onClick={clearScreen}
            className="bg-red-500 text-white p-3 rounded"
          />

          <input
            type="button"
            value="%"
            onClick={clickHandle}
            className="bg-gray-300 p-3 rounded"
          />

          <input
            type="button"
            value="/"
            onClick={clickHandle}
            className="bg-gray-300 p-3 rounded"
          />

          <input
            type="button"
            value="*"
            onClick={clickHandle}
            className="bg-amber-500 text-white p-3 rounded"
          />

          {/* Row 2 */}
          <input
            type="button"
            value="7"
            onClick={clickHandle}
            className="bg-gray-200 p-3 rounded"
          />

          <input
            type="button"
            value="8"
            onClick={clickHandle}
            className="bg-gray-200 p-3 rounded"
          />

          <input
            type="button"
            value="9"
            onClick={clickHandle}
            className="bg-gray-200 p-3 rounded"
          />

          <input
            type="button"
            value="-"
            onClick={clickHandle}
            className="bg-amber-500 text-white p-3 rounded"
          />

          {/* Row 3 */}
          <input
            type="button"
            value="4"
            onClick={clickHandle}
            className="bg-gray-200 p-3 rounded"
          />

          <input
            type="button"
            value="5"
            onClick={clickHandle}
            className="bg-gray-200 p-3 rounded"
          />

          <input
            type="button"
            value="6"
            onClick={clickHandle}
            className="bg-gray-200 p-3 rounded"
          />
          <input
            type="button"
            value="+"
            onClick={clickHandle}
            className="bg-amber-500 text-white p-3 rounded"
          />

          <input
            type="button"
            value="1"
            onClick={clickHandle}
            className="bg-gray-200 p-3 rounded"
          />
          <input
            type="button"
            value="2"
            onClick={clickHandle}
            className="bg-gray-200 p-3 rounded"
          />

          <input
            type="button"
            value="3"
            onClick={clickHandle}
            className="bg-gray-200 p-3 rounded"
          />

          <input
            type="button"
            value="="
            onClick={calculate}
            className="bg-amber-500 text-white p-3 rounded"
          />

          {/* Row 4 */}
          <input
            type="button"
            value="00"
            onClick={clickHandle}
            className="bg-gray-200 p-3 rounded col-span-2"
          />

          <input
            type="button"
            value="0"
            onClick={clickHandle}
            className="bg-gray-200 p-3 rounded"
          />

          <input
            type="button"
            value="."
            onClick={clickHandle}
            className="bg-green-500 text-white p-3 rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
