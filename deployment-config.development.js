const config = {
  // Full URL such as https://abc123.multibaas.com
  // Please note, do not include the "/" at the end
  deploymentEndpoint: 'http://localhost:8080',

  // API key to access MultiBaas from deployer
  // Note that the API key MUST be part of the "Administrators" group
  apiKey:
    '<API KEY HERE>',

  // ------------------------------------------------------------------------

  // dummy value, fine to leave as is
  deployerPrivateKey: '0x0000000000000000000000000000000000000000000000000000000000000001',
};

module.exports = {
  config: config,
};
