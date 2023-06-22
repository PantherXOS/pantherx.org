---
layout: news
title: "A new direction: Welcome XFCE, Mate and Others & Community Growth"
date: 2023-06-22 01:00:00 +0100
author: franz
community_url: https://community.pantherx.org/t/a-new-direction-welcome-xfce-mate-and-others-community-growth/111
cover:
  height: medium
  image: bg-a-new-direction-welcome-xfce-mate-and-others.jpg
lang: en
---

Moving forward PantherX OS will "support" multiple flavor of desktop environments, to embrace the variety of options, and make users with different preferences feel more at home (QT vs GTK). Our goal to provide a smooth, out of the box experience has not changed, but the approach on how-to achieve this needs to adapt; specifically, the only future for PantherX OS is a future with a vibrant community because keeping up requires contributors and different skill sets.

The environment in which we set out to develop PantherX has not changed, and I continue to believe that guix provides the most compelling and adaptive computing experience on the planet, which could be enjoyed by many more Linux users, if it was not for the steep learning curve, and time required to actually figure out guix, and get things running.

What follow's is an overview of what the new configuration and options will looks like. 
For existing users, only a small change is required.

Important: **These changes will go live on 23rd June 2023.**

## Changes

### Base

Name `px-base-os`

Foundation for all other OS.

This provides stuff like px, px-install, gnutls and so on.

Parts:
- `%px-core-packages` (`%base-packages`)
- `%px-core-services` (`%base-services`)


### Desktop

Name: `px-desktop-os`

```scheme
(use-modules (gnu)
             (gnu system)
             (gnu services desktop)
             (px system config))

(px-desktop-os
 (operating-system

  ...

  ;; Globally-installed packages.
  (packages (cons*
             %px-desktop-packages))

  ;; Services
  (services (cons*
            (service xfce-desktop-service-type)
             %px-desktop-services))

))
```

Desktop operating system with various desktop environments including:

- LXQt
- XFCE
- MATE

and a set of matching package and services.

Defaults:
- `%px-desktop-packages`
- `%px-desktop-services`

Options:
- `%px-desktop-packages` (`px-desktop-packages-qt`)
- `%px-desktop-packages-qt`
- `%px-desktop-packages-gtk`
- `%px-desktop-services`
  - `(service px-desktop-service-type)` ← PantherX Default (LXQt)
    - use `%px-desktop-packages` or `%px-desktop-packages-qt`
  - `(service xfce-desktop-service-type)` ← XFCE (make sure to include `(gnu services desktop)`)
    - best with `px-desktop-packages-gtk`
  - `(service mate-desktop-service-type)` ← Mate (make sure to include `(gnu services desktop)`)
    - best with `px-desktop-packages-gtk`

On the differentiation between `qt` and `gtk`, and why not desktop specific: 
- The service usually provides all required desktop-specific packages
- The goal is, to select the "best" (if any) QT / GTK application to use across destops: QT (LXQt) and GTK (Mate, XFCE, Gnome). There are exceptions: Thunderbird (Email) and Firefox is default across both QT and GTK - desktops because it's hard to beat in terms of usability.
- To make it easier to switch desktop environments, while continuing to use the applications you're familiar with

So far we've focused on LXQt and QT so the GTK-parts are very much WIP and we welcome suggestions and contributions.

#### Installation

```bash
px-install-run
# Select DESKTOP
```

This currently defaults to:

- `%px-desktop-services` with `(service px-desktop-service-type)`
- `%px-desktop-packages`

### Server

Name: `px-server-os`

```scheme
(use-modules (gnu)
             (gnu system)
             (px system config))

(px-server-os
 (operating-system

  ...

  ;; Globally-installed packages.
  (packages (cons*
             %px-server-packages))

  ;; Services
  (services (cons*
             %px-server-services))

))
```

Defaults:
- `%px-server-packages`
- `%px-server-services`

Options:
- `%px-server-packages`
- `%px-server-services`
- `%px-server-iptables-services`
  - Using iptables instead of nftables; great for Docker

#### Installation

```bash
px-install-run
# Select SERVER
```

This currently defaults to:

- `%px-server-services`
- `%px-server-packages`
  
## Migration

For existing user, the change is real easy.

1. Adjust your modules: https://community.pantherx.org/t/important-system-configuration-changes/110
2. Continue to use LXQt or use a different environment

PantherX Default:

```scheme
(services (cons*
            (service px-desktop-service-type)
             %px-desktop-services))
```

Different desktop (XFCE):

```scheme
;; Adapt your modules to look like this
(use-modules (gnu)
             (gnu system)
             (gnu services desktop)
             (px system config))
             
;; ...

(services (cons*
            ;; Add desktop
            (service xfce-desktop-service-type)
             %px-desktop-services))
```

## Community

So far our focus has been on LXQt but I recognize guix is niche, LXQt is niche, and PantherX well - I don't have to tell you! However, with more options comes the requirement for different tools and mechanism to accomplish different goals like a new installer or supplementing missing features like a screen scaling GUI that works across all of them.

My hope here is, to provide the initial infrastructure, and hopefully get this project into everyone's hands, and develop tools for more decentralized package submission, approval processes and package distribution - and of course, upstream whatever makes sense. I also recognize, and appreciate the nonguix community without which we probably wouldn't exist, as their work provides a fundamental building block for PantherX.

For now, specifically I'm inviting people to:
- Help promote the project
- Improve the out of the box experience of different desktop environments
- Maintain and submit new packages
- Become a community moderator
- Contribute new services and configuration templates