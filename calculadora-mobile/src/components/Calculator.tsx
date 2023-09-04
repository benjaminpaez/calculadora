import { useState } from "react";
import { Button } from "./Button";
import "./calculator.css";

export const Calculator = () => {
  const [data, setData] = useState({ operation: "", result: "" });

  const write = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (data.operation.length >= 10) return;
    const button = event.currentTarget as HTMLButtonElement;
    setData({
      ...data,
      operation: `${data.operation}` + button.innerText,
    });
  };
  const deleteChar = () => {
    setData({...data, operation: data.operation.slice(0, data.operation.length-1)})
  }
  const resetAll=() => {
    setData({ operation: '', result: ''})
  }

  const getResult= () => {
    const result = eval(data.operation)
    setData({...data, result})
  }
  return (
    <main>
      <span className="result">{data.result}</span>
      <span className="display">{data.operation}</span>
      <Button text="C" clase="gray" handleClick={resetAll}/>
      <Button text="+/-" clase="gray" />
      <Button text="%" clase="gray" />
      <Button text="/" clase="operation" handleClick={write}/>
      <Button text="7" clase="number" handleClick={write} />
      <Button text="8" clase="number" handleClick={write} />
      <Button text="9" clase="number" handleClick={write} />
      <Button text="*" clase="operation" handleClick={write}/>
      <Button text="4" clase="number" handleClick={write} />
      <Button text="5" clase="number" handleClick={write} />
      <Button text="6" clase="number" handleClick={write} />
      <Button text="-" clase="operation" handleClick={write}/>
      <Button text="1" clase="number" handleClick={write} />
      <Button text="2" clase="number" handleClick={write} />
      <Button text="3" clase="number" handleClick={write} />
      <Button text="+" clase="operation" handleClick={write}/>
      <Button text="." clase="number" />
      <Button text="0" clase="number" handleClick={write} />
      <Button text="<" clase="number" handleClick={deleteChar}/>
      <Button text="=" clase="operation" handleClick={getResult}/>
    </main>
  );
};
