require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/5nvtDxRpVi1QpF46nG70v2LKYyOBWiij",
      accounts: [
        "051de191ccd6b4f2e5009ad87c0e8416d0c96fd9f53f8c62d259984ffbad4670",
      ],
    },
  },
};
