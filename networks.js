var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};
//doge

exports.livenet = {
  name: 'livenet',
  magic: null, //needed to switch to rpcsync, wont sync auxpow blocks from .dat
  //magic: hex('c0c0c0c0'), //original dogecoin magic
  addressVersion: 0x1e ,  // 22 23  for Axxxxxxx addr
  privKeyVersion: 0x9e,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488c42e,
  hkeyPrivateVersion: 0x0488e1f4,
  genesisBlock: {
    hash: hex('9156352c1818b32e90c9e792efd6a11a82fe7956a630f03bbee236cedae3911a'),
    merkle_root: hex('696ad20e2dd4365c7459b4a4a5af743d5e92c6da3229e6532cd605f6533f2a5b'),
    height: 0,
    nonce: 99943,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1386325540,
    bits: '1e0ffff0', //  504365040
  },
  dnsSeeds: [
    'seed.dogecoin.com',
    'seed.mophides.com',
    'seed.dglibrary.org',
    'seed.dogechain.info'
  ],
  defaultClientPort: 22556
};

exports.mainnet = exports.livenet;

exports.testnet = { //not setup for doge yet
  name: 'testnet',
  magic: hex('fcc1b7dc'),
  addressVersion: 0x71,
  privKeyVersion: 241,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('9E555073D0C4F36456DB8951F449704D544D2826D9AA60636B40374626780ABB'),
    merkle_root: hex('696AD20E2DD4365C7459B4A4A5AF743D5E92C6DA3229E6532CD605F6533F2A5B'),
    height: 0,
    nonce: 997879,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1391503289,
    bits: 504365040,
  },
  dnsSeeds: [
    'testdoge-seed.lionservers.de',
    'testdoge-seed-static.lionservers.de'
  ],
  defaultClientPort: 44556
};
