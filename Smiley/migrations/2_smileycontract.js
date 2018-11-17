const SmileyContract = artifacts.require("./SmileyContract.sol");
const SmileyDonation = artifacts.require("./SmileyDonation.sol");

module.exports = function(deployer) {
    deployer.deploy(SmileyContract);
    deployer.deploy(SmileyDonation);
};
