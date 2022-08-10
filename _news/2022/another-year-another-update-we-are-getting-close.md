---
layout: news
title: "Another year, another update: We are getting close"
date: 2022-08-10 01:00:00 +0100
author: franz
cover:
  height: medium
  image: the-first-beta-release-of-pantherx-os.jpg
lang: en
---

When you're working on something you enjoy, hours become days, days become weeks and before you realize it, an entire year has passed, and all that you've got to show is ... well, that's the big question, isn't it? 

Fortunately, for a team of developer's, it's usually easy to pull-up some stats, and feel good about the numbers (since ~ August 2021):

- 1140 new issues
  - about 85% of our total ~3,500 issues are closed
- 574 merge requests
- 2780 pipeline runs
- 1x new team member

That's all great, right? Let's make some nice graphs and ...

Okay, I'm sure you don't really care about the number of issues, we've closed, or whether we can render a beautiful graph to show the uphill-battle we're facing:

![Issues vs Merge Requests](/assets/images/news/issues-vs-merge-requests-aug-2022.png)

So let me try to summarize what we've actually done:

- Time tracking: A new, dedicated desktop application that connects to Gitlab, Github and Central Management, and helps you stay on top of time spend on various projects.
- Chat Client: We've forked Nheko, to develop a new high-performance Matrix Client that works on both Mobile and Desktop, and seamlessly integrates with Accounts.
- Support for Raspberry Pi: PantherX OS (and Guix) on Raspberry Pi3, Pi4 and the Compute Module 4, using the official Raspberry firmware and kernel, with support for 3D acceleration. We also support the SEEED reTerminal with CM4.
- Installer (CLI): A new, fully automated installer that supports both Desktop and Server releases, and full disk encryption. This is primarily a "bridge" until we release our GUI installer and setup.
- Hardware templates: Describe differences in machine configuration, in code; For example required kernel modules and touch pad tweaks. At the moment few machines are supported, but we're working to add more, as the community grows and we get feedback about required configuration on different hardware.

These are just broad strokes; Part of the daily routine are infrastructure maintenance, handling depreciation, putting out fires, updating and up-streaming packages and trying to stay afloat.

### Looking ahead

#### PantherX OS

Looking ahead, we're going to focus more and more on specific features, and our releases will reflect this. Particularly:

- Better Matrix integration (ongoing)
- Encrypted Contacts and Calendar (September - October)
- More time tracking integration's (November)
- Massive improvements for Software (December)
- GUI-based Installer and Setup (December)

That being said, it's rather unlikely that we'll manage to release a golden master (1.0) in 2022. While PantherX is already rock-solid, users of 1.0 and above, should never have to use a terminal, unless they want to - this is one of our most basic commitments, and we're not there yet.

#### Central Management

Aside from our operating system, we continue develop our business solution called "Central Management" that features a tight integration with PantherX and enables both new, and existing business to migrate to, and experience what open source has to offer - without hiring a specialist.

Key features include:
- Password-less authentication across all applications (incl. 3rd party)
- Remote management and monitoring of PantherX Desktop and Server
- Fully automated backups; end to end encrypted synchronization of user accounts
- All the usual features like Forms, Tasks, Time Tracking, deep integration with 3rd party services to pull-in data and powerful automation to keep your sales and marketing efforts humming

We pay particular attention that all the companion applications we develop, work both with and without Central Management, so even our open source Desktop users will come to enjoy some of the features. In fact, most applications are capable to run on MacOS and Windows, to ease transition - particularly in large companies.

Our business solution will likely be available in two editions:

- A self-hosted one (comes pre-installed on PantherX Hardware) for maximum privacy
- A hosted version, with fewer features, for freelancers and small businesses

### Final Words

There's plenty of work left to do, and with a project of this size, we'll never be quite finished - However, a few more months of polish, a lot more testing, and hopefully more (not too much ;)) user-feedback will bring about a much more polished, final release that everyone can get excited about.

That's all; I've run out of things to say: Actions speak louder than words.

Signing-off.
Franz