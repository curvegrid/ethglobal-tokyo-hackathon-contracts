require('@nomiclabs/hardhat-waffle');
require('@openzeppelin/hardhat-upgrades');
const path = require('path');

const { types } = require('hardhat/config');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const solidityConfig = {
  compilers: [
    {
      version: '0.6.12',
    },
    {
      version: '0.8.17',
    },
    {
      version: '0.8.19',
      // settings: {
      //   optimizer: {
      //     enabled: true,
      //     runs: 1000,
      //   },
      // },
    },
  ],
};

if (process.env.HARDHAT_NETWORK) {
  // only process the full config if HARDHAT_NETWORK is defined (i.e., if we want to deploy)
  require('hardhat-multibaas-plugin');

  // Retrieve and process the config file
  const CONFIG_FILE = path.join(__dirname, `./deployment-config.${process.env.HARDHAT_NETWORK || 'development'}`);
  const { config } = require(CONFIG_FILE);

  // You need to export an object to set up your config
  // Go to https://hardhat.org/config/ to learn more

  /**
   * @type import('hardhat/config').HardhatUserConfig
   */
  module.exports = {
    networks: {
      development: {
        url: `${config.deploymentEndpoint}/web3/${config.apiKey}`,
        chainId: config.ethChainID,
        accounts: [config.deployerPrivateKey],
      },
    },
    mbConfig: {
      apiKey: config.apiKey,
      host: config.deploymentEndpoint,
      allowUpdateAddress: ['development', 'testing', 'staging'],
      allowUpdateContract: ['development', 'testing', 'staging'],
    },
    solidity: solidityConfig,
  };
} else {
  // HRE (Hardhat Runtime Environment, i.e., we're likely testing and not deploying)
  require('solidity-coverage');
  module.exports = {
    networks: {
      hardhat: {
        ...(process.env.COVERAGE && {
          allowUnlimitedContractSize: true,
        }),
      },
    },
    solidity: solidityConfig,
  };
}
