import Web3 from "web3"

// Replace with your contract address and ABI
const contractAddress = "YOUR_CONTRACT_ADDRESS"
const contractABI = [] // Replace with the actual ABI

// Function to detect Ethereum provider (MetaMask)
const detectEthereumProvider = () => {
  if (typeof window !== "undefined" && (window as any).ethereum) {
    return (window as any).ethereum
  } else {
    console.log("Please install MetaMask!")
    return null
  }
}

// Initialize Web3 and contract
let web3: Web3 | null = null
let helloWorldContract: any = null

const initializeWeb3 = async () => {
  const provider = detectEthereumProvider()
  if (provider) {
    web3 = new Web3(provider)
    try {
      // Request account access if needed
      await provider.request({ method: "eth_requestAccounts" })
      helloWorldContract = new web3.eth.Contract(contractABI, contractAddress)
    } catch (error) {
      console.error("User denied account access")
    }
  }
}

initializeWeb3()

export { helloWorldContract }

