---
title: GUI configuration
namespace: connectivity
lang: en
---

PantherX makes it easy to stay connected and exchange information. The default network manager is {% include tooltip.html keyword="NetworkManager" description="NetworkManager is a system service that manages network connections and provides a common interface for applications to access networking capabilities." %}. It provides a graphical user interface for managing network connections, including VPN.

<img src="/assets/images/px-desktop-widget-system.png" alt="PantherX System Widget" style="height:150px;padding:0.5rem">

On LXQt, widgets visualize how you're connected to the network, and whether additional privacy features, including OpenVPN, {% include tooltip.html keyword="WireGuard" description="WireGuard is a very simple, yet incredibly fast, modern VPN that utilizes state-of-the-art cryptography. WireGuard offers a superior and potentially more secure experience compared to OpenVPN." %}, Proxy or Tor, are running.

- Connected interfaces (ethernet, wifi, etc.)
- Additional privacy features (OpenVPN, WireGuard, Proxy, Tor)
- Assigned IP addresses (private and public)