pragma solidity ^0.4.25;

contract BLT
{
    mapping(address => uint256) public balanceOf;

    constructor(uint256 initsupply) public
    {
        balanceOf[msg.sender] = initsupply;
    }

    function transfer(address to_, uint256 _value) public
    {
        balanceOf[msg.sender] -= _value;
        balanceOf[to_] += _value;
    }
}
