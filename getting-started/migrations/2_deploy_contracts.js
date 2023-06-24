// Import the contract
const MyContract = artifacts.require("HelloWorld");

module.exports = function(deployer) {
  // Deploy the contract
  deployer.deploy(MyContract);
};