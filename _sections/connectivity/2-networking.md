---
title: Expert configuration
namespace: connectivity
lang: en
---

For everyone that need's a little more control, it's easy to disable NetworkManager and configure static networking, with or without local DNS dnsmasq cache. All this is done via the system configuration - no need to edit any configuration files, or learn about additional tools.

- Default configuration with NetworkManager
- Optional, static network configuration
- Optional, local DNS cache

Read more about network configuration via system config: [Guix Manual](https://guix.gnu.org/manual/devel/en/html_node/Networking-Setup.html)

```scheme
# DNS Cache
(service dnsmasq-service-type
          (dnsmasq-configuration
           (no-resolv? #t)
            (servers '("8.8.8.8" "8.8.4.4"))))

# Static IP
(static-networking-service "eth0" ".10.10.10.112"
          #:netmask "255.255.240.0"
          #:gateway "10.10.10.1"
          #:name-servers '("127.0.0.1"))
```