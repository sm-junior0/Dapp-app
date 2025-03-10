import React, { useEffect, useState } from "react";
import { helloWorldContract } from "../web3";
import "../index.css";

interface UpdateMessageComponentProps {
  account: string;
  connectWallet: () => void;
}

const UpdateMessageComponent: React.FC<UpdateMessageComponentProps> = ({ account, connectWallet }) => {
  const [message, setMessage] = useState<string>("");
  const [userName, setUserName] = useState<string>("");

  // Fetch the initial message from the contract
  useEffect(() => {
    const fetchMessage = async () => {
      const message = await helloWorldContract.methods.getMessage().call() as string;
      setMessage(message);
    };
    fetchMessage();
  }, []);

  // Update the message in the contract
  const updateMessage = async () => {
    if (!account) {
      alert("Please connect your wallet first.");
      return;
    }

    try {
      // Send transaction via MetaMask
      await helloWorldContract.methods.setMessage(`Hello, ${userName}!`).send({ from: account });
      const newMessage = await helloWorldContract.methods.getMessage().call() as string;
      setMessage(newMessage);
    } catch (error) {
      console.error("Error updating message:", error);
    }
  };

  return (
    <div className="app">
      <h1 className="title">{message}</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter your name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="input"
        />
        <button onClick={updateMessage} className="button">
          Update message
        </button>
      </div>
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

export default UpdateMessageComponent;