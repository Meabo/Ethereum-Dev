pragma solidity ^0.4.24;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../../contracts/SmileyDonation.sol";


contract TestDonation
{
    function test_SeeVideo() public
    {
        SmileyDonation smileydonation = new SmileyDonation();
        string memory expected_name = "Mehdi";
        uint8 expected_age = 26;
        smileydonation.createUser(expected_name, expected_age);

        smileydonation.donate();
        Assert.equal(smileydonation.getViews(this), 1, "Expected to be equals");
    }
}