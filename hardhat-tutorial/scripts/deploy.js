const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("../constants");

async function main() {
  // Address of the whitelist contract that i deployed in the previous module
  const whitelistContract = WHITELIST_CONTRACT_ADDRESS;
  // URL from where we can extract the metadata for a colorfulAI NFT
  const metadataURL = METADATA_URL;
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so colorfulAIContract here is a factory for instances of our colorfulAI contract.
  */
  const colorfulAIContract = await ethers.getContractFactory("colorfulAI");

  // deploy the contract
  const deployedcolorfulAIContract = await colorfulAIContract.deploy(
    metadataURL,
    whitelistContract
  );

  // Wait for it to finish deploying
  await deployedcolorfulAIContract.deployed();

  // print the address of the deployed contract
  console.log(
    "colorfulAIs Contract Address:",
    deployedcolorfulAIContract.address
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });