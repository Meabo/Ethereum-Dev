pragma solidity ^0.4.24;

contract SmileyUser
{
    event NewUser(string name, uint8 age);

    address public owner_;
    struct User
    {
        string name;
        uint8 age;
        uint32 points;
        uint32 level;
        uint32 readyTime;
    }

    User[] public users;
    mapping(address => uint) public UserID;
    mapping(address => uint) UserCount;
    //mapping(address => uint) Donations;

    constructor() public
    {
        owner_ = msg.sender;
    }

    function createUser(string memory _name, uint8 _age) public
    {
        require(UserCount[msg.sender] == 0);
        uint id = users.push(User(_name, _age, 0, 0, uint32(now))) - 1;
        UserID[msg.sender] = id;
        UserCount[msg.sender]++;
        emit NewUser(_name, _age);
    }

    function getUserByAddress() external view returns(string memory, uint8)
    {
        uint id = UserID[msg.sender];
        string memory user_name = users[id].name;
        uint8 user_age = users[id].age;
        return (user_name, user_age);
    }


}