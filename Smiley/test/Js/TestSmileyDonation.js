const SmileyDonation = artifacts.require("SmileyDonation");
let expectThrow = require('../../utils/helper.js');

contract("SmileyDonation", async(accounts) =>
{
    let smileydonation;
    const sender_address  = accounts[0];
    const ong_address = accounts[1];

    beforeEach(async () =>
    {
        smileydonation = await SmileyDonation.new();
        await smileydonation.createUser("Mehdi", 26);
    });

    it("should increase donation by one", async () =>
    {

        await smileydonation.donate(ong_address);
        let number_view = await smileydonation.getViews(sender_address)
        assert.equal(number_view, 1, "Should equal one");
    });

    it("should throw an error if we donate 2 times before cooldown", async () =>
    {
        await smileydonation.donate(ong_address);
        let this_one_should_throw_exception = smileydonation.donate(ong_address);
        await expectThrow(this_one_should_throw_exception);
    });

    it("Should have a balance of 1 unit after a donation", async() =>
    {
        await smileydonation.donate(ong_address);
        let balance_of_ong = await smileydonation.getBalanceOfONG(ong_address);
        assert.equal(balance_of_ong, 1);
    });

    it("Should have a balance of 1 unit after a donation", async() =>
    {
        await smileydonation.donate(ong_address);
        let balance_of_ong = await smileydonation.getBalanceOfONG(ong_address);
        assert.equal(balance_of_ong, 1);
    });




});