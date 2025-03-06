---
title: 'Moving closer to GUIX'
summary: Reduce fragmentation
layout: news
source:
date: 2025-03-06 0:00:00 +0000
cover:
  height: medium
  image: bg-new-authenticated-channels.jpg
lang: en
author: franz
---

Today PantherX is simplifying, and moving closer to GUIX, to reduce fragmentation in the ecosystem, reduce maintenance burden, and make it easier for users to switch to PantherX OS, or get help.

What changes:

- The system configuration follows the GUIX format and inherits PantherX OS
- Included services and packages are less opinionated

What remains:

- Standard Linux kernel
- Non-free sources enabled by default

## Configuration Examples

### Base OS Example

```scheme
(use-modules (gnu)
             (gnu system)
             (px system panther))

(operating-system
 (inherit %panther-os)
 (host-name "px-base")
 (timezone "Europe/Berlin")
 (locale "en_US.utf8")
 
 (bootloader
  (bootloader-configuration
   (bootloader grub-bootloader)
   (targets '("/dev/vda"))))
 
 (file-systems
  (cons
   (file-system
    (device (file-system-label "my-root"))
    (mount-point "/")
    (type "ext4"))
   %base-file-systems))
 
 (users
  (cons
   (user-account
    (name "panther")
    (comment "panther's account")
    (group "users")
    ;; Set the default password to 'pantherx'
    ;; Important: Change with 'passwd panther' after first login
    (password (crypt "pantherx" "$6$abc"))
    (supplementary-groups '("wheel" "audio" "video"))
    (home-directory "/home/panther"))
   %base-user-accounts)))
```

### Sway OS Example

```scheme
(use-modules (gnu)
             (gnu system)
             (px system panther)
       
             ;; swaylock-effects
             (gnu packages wm))

(use-service-modules xorg)

(operating-system
 (inherit %panther-os)
 (host-name "px-base")
 (timezone "Europe/Berlin")
 (locale "en_US.utf8")
 
 (bootloader
  (bootloader-configuration
   (bootloader grub-bootloader)
   (targets '("/dev/vda"))))
 
 (file-systems
  (cons
   (file-system
    (device (file-system-label "my-root"))
    (mount-point "/")
    (type "ext4"))
   %base-file-systems))
 
 (users
  (cons
   (user-account
    (name "panther")
    (comment "panther's account")
    (group "users")
    ;; Set the default password to 'pantherx'
    ;; Important: Change with 'passwd panther' after first login
    (password (crypt "pantherx" "$6$abc"))
    (supplementary-groups '("wheel" "audio" "video"))
    (home-directory "/home/panther"))
   %base-user-accounts))
 
 (services
  (cons*
   (service screen-locker-service-type
            (screen-locker-configuration
             (name "swaylock")
             (program (file-append
                       swaylock-effects
                       "/bin/swaylock"))
             (using-pam? #t)
             (using-setuid? #f)))
   
   (service greetd-service-type
            (greetd-configuration
             (greeter-supplementary-groups
              (list "video" "input" "users"))
             (terminals
              (list
               (greetd-terminal-configuration
                (terminal-vt "1")
                (terminal-switch #t)
                (default-session-command
                  (greetd-wlgreet-sway-session)))
               (greetd-terminal-configuration
                (terminal-vt "2"))
               (greetd-terminal-configuration
                (terminal-vt "3"))
               (greetd-terminal-configuration
                (terminal-vt "4"))
               (greetd-terminal-configuration
                (terminal-vt "5"))
               (greetd-terminal-configuration
                (terminal-vt "6"))))))
   
   %panther-desktop-services-minimal)))
```

## What's Next

The previous configuration formats will stay in place for another couple of months to make sure you have enough time to migrate. In the unlikely scenario that something breaks due to upstream changes, we won't be providing any fixes, and instead retire the configuration early.

What's not ready:

- `px-install` is still using the old format
- New PantherOX Images are not yet available