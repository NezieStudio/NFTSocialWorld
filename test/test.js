const CryptoSocialWorld = artifacts.require("./CryptoSocialWorld.sol");

require("chai")
  .use(require("chai-as-promised"))
  .should();

contract("CryptoSocialWorld", ([deployer, author, tipper]) => {
  let cryptosocialworld;

  before(async () => {
    cryptosocialworld = await CryptoSocialWorld.deployed();
  });

  // deployment test
  describe("deployment", async () => {
    // checks for address
    it("deploys successfully", async () => {
      const address = await cryptosocialworld.address;
      assert.notEqual(address, 0x0);
      assert.notEqual(address, "");
      assert.notEqual(address, null);
      assert.notEqual(address, undefined);
    });

    // checks for name
    it("has a name", async () => {
      const name = await cryptosocialworld.name();
      assert.equal(name, "CryptoSocialWorld");
    });
  });

  // creating post test
  describe("images", async () => {
    let result;
    const hash = "abc123";

    before(async () => {
      result = await cryptosocialworld.uploadImage(hash, "Image description", {
        from: author,
      });
      imageCount = await cryptosocialworld.imageCount();
    });

    it("creates images", async () => {
      result = await cryptosocialworld.uploadImage();
      let image = await cryptosocialworld.images(1);
      console.log(image);
    });
  });
});
