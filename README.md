# ETHGlobal Tokyo Hackathon Smart Contracts

Hey Hackers! This project is meant to serve as a guide for you to import event sponsor's smart contracts onto your MultiBaas deployment. This will allow you to build a DApp that interacts with these contracts, as well as your own, using an HTTP REST API. In our experience, this saves a lot of time.

# Project Setup

This project requires node v16 `lts/gallium`. If you are already using  `nvm`, it should automatically switch to the right version.

After cloning the project, run `yarn install` to install the dependencies.

# MultiBaas Setup

To use this project, you will need to create a MultiBaas deployment on the [Curvegrid Console](https://console.curvegrid.com/). Sign up for an account and upgrade for free to the ETHGlobal plan to unlock all the features of MultiBaas. Create a new MultiBaas deployment on the blockchain network of your choice, and follow the instructions in your email to login.

Once you have logged in to your MultiBaas deployment, use the top navigation bar > Admin > API Keys page to create a new API Key in the Administrators group.


# Project Configuration

Enter your MultiBaas API Key, along with your MultiBaas deployment URL, in the `deployment-config.development.js` file.

# Uploading the included contracts

This project comes with the ability to upload 1inch and Gnosis smart contracts your MultiBaas deployment. You may do this by running `yarn deploy:1inch` or `yarn deploy:gnosis`. Upon successful completion, you will find the smart contracts uploaded to your MultiBaas deployment's page.

# Uploading other contracts

This boilerplate can be modified to upload abitrary smart contracts to your MultiBaas deployment. The steps are as follows.

1. Copy all the required smart contract files to this project's `/contracts` folder.
2. Insure that you can compile these new smart contracts compile successfully via `npx hardhat compile`. You may need to add a new Solidity compiler version to the `hardhat.config.js`. You also may need to add additional dependencies to the project to satisfy the newly added smart contract's import requirements. Use `yarn add`, or modify the `package.json` and `yarn install` as required. Please note that these new dependencies may conflict with those required by the existing smart contracts. In this case, you may remove conflicting smart contracts from the `/contracts` folder.
3. Create a copy of the `deploy-1inch.js` file to use as a template. Modify the `contracts` variable to include the names of your target smart contracts.
4. In `package.json`, create a new script that follows the pattern of `deploy:1inch`.
5. Run your new yarn script.
