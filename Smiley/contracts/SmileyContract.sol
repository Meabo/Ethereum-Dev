pragma solidity ^0.4.24;

contract SmileyContract
{
    address public owner;

    constructor() public
    {
        owner = msg.sender;
    }
}