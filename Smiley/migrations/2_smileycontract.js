const SmileyUser = artifacts.require("./SmileyUser.sol");
const SmileyDonation = artifacts.require("./SmileyDonation.sol");

module.exports = function(deployer) {
    deployer.deploy(SmileyUser);
    //deployer.deploy(SmileyDonation);
    let smileydonation;

    deployer.then(function() {
        // Create a new version of A
        return SmileyDonation.new();
    }).then(function(instance) {
        smileydonation = instance;
        // Get the deployed instance of B
        smileydonation.createONG("Handicap International" ,
            0x64300d0b916523fD8E16F0795eD2a8603942d052 ,
            "www.handicap-international.fr");
        return smileydonation;
    })
};
