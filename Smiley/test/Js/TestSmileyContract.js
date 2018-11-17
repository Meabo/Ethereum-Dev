const SmileyContract = artifacts.require("SmileyContract");

contract("SmileyContract", async(accounts) =>
{
    const expected_owner = accounts[0];

    it("should set an owner", async () =>
    {
        const smiley = await SmileyContract.new();
        assert.equal(await smiley.owner.call(), expected_owner);
    })



});