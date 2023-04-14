const { uploadContracts } = require("./upload-contracts.js");

async function main() {
  const accounts = await hre.ethers.getSigners();
  const deployer = accounts[0];

  const oneInchContracts = [
    // {
    //   name: "IChi",
    //   label: "i_chi",
    // },
    // {
    //   name: "IERC20Permit",
    //   label: "i_erc20_permit",
    // },
    // {
    //   name: "IGasDiscountExtension",
    //   label: "i_gas_discount_extension",
    // },
    // {
    //   name: "IOneInchCaller",
    //   label: "i_one_inch_caller",
    // },
    // {
    //   name: "ISafeERC20Extension",
    //   label: "i_safe_erc20_extension",
    // },
    {
      name: "OneInchExchange",
      label: "one_inch_exchange",
    },
  ];

  await uploadContracts(deployer, oneInchContracts);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
