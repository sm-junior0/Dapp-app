// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useEffect, useState } from "react";
// import { helloWorldContract } from "./web3";
// import "./index.css";

// function App() {
//   const [message, setMessage] = useState<string>("");
//   const [userName, setUserName] = useState<string>("");
//   const [account, setAccount] = useState<string>(""); // State for user's account address

//   // Fetch the initial message from the contract
//   useEffect(() => {
//     const fetchMessage = async () => {
//       const message = await helloWorldContract.methods.getMessage().call() as string;
//       setMessage(message);
//     };
//     fetchMessage();
//   }, []);

//   // Connect to MetaMask and fetch the user's account address
//   const connectWallet = async () => {
//     if ((window as any).ethereum) {
//       try {
//         // Request account access
//         const accounts = await (window as any).ethereum.request({ method: "eth_requestAccounts" });
//         setAccount(accounts[0]); // Set the first account
//       } catch (error) {
//         console.error("User denied account access or error occurred:", error);
//       }
//     } else {
//       alert("MetaMask is not installed. Please install it to use this app.");
//     }
//   };

//   // Update the message in the contract
//   const updateMessage = async () => {
//     if (!account) {
//       alert("Please connect your wallet first.");
//       return;
//     }

//     try {
//       // Send transaction via MetaMask
//       await helloWorldContract.methods.setMessage(`Hello, ${userName}!`).send({ from: account });
//       const newMessage = await helloWorldContract.methods.getMessage().call() as string;
//       setMessage(newMessage);
//     } catch (error) {
//       console.error("Error updating message:", error);
//     }
//   };

//   return (
//     <div className="app">
//       <h1 className="title">{message}</h1>
//       <div className="input-container">
//         <input
//           type="text"
//           placeholder="Enter your name"
//           value={userName}
//           onChange={(e) => setUserName(e.target.value)}
//           className="input"
//         />
//         <button onClick={updateMessage} className="button">
//           Update message
//         </button>
//       </div>
//       {account ? (
//         <p className="account">Connected Account: {account}</p>
//       ) : (
//         <button onClick={connectWallet} className="button">
//           Connect Wallet
//         </button>
//       )}
//     </div>
//   );
// }

// export default App;

"use client"

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react"
import { helloWorldContract } from "./web3"
import "./index.css"

function App() {
  const [message, setMessage] = useState<string>("")
  const [userName, setUserName] = useState<string>("")
  const [account, setAccount] = useState<string>("")

  // Fetch the initial message from the contract
  useEffect(() => {
    const fetchMessage = async () => {
      const message = (await helloWorldContract.methods.getMessage().call()) as string
      setMessage(message)
    }
    fetchMessage()
  }, [])

  // Connect to MetaMask and fetch the user's account address
  const connectWallet = async () => {
    if ((window as any).ethereum) {
      try {
        const accounts = await (window as any).ethereum.request({ method: "eth_requestAccounts" })
        setAccount(accounts[0])
      } catch (error) {
        console.error("User denied account access or error occurred:", error)
      }
    } else {
      alert("MetaMask is not installed. Please install it to use this app.")
    }
  }

  // Update the message in the contract
  const updateMessage = async () => {
    if (!account) {
      alert("Please connect your wallet first.")
      return
    }

    try {
      await helloWorldContract.methods.setMessage(`Hello, ${userName}!`).send({ from: account })
      const newMessage = (await helloWorldContract.methods.getMessage().call()) as string
      setMessage(newMessage)
    } catch (error) {
      console.error("Error updating message:", error)
    }
  }

  return (
    <div className="app">
      {/* Decorative floating shapes */}
      <div className="floating-shape shape-1"></div>
      <div className="floating-shape shape-2"></div>

      {/* Left panel - Status and information */}
      <div className="status-panel">
        <div>
          <h1 className="title">Ethereum Greeter</h1>
          <div className="message-display">{message || "Loading message..."}</div>
        </div>

        {account ? (
          <div className="account">
            <div className="account-icon">🔗</div>
            <span>{account}</span>
          </div>
        ) : (
          <button onClick={connectWallet} className="button connect-button">
            Connect Wallet
          </button>
        )}
      </div>

      {/* Right panel - Interaction */}
      <div className="interaction-panel">
        <div className="network-status">
          <div className="status-dot"></div>
          <span>Ethereum Network</span>
        </div>

        <h2 className="panel-title">Update Greeting</h2>

        <div className="input-container">
          <div className="input-group">
            <label className="input-label">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="input"
            />
          </div>
        </div>

        <button onClick={updateMessage} className="button">
          Update Blockchain Message
        </button>
      </div>
    </div>
  )
}

export default App

