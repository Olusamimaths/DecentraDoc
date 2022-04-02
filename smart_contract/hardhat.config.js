require("@nomiclabs/hardhat-waffle");

// 0x8d0DcE48fdFff1C47c5022970ff2C037255a2A02

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/FhtwfKSlc2Vy6SLNF_KNIOS7uZcws_JK",
      accounts: [
        "cf969cf2b1ff6884baf422f32cad976f7f0ddfbe83b4adf3262bfea305982a74",
      ],
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.5.16",
      },
      {
        version: "0.6.2",
      },
      {
        version: "0.6.4",
      },
      {
        version: "0.7.0",
      },
      {
        version: "0.8.0",
      },
      {
        version: "0.8.1",
      },
    ],
  },
};
