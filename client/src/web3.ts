import Web3 from "web3";

// Initialize Web3 with MetaMask's provider
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const web3 = new Web3((window as any).ethereum);

// Contract address and ABI
const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;
const abi = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_message",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "message",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_message",
        "type": "string"
      }
    ],
    "name": "setMessage",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getMessage",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function",
    "constant": true
  }
] as const;

const helloWorldContract = new web3.eth.Contract(abi, contractAddress);

// Export Web3 and contract
export { web3, helloWorldContract };