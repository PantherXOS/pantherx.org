---
layout: feature
title: Connectivity
description: The future of Desktop Computing
cover:
  height: medium
  image: bg01.jpg
  background: violet
namespace: home
priority: 1
permalink: /connectivity/
lang: en
---

PantherX allows seamless communication with other Panther Alpha users, which enables file synchronisation, video chat and remote login, all without registering any accounts, and both to local, and remote PantherX powered systems. Beyond that, PantherNet enables the hosting and sharing of websites and small communities like Mastodon, between any number of Panther users, even without traditional internet access.

### Networking

{% include image.html image="px-desktop-widget-system.png" alt="PantherX System Widget" direction="right" %}

Networking has been designed to be as easy to use, and transparent as possible. A quick overview shows how you're connected to the internet, and whether additional privacy features, including OpenVPN, {% include tooltip.html keyword="WireGuard" description="WireGuard is a very simple, yet incredibly fast, modern VPN that utilizes state-of-the-art cryptography. WireGuard offers a superior and potentially more secure experience compared to OpenVPN." %}, Proxy or Tor, are running.

#### Networking Profiles

For additional flexibility, networking profiles allow you to define connection parameters, based on your current location, and the network you're connected to.

With a few clicks, you can deny internet access to all but essential applications, or design your own profile, to cover more individual needs.

### PantherNet

PantherNet powers all Panther to Panther connectivity features, including the direct exchange of messages and files, the synchronisation of any number of Panther devices, and {% include tooltip.html keyword="offline internet" description="The offline internet refers to any number of Panther Alpha, connected in a network, forming their own internet, with related services such as web-hosting and message exchange." %}, with automatic resource allocation between any number of Panther devices, connected by any number of ways.

#### Self-Contained Infrastructure

PantherX has been designed to perform great in scenarios where you need to bootstrap a self-contained {% include tooltip.html keyword="infrastructure" description="Infrastructure is really a more fancy word for a bunch (or thousands!) of Panther Alpha, connected either directly, or via the Internet, to form a new, independent network." %} with any number of Panther Alpha, with or without central management and even without pre-existing networking infrastructure.

![PantherNet](/assets/images/panthers.png)

To initiate a new, self-contained infrastructure, all you need is a Panther Alpha on which you create the {% include tooltip.html keyword="initiation profile" description="The initiation profile is basically a configuration file, based on which a new Panther Alpha configures itself. That means, you can have any number of initiation profiles, to cover any number of scenarios - for example, a file-server, a web-server, or just - your new Desktop" %}, which defines each, new Panther's responsibility.

### Remote Access

Because all Panther Alpha are identical, and come with the same core software, PantherX offers the most robust, fast, remote-login feature ever made. This allows you to remotely access your Panther Alpha, using any other Panther Alpha, from anywhere in the world, as long as they are connected.