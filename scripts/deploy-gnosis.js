const { uploadContracts } = require("./upload-contracts.js");

async function main() {
  const accounts = await hre.ethers.getSigners();
  const deployer = accounts[0];

  const contracts = [
    {
      name: "GiriGiriBashi",
      label: "giri_giri_bashi",
    },
    {
      name: "Hashi",
      label: "hashi",
    },
    {
      name: "Yaho",
      label: "yaho",
    },
    {
      name: "Yaru",
      label: "yaru",
    }
  ];

  await uploadContracts(deployer, contracts);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
