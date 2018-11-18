pragma solidity ^0.4.24;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../../contracts/SmileyContract.sol";

contract TestSmileyContract
{
    function test_CheckOwner() public
    {
        SmileyContract smiley = new SmileyContract();
        Assert.equal(smiley.owner(), this, "Owner should be the deployer");
    }

    function test_CreateUser() public
    {
        SmileyContract smiley = new SmileyContract();
        string memory expected_name = "Mehdi";
        uint8 expected_age = 26;
        smiley.createUser(expected_name, expected_age);

        string memory returned_name;
        uint8 returned_age;
        (returned_name, returned_age) = smiley.getUserByAddress();
        Assert.equal(expected_name, returned_name, "Should have expected name");
    }



}
