pragma solidity ^0.4.24;

import './SmileyContract.sol';

contract SmileyDonation is SmileyContract
{
    mapping (address => uint) public donations;
    mapping (address => uint) public balance_ong;

    uint cooldowntime = 1 days;



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
        donations[msg.sender]++;
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
        return donations[_from];
    }

    function getBalanceOfONG(address _from) public view returns(uint)
    {
        return balance_ong[_from];
    }
}
