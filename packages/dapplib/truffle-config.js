require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'grid nation flock system egg develop remain unfold heavy cloth forward tree'; 
let testAccounts = [
"0xac214b7a22ddd22c089c031a922c1d314f123df941f62040857bdd8c89413c45",
"0x2fe15b9cfd07e37269a7fe7ce4a78646e20428dd78782deab497cd306b6ef011",
"0x9828d7ea3b97d99808eb046020b34a2f6a81196038606ddbe26452c5f3aaad6f",
"0x9775c568f7b798c193e15f964b90861b6ce28ceb638aee257a93a1790bcceb3a",
"0x4201a6c8aa67a6030b9cbbb1709e8415415159328215e551efa24d442238410a",
"0x5b70b82745c7593fdbae3c066bf67a20771551193120d493fde2781e095116e4",
"0x8a8de5036fefae9bcb4186f3f33bd94e851f1de318d242647cab07828f879458",
"0xa06e82f156330853ac1426e897b6d1ff279828763507dbbc2813c3f5e1ef7cb9",
"0xa511e6e29998a06bc92aaf7354750015bc51625c50bf2e4e51cf2754d81cc9e4",
"0x545108d91f2db7126ab7efd0d7f97e20ca1a9a42ad13aa37fc54d70de71b0a3c"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


