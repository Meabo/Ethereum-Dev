  const MetaCoin = artifacts.require("./MetaCoin.sol");

  contract('MetaCoin', async(accounts) =>
  {
    it("should put 10000 MetaCoin in the first account", async() =>
    {
      let instance = await MetaCoin.deployed();
      let balance = await instance.getBalance.call(accounts[0]);
      assert.equal(balance.valueOf(), 10000, "10000 wasn't in the first account");
    });

    it("should call a function that depends on a linked library", async() =>
    {

      let meta = await MetaCoin.deployed();
      let outCoinBalance = await meta.getBalance.call(accounts[0]);
      let metaCoinBalance = outCoinBalance.toNumber();
      let outCoinBalanceEth = await meta.getBalanceInEth.call(accounts[0]);
      let metaCoinEthBalance = outCoinBalanceEth.toNumber();
      assert.equal(metaCoinEthBalance, 2 * metaCoinBalance);
    });

    it("should send coin correctly", async() =>
    {

      // Get initial balances of first and second account.
      let account_one = accounts[0];
      let account_two = accounts[1];
      let amount = 10;

      let meta = await MetaCoin.deployed();
      let balance = await meta.getBalance.call(account_one);
      let account_one_starting_balance = balance.toNumber();

      balance = await meta.getBalance.call(account_two);
      let account_two_starting_balance = balance.toNumber();

      // transfer
      let transfer_result = await meta.transfer(account_two, amount, {from: account_one});

      balance = await meta.getBalance.call(account_one);
      let account_one_ending_balance = balance.toNumber();

      balance = await meta.getBalance.call(account_two);
      let account_two_ending_balance = balance.toNumber();

      assert.equal(account_one_ending_balance, account_one_starting_balance - amount, "Amount wasn't correctly taken from the sender");
      assert.equal(account_two_ending_balance, account_two_starting_balance + amount, "Amount wasn't correctly sent to the receiver");
    });
    it("should approve correctly an address", async() =>
    {
      let account_one = accounts[0];
      let account_two = accounts[1];
      let amount = 100;
      let meta = await MetaCoin.deployed();
      let result = await meta.approve(account_two, amount);
      assert(result, amount, "Approve is not set");

    });
      });
