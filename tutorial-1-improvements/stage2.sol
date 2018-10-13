pragma solidity ^0.4.25;

contract BLT
{
    mapping(address => uint256) public balanceOf;

    /* Improvements Stage 1*/
    string public version = "BLT v1.0";
    string public name_;
    string public symbol_;
    uint8 public decimal_;
    uint256 public totalSupply_;

    // Events
    event Transfer(address indexed from, address indexed to, uint256 value);


    constructor(uint256 initsupply, string name, string symbol, uint8 decimal) public
    {
        balanceOf[msg.sender] = initsupply;
        name_ = name;
        symbol_ = symbol;
        decimal_ = decimal;
        totalSupply_ = initsupply;
    }

    function transfer(address to, uint256 value) public
    {
        // We check if we have a sufficient amount to send
        require(balanceOf[msg.sender] > value);

        // Overflow check (example 255 + 10 : is an overflow)
        require(balanceOf[to] + value > balanceOf[to]);

        emit Transfer(msg.sender, to, value);

        balanceOf[msg.sender] -= value;
        balanceOf[to] += value;
    }
}
