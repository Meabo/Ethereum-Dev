pragma solidity ^0.4.18;

import "./ConvertLib.sol";

// This is just a simple example of a coin-like contract.
// It is not standards compatible and cannot be expected to talk to other
// coin/token contracts. If you want to create a standards-compliant
// token, see: https://github.com/ConsenSys/Tokens. Cheers!

contract MetaCoin {

	 mapping(address => uint256) public balanceOf;
	 mapping(address => mapping(address => uint256)) public allowance;


	 /* Improvements Stage 1*/
	 string public version = "BLT v1.0";
	 string public name_;
	 string public symbol_;
	 uint8 public decimal_;
	 uint256 public totalSupply_ = 10000;



	 // Events
	 event Transfer(address indexed from, address indexed to, uint256 value);


	 constructor() public
	 {
			 balanceOf[tx.origin] = 10000;
	 }

	 function transfer(address _to, uint256 value) public returns (bool sufficient)
	 {
			 // We check if we have a sufficient amount to send
			 require(balanceOf[tx.origin] > value);

			 // Overflow check (example 255 + 10 : is an overflow)
			 require(balanceOf[_to] + value > balanceOf[_to]);
			 balanceOf[tx.origin] -= value;
			 balanceOf[_to] += value;
			 emit Transfer(tx.origin, _to, value);
			 return true;
	 }

	 function approve(address spender, uint256 value) public returns (uint256 value_)
	 {
		 allowance[tx.origin][spender] = value;
		 return  allowance[tx.origin][spender];
	 }

	 function transferFrom(address _from, address _to, uint256 value) public returns (bool success)
	 {
			 // Check if the balance has sufficient amount
			 require(balanceOf[_from] > value);
			 // Check of Overflow
			 require(balanceOf[_to] + value > balanceOf[_to]);
			 //Check if the value is less than the allowance
			 require(value < allowance[_from][msg.sender]);

			 balanceOf[_from] -= value;
			 balanceOf[_to] += value;
			 //Decreases allowance by the value
			 allowance[_from][msg.sender] -= value;

			 emit Transfer(_from, _to, value);
			 return true;
	 }

	 function getBalance(address _from) public returns (uint256 result)
	 {
			 return balanceOf[_from];
	 }
	 function getBalanceInEth(address addr) public returns(uint)
	 {
	 		return ConvertLib.convert(getBalance(addr),2);
	 	}

		function getAllowance(address from_, address to_) public returns (uint256 result)
		{
		  return allowance[from_][to_];
		}

}
