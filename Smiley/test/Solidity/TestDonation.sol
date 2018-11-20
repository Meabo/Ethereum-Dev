pragma solidity ^0.4.24;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../../contracts/SmileyDonation.sol";


contract TestDonation
{
    function test_Donate() public
    {
        SmileyDonation smileydonation = new SmileyDonation();
        string memory expected_name = "Mehdi";
        uint8 expected_age = 26;
        smileydonation.createUser(expected_name, expected_age);

        smileydonation.donate(msg.sender);
        Assert.equal(smileydonation.getViews(this), 1, "Expected to be equals");
    }

    function test_CreateONG() public
    {
        SmileyDonation smileydonation = new SmileyDonation();
        string memory expected_name = "Handicap International";
        address expected_fund = 0x64300d0b916523fD8E16F0795eD2a8603942d052;
        string memory expected_url = "www.handicap-international.fr";

        smileydonation.createONG(expected_name, expected_fund, expected_url);
        string memory name;
        address fund;
        string memory url;
        (name,fund,url) = smileydonation.getONGbyID(0);

        Assert.equal(expected_name, name, "Should have the same name");

    }


}