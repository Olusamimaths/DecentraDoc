const hre = require("hardhat");

async function main() {
  const DecentraDoc = await hre.ethers.getContractFactory("DecentraDoc");
  const decentraDoc = await DecentraDoc.deploy();

  await decentraDoc.deployed();

  console.log("DecentraDoc deployed to:", decentraDoc.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
