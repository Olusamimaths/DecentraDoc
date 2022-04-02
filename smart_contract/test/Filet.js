const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Filet contract", function () {
  let Filet;
  let filet;
  let owner, addr1, addr2, addrs;
  let currentTokenId;

  beforeEach(async function () {
    Filet = await ethers.getContractFactory("Filet");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    filet = await Filet.deploy();
  });

  describe("Deployment", function () {
    it("Should assign the total supply and owner balance of 0", async function () {
      expect(await filet.totalSupply()).to.equal(1000000);
      const ownerBalance = await filet.balanceOf(owner.address);
      expect(ownerBalance).to.equal(0);
    });
  });

  describe("Minting", function () {
    it("Should Mint and transfer to an account", async function () {
      const tokenUri = "ipfs://bafyreicb3ewk33keh77mwxhmhdafxsjlkflichr2mjnyim6tbq3qjkwcue/metadata.json";
      await filet.mintTo(addr1.address, tokenUri);
      const ownerAddr = await filet.ownerOf(1);
      console.log(ownerAddr);
      expect(ownerAddr).to.equal(addr1.address);
    });
  });


  describe("Transfer", function () {
    it("Should transfer between accounts", async function () {
      const tokenUri = "ipfs://bafyreicb3ewk33keh77mwxhmhdafxsjlkflichr2mjnyim6tbq3qjkwcue/metadata.json";
      await filet.mintTo(owner.address, tokenUri);
      let ownerAddr = await filet.ownerOf(1);
      expect(ownerAddr).to.equal(owner.address);
      expect(await filet.ownerOf(1)).to.equal(owner.address);
      await filet.transfer(owner.address, addr2.address, 1);
      expect(await filet.ownerOf(1)).to.equal(addr2.address);
    });
  });
});

