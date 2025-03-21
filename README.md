# Dapp-app

This repository contains a simple "Hello World" decentralized application (DApp) built for demonstration purposes. It showcases the basic interaction between a frontend web application and a smart contract deployed on a blockchain network using Truffle and Vite.

## Features

* **Simple Greeting:** Displays a greeting message fetched from a smart contract.
* **User Interaction:** Allows users to update the greeting message through the frontend.
* **Blockchain Integration:** Demonstrates how to connect to a blockchain network using Web3.js.
* **Smart Contract Interaction:** Shows how to call functions and send transactions to a deployed smart contract.
* **Truffle Deployment:** Uses Truffle for smart contract compilation and deployment.
* **Vite Frontend:** Utilizes Vite for a fast and efficient frontend development experience.

## Prerequisites

Before running the DApp, ensure you have the following installed:

* **Node.js and npm (or yarn):** For managing JavaScript dependencies.
* **Truffle:** For smart contract development and deployment.
* **Ganache (or another local blockchain):** For local blockchain development.
* **Metamask (or another Web3 wallet):** For interacting with the blockchain network.

## Setup

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/sm-junior0/Dapp-app.git](https://github.com/sm-junior0/Dapp-app.git)
    cd Dapp-app
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    cd client
    npm install
    cd ..
    ```

3.  **Compile and Migrate the Smart Contract:**

    ```bash
    truffle compile
    truffle migrate
    ```

    * This will deploy the smart contract to your local Ganache network (or configured network).
    * Note the contract address and transaction hash displayed in the console.

4.  **Create a `.env` file:**

    * Create a `.env` file in the root directory of the project.
    * Add the following variables, replacing the values with your deployed contract's data:

    ```
    VITE_PRIVATE_KEY=0x4.. u're transaction hash
    VITE_CONTRACT_ADDRESS=0xf.. u're contract address
    ```

    * **Important:** Replace the `VITE_PRIVATE_KEY` with your own private key. **Never** commit your private key to a public repository. The provided private key is only for demonstration purposes on a local test network.
    * Replace `VITE_CONTRACT_ADDRESS` with the contract address from your Truffle migration.

5.  **Start the Development Server:**

    ```bash
    cd client
    npm run dev
    ```

    This will launch the DApp in your browser using Vite's development server.

## Usage

1.  **Connect your Web3 wallet:** Ensure your Metamask (or other wallet) is connected to the correct network (e.g., your local Ganache network).
2.  **Import your private key:** Import the private key used in the `.env` file into Metamask. This will give you access to the account that deployed the contract.
3.  **View the greeting:** The initial greeting message fetched from the smart contract will be displayed.
4.  **Update the greeting:** Enter a new greeting message in the input field and click the "Update Greeting" button.
5.  **Confirm the transaction:** Your Web3 wallet will prompt you to confirm the transaction.
6.  **View the updated greeting:** Once the transaction is confirmed, the updated greeting message will be displayed.

## Smart Contract

The smart contract (`contracts/HelloWorld.sol`) is a simple Solidity contract that stores and updates a greeting message.

## Technologies Used

* **Solidity:** For the smart contract.
* **React:** For the frontend web application.
* **Web3.js:** For interacting with the blockchain.
* **Truffle:** For smart contract development, compilation, and deployment.
* **Vite:** For fast frontend development.
* **.env:** for enviromental variables.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

## Contact

For any questions or inquiries, please feel free to reach out:

* **GitHub:** [https://github.com/sm-junior0](https://github.com/sm-junior0)
* **Email:** [juniormanene@gmail.com](juniormanene@gmail.com)

This project is licensed under the [MIT License](LICENSE).