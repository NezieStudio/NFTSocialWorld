const CryptoSocialWorld = artifacts.require("CryptoSocialWorld");

// deploys contract to the blockchain
module.exports = function(deployer) {
  deployer.deploy(CryptoSocialWorld);
};
