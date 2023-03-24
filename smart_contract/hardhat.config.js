require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/0ARQFEy9fcVGAscRFSznUYzpGJJE46pZ',
      accounts: [ 'c84ce7f642b2af6bb96adbbba0101cee4f802532ae634c3b2f22cb057ccb0523' ],
    },
  },
};
