pragma solidity ^0.4.24;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../../contracts/SmileyUser.sol";

contract TestSmileyUser
{
    function test_CheckOwner() public
    {
        SmileyUser smileyuser = new SmileyUser();
        Assert.equal(smileyuser.owner_(), this, "Owner should be the deployer");
    }

    function test_CreateUser() public
    {
        SmileyUser smileyuser = new SmileyUser();
        string memory expected_name = "Mehdi";
        uint8 expected_age = 26;
        smileyuser.createUser(expected_name, expected_age);

        string memory returned_name;
        uint8 returned_age;
        (returned_name, returned_age) = smileyuser.getUserByAddress();
        Assert.equal(expected_name, returned_name, "Should have expected name");
    }



}
