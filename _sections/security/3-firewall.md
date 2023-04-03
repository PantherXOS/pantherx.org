---
title: Firewall
namespace: security
lang: en
---

Our default firewall is based on the high-performance packet filtering solution nftables and configured to block all but essential traffic which should suffice for most users.

### Open more ports

If you need to open additional ports, it's easy to do that via system configuration:

```scheme
#:open-ports '(("tcp" "4001"))
```

### Customize or replace the firewall

For users with more advance use-cases, it's easy to provide a custom nftables configuration, or replace the firewall itself with iptables or others.

Read more about network and firewall configuration via system config: [Guix Manual](https://guix.gnu.org/manual/devel/en/html_node/Networking-Setup.html)

```scheme
(define %custom-nftables-ruleset
  (plain-file "nftables.conf"
	      "
flush ruleset

table inet filter {
  chain input {
    type filter hook input priority 0; policy drop;

    # early drop of invalid connections
    ct state invalid drop

    # allow established/related connections
    ct state { established, related } accept

    # allow from loopback
    iifname lo accept

    # allow icmp
    ip protocol icmp accept
    ip6 nexthdr icmpv6 accept

    # allow ssh, http, https
    tcp dport { ssh, http, https, 8448 } accept

    # reject everything else
    reject with icmpx type port-unreachable
  }
  ...
}
"))
```