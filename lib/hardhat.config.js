"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("dotenv/config");
require("hardhat-typechain");
const config = {
    solidity: {
        version: "0.8.5",
    },
    networks: {
        popcateum: {
            url: "https://dataseed.popcateum.org",
            accounts: [process.env.ADMIN || ''],
            chainId: 42,
        },
    },
};
exports.default = config;
//# sourceMappingURL=hardhat.config.js.map