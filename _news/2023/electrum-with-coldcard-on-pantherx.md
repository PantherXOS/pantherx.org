---
title: 'Electrum with Coldcard'
summary: Coldcard now works out of the box on PantherX
layout: news
source:
date: 2023-11-28 0:00:00 +0000
cover:
  height: medium
  image: bg-electrum-with-coldcard-on-pantherx.jpg
lang: en
author: franz
---

The Electrum package that ships with Guix does not support many hardware wallets out of the box - usually due to licensing reasons.

Today I added support for Coldcard to Electrum on PantherX Desktop.
We inherit the upstream package, add the missing dependencies and load the udev rules.

```bash
name: electrum-cc
version: 4.4.6
outputs:
+ out: everything
systems: x86_64-linux
dependencies: libsecp256k1@0.3.2 python-aiohttp-socks@0.7.1 python-aiohttp@3.8.4 python-aiorpcx@0.22.1
+ python-attrs@21.2.0 python-bitstring@3.1.7 python-btchip-python@0.1.32 python-certifi@2022.6.15
+ python-ckcc-protocol@1.4.0 python-cryptography@41.0.4 python-dnspython@2.1.0 python-hidapi@0.7.99.post21
+ python-ledgerblue@0.1.44 python-protobuf@3.20.1 python-pyqt@5.15.9 python-qdarkstyle@2.8.1 python-qrcode@7.3.1
+ zbar@0.23.90
location: px/packages/finance.scm:18:2
homepage: https://electrum.org/
license: Expat
synopsis: Bitcoin wallet
description: Electrum is a lightweight Bitcoin client, based on a client-server protocol.  It supports Simple
+ Payment Verification (SPV) and deterministic key generation from a seed.  Your secret keys are encrypted and are
+ never sent to other machines/servers.  Electrum does not download the Bitcoin blockchain.
relevance: 10
```

Install with:

```bash
guix package -i electrum-cc
```

![Issues vs Merge Requests](/assets/images/news/electrum-with-coldcard-on-pantherx.png)

Electrum also works with the Ledger Nano S and X.

If you are on guix, you can use these changes by:

1. Get PantherX channel and install `electrum-cc`
2. Add udev rules [ref](https://github.com/Coldcard/ckcc-protocol/blob/master/51-coinkite.rules)
3. Add your user to `plugdev` group
4. Reboot

Check if the device has been recognized:

```bash
dmesg | grep Coldcard
[  145.929515] usb 1-5.1: Product: Coldcard Wallet
[  145.948923] hid-generic ...: hiddev0,hidraw3: USB HID v1.11 Device [Coinkite Coldcard Wallet] on usb-0000:00:14.0-5.1/input3
```
