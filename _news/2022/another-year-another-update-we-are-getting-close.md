---
layout: news
title: "Another year, another update: We are getting close"
date: 2022-08-10 01:00:00 +0100
author: franz
community_url: https://community.pantherx.org/t/news-another-year-another-update-we-are-getting-close/88
cover:
  height: medium
  image: bg-another-year-another-update-we-are-getting-close.jpg
lang: en
---

When you're working on something you enjoy, hours become days, days become weeks and before you realize it, an entire year has passed, and all that you've got to show is ... well, that's the big question, isn't it? 

Fortunately, for a team of developer's, it's usually easy to pull-up some stats, and feel good about the numbers (since ~ August 2021):

- 1140 new issues and feature requests filed
  - about 85% of our total ~3,500 issues are closed
- 574 merge requests
- 2780 pipeline runs
- 1x new team member

That's all great, right? Let's make some nice graphs and ...

Okay, I'm sure you don't really care about the number of issues we've closed, or whether we can render a beautiful? graph to show the uphill-battle we're facing (issues: blue, merge requests: brown):

![Issues vs Merge Requests](/assets/images/news/issues-vs-merge-requests-aug-2022.png)

Let me share the highlights of what we've been working on:

- Time tracking: A new, dedicated desktop application that connects to Gitlab, Github and Central Management, and helps you stay on top of time spend on various projects.
- Chat Client: We've forked Nheko, to develop a new high-performance Matrix Client that works on both Mobile and Desktop, and seamlessly integrates with Accounts on PantherX.
- Support for Raspberry Pi: PantherX OS (and Guix) on Raspberry Pi3, Pi4 and the Compute Module 4, using the official Raspberry firmware and kernel, with support for 3D acceleration.
- Installer (CLI): A new, fully automated installer that supports both Desktop and Server releases, and full disk encryption. This is a temporary solution until we are ready to release our GUI installer and setup.
- Hardware templates: Describe differences in machine configuration (computer vendor and model), in code; For example: required kernel modules and touch pad tweaks. At the moment few machines are supported, but we're working to add more, as the community grows and we get feedback about optimal configuration on different hardware.
- Launcher: Easy to use application launcher with networking and service configuration (for ex. IoT BLE data collection) for ARM-based touchscreen devices.

These are just broad strokes; Part of the daily routine are infrastructure maintenance, handling depreciation, putting out fires, updating and up-streaming packages and trying to stay afloat.

### Looking ahead

#### PantherX OS

Looking ahead, we're going to focus more and more on specific features, and our releases will reflect this. Particularly:

- Better Matrix integration (ongoing)
- Encrypted Contacts and Calendar (September - October)
- More time tracking integration's (November)
- Massive improvements for Software (December)
- GUI-based Installer and Setup (December)

That being said, it's rather unlikely that we'll manage to release a golden master (1.0) in 2022. While PantherX is already rock-solid thanks to it's guix-roots, users of 1.0 and above, should never have to use a terminal, unless they want to - this is one of our most basic commitments, and we're not there yet.

#### Central Management

Aside from our operating system, we continue to develop our business solution called "Central Management" that features a tight integration with PantherX and enables both new, and established businesses to migrate to, and experience what open source has to offer - without hiring a specialist.

Key features include:
- Password-less authentication across all applications (incl. 3rd party)
- Remote management and monitoring of PantherX Desktop and Server
- Synchronization of all data, including desktop application accounts, across multiple desktops
- Automatic backup, easy restore and assisted disaster recovery (total loss)
- System Health Monitoring that discovers issues before they become a problem
- All the usual features like Forms, Tasks, Time Tracking, deep integration with 3rd party application and services to pull-in (or push-out) data and powerful automation's to keep your marketing, support and sales efforts going

We pay particular attention that many of the companion applications we develop, work both with and without Central Management (CM), so even our open source Desktop users, and users in migration - on other platforms, will come to enjoy some of the features.

### Final Words

There's plenty of work left to do, and with a project of this size, we'll never be quite finished - However, a few more months of polish, a lot more testing, and hopefully more (not too much ;)) user-feedback will bring about a much more polished, final release that everyone can get excited about.

That's all. I've run out of things to say.

Signing-off.
Franz