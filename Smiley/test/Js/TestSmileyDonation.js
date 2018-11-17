const SmileyDonation = artifacts.require("SmileyDonation");

contract("SmileyDonation", async(accounts) =>
{
    let smileydonation;
    const sender  = accounts[0];

    before(async () =>
    {
        smileydonation = await SmileyDonation.deployed();
        await smileydonation.createUser("Mehdi", 26);
    });

    it("should increase donation by one", async () =>
    {

        await smileydonation.donate();
        let number_view = await smileydonation.getViews(sender)
        assert.equal(number_view, 1, "Should equal one");
    })

});