const SmileyUser = artifacts.require("SmileyUser");

contract("SmileyContract", async(accounts) =>
{
    const expected_owner = accounts[0];

    it("should set an owner", async () =>
    {
        const smiley = await SmileyUser.new();
        assert.equal(await smiley.owner_.call(), expected_owner);
    })



});