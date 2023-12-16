---
title: 'New Authenticated Channels'
summary: Lean and authenticated
layout: news
source:
date: 2023-11-29 0:00:00 +0000
cover:
  height: medium
  image: bg-new-authenticated-channels.jpg
lang: en
author: franz
---

We've recently migrated from our legacy channel to a new, authenticated one. It means that technically every commit in our repository has been made by a known and authorized person, and not an unknown 3rd-party. Our channel relies on, and includes guix and nonguix.

Channel definition:

```scheme
;; /etc/guix/channels.scm
(cons* (channel
        (name 'pantherx)
        (url "https://channels.pantherx.org/git/panther.git")
        ;; Enable signature verification:
        (introduction
         (make-channel-introduction
          "54b4056ac571611892c743b65f4c47dc298c49da"
          (openpgp-fingerprint
           "A36A D41E ECC7 A871 1003  5D24 524F EB1A 9D33 C9CB"))))
       %default-channels)
```

Here's what this yields:

```bash
$ guix describe
Generation 228  Nov 29 2023 15:00:12    (current)
  guix cd46757
    repository URL: https://git.savannah.gnu.org/git/guix.git
    branch: master
    commit: cd46757c1a0f886848fbb6828c028dd2a2532767
  pantherx c33d85c
    repository URL: https://channels.pantherx.org/git/panther.git
    branch: master
    commit: c33d85c8af2b4cf9c0d54fbc3ff261f154c4fba9
  nonguix a7f7269
    repository URL: https://channels.pantherx.org/git/nonguix.git
    branch: master
    commit: a7f7269f5f19c306c5082461b03797c2e92edf6f
```

The nonguix channel currently points to `https://channels.pantherx.org/git/nonguix.git` but this is just a copy of `https://gitlab.com/nonguix/nonguix.git` that pulls changes frequently.

If you have installed PantherX in the past month, these should already be in place. If you are on guix, you should be able to use this too.
