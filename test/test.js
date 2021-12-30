const CryptoSocialWorld = artifacts.require("./CryptoSocialWorld.sol");

require("chai")
  .use(require("chai-as-promised"))
  .should();

contract("CryptoSocialWorld", ([deployer, author, tipper]) => {
  let cryptosocialworld;

  before(async () => {
    cryptosocialworld = await CryptoSocialWorld.deployed();
  });

  describe("deployment", async () => {
    it("deploys successfully", async () => {
      const address = await cryptosocialworld.address;
      assert.notEqual(address, 0x0);
      assert.notEqual(address, "");
      assert.notEqual(address, null);
      assert.notEqual(address, undefined);
    });

    it("has a name", async () => {
      const name = await cryptosocialworld.name();
      assert.equal(name, "CryptoSocialWorld");
    });
  });
});
