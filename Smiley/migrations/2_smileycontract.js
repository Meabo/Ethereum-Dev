const SmileyContract = artifacts.require("./SmileyContract.sol");

module.exports = function(deployer) {
    deployer.deploy(SmileyContract);
};
