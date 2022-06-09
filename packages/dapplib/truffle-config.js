require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz kiwi october slab chapter deny radar push inflict dry flat tattoo'; 
let testAccounts = [
"0x3a37c76359e04656fda9b33ee25ee2b4721d358caaf94f709d1cea91fedbc591",
"0xbc07deb576fce36f6a734b432b95b553be40665549b39a851a85e4167d901d86",
"0x74ecb3e5ecff8e0d00edb445589110a64acbdf4234846a6f421dcaf6fcdd1f55",
"0x228722ecf920aa25142c0fb36dc621d807a961246e3c8a10c2be3d7d8cf75ba7",
"0x0715222779bea5007a6f8b2a986b6ff7347c7405db2ac80a2ac746f8f1d699ef",
"0xedfb6a18e61362f908be12963a197e7c120a9717103ee452a8881ff1ec1e036c",
"0xfcc048ac1577f84228be706590cd667921017459cc8ddbacea4692342e130065",
"0xa57934db15ea4adfe535d7cf063faede63ebcf888d41e1d507b39e373897d9b7",
"0x903cded91d5713250a4119dd30492b4ee86b92d00da44bbafd6542bc647b6328",
"0xabdd99084bddaa31b4cc8cdd6f77e9af0c552b1ec5aed4731fd07a362273249d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


