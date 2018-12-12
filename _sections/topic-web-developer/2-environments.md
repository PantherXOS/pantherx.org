---
title: Environments
namespace: web-developer
lang: en
---

It's easy to create reproducible development environments, that can be shared with other developers, and deployed to any cloud server. Think of it, as a merge between Docker, Vagrant and whatever package manager you're currently using.

Because PantherX is powered by Guix, you can even reproduce your environments, on foreign distributions, including Debian, Fedora and Arch.

### Cloud Deployment

Define your cloud server, including all packages and services, in a system configuration file, and watch PantherX build it from scratch, and deploy it to the cloud server of your choice, via API or SSH.

Initially supported are:

- Amazon AWS EC2
- DigitalOcean