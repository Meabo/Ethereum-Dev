pragma solidity ^0.4.24;

import './SmileyUser.sol';
import "./Ownable.sol";

contract SmileyDonation is SmileyUser, Ownable
{
    event NewOng(string name, address fund, string url);


    // Stores User donations, 1 each time a user sees a video
    mapping (address => uint) public user_donations;
    // Stores Balance Ong, 1 each time a balance got a view
    mapping (address => uint) public balance_ong;
    // Stores each ONG with it's ID
    mapping (address => uint) public OngIDs;

    uint cooldowntime = 1 days;

    struct Ong
    {
        string name;
        address fund_address;
        string url;
    }

    Ong[] public ongs;

    function createONG(string memory _name, address _fund, string memory _url) public returns(uint id_created)
    {
        uint id = ongs.push(Ong(_name, _fund, _url)) - 1;
        OngIDs[msg.sender] = id;
        emit NewOng(_name, _fund, _url);
        return id;
    }

    function getONGbyID(uint id) external view returns(string name, address fund, string url)
    {
        return(ongs[id].name, ongs[id].fund_address, ongs[id].url);
    }

    function getONGCount() public constant returns(uint count) {
        return ongs.length;
    }

    function donate(address ong_address) public
    {
        seeVideo();
        balance_ong[ong_address]++;
    }

    function seeVideo() internal
    {
        uint id = UserID[msg.sender];
        User storage currentUser = users[id];
        require(_isUserReadyToDonate(currentUser));
        user_donations[msg.sender]++;
        currentUser.points += 1;
        _triggerWaitingTime(currentUser);

    }

    function _isUserReadyToDonate(User storage _currentUser) internal view returns(bool)
    {
        return (_currentUser.readyTime <= now);
    }

    function _triggerWaitingTime(User storage _currentUser) internal
    {
        _currentUser.readyTime += uint32(now + cooldowntime);
    }

    function getViews(address _from) public view returns(uint)
    {
        return user_donations[_from];
    }

    function getBalanceOfONG(address _from) public view returns(uint)
    {
        return balance_ong[_from];
    }
}
