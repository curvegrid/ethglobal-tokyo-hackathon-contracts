async function uploadContracts(deployer, contracts) {
  for (let i = 0; i < contracts.length; i++) {
    const { name, label } = contracts[i];
    try {
      await hre.mbDeployer.deploy(deployer, name, [
        'these', 'params', 'are', 'deliberately', 'invalid'
      ], {
        addressLabel: label,
        contractLabel: label,
      });
    } catch(e) {
      if (e.code !== 'UNEXPECTED_ARGUMENT')  {
        throw e;
      } else {
        console.log(`Successfully uploaded ${name}`)
      }
    }
  }
}

module.exports = {
  uploadContracts,
}