import React, { useState } from "react";
import { web3, helloWorldContract } from "../web3";
import "../index.css";

interface AddNumbersComponentProps {
  account: string;
  connectWallet: () => void;
}

const AddNumbersComponent: React.FC<AddNumbersComponentProps> = ({ account, connectWallet }) => {
  const [number1, setNumber1] = useState<number>(0);
  const [number2, setNumber2] = useState<number>(0);
  const [operation, setOperation] = useState<string>("+");
  const [result, setResult] = useState<number | null>(null);

  const calculateResult = async () => {
    if (!account) {
      alert("Please connect your wallet first.");
      return;
    }

    try {
      const transaction = await helloWorldContract.methods
        .confirmOperation(number1, number2, operation)
        .send({ from: account });

      if (transaction.status) {
        const computedResult = await helloWorldContract.methods.getResult().call();
        setResult(Number(computedResult));
      }
    } catch (error) {
      console.error("Transaction failed:", error);
    }
  };

  return (
    <div className="app">
      <h1 className="title">Blockchain Calculator</h1>
      <div className="input-container">
        <input
          type="number"
          placeholder="Enter first number"
          value={number1}
          onChange={(e) => setNumber1(Number(e.target.value))}
          className="input"
        />
        <select value={operation} onChange={(e) => setOperation(e.target.value)} className="input">
          <option value="+">Addition (+)</option>
          <option value="-">Subtraction (-)</option>
          <option value="*">Multiplication (*)</option>
          <option value="/">Division (/)</option>
        </select>
        <input
          type="number"
          placeholder="Enter second number"
          value={number2}
          onChange={(e) => setNumber2(Number(e.target.value))}
          className="input"
        />
        <button onClick={calculateResult} className="button">
          Confirm & Get Result
        </button>
      </div>
      {result !== null && <p className="result">Result: {result}</p>}
      {account ? (
        <p className="account">Connected Account: {account}</p>
      ) : (
        <button onClick={connectWallet} className="button">
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default AddNumbersComponent;
