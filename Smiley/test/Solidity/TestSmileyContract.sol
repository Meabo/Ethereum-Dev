pragma solidity ^0.4.24;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../../contracts/SmileyContract.sol";

contract TestSmileyContract
{
    function testOwner() public
    {
        SmileyContract smiley = new SmileyContract();
        Assert.equal(smiley.owner(), this, "Owner should be equal than deployer");
    }
}
