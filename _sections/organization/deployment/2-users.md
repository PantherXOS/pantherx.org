---
title: User deployment
namespace: org-deployment
type: org
lang: en
---

Users are deployed remotely, after a device has been set-up. A single device supports any number of users.

### Groups

Groups are a central part of user management and make it easy to apply a set of preferences and permissions, to any number of users:

- Online accounts
- user applications
- shared folder
- backup

#### Online Accounts

It's common for all, or a subset of users, to require access to a particular service such as Google Apps. With online accounts, it's easy to roll-out any number of services, to all users, within a group.

##### Provider

Google apps, Fastmail, Microsoft Office 365, many others

##### Protocols

IMAP, CalDAV, CardDAV, SFTP, S3, OpenVPN, WireGuard, L2TP, IPSec

#### User applications

Each user has his own set of applications, depending on group membership. User applications are installed automatically, and even if users share a device, they may use an entirely different set of applications, or application versions.

#### Shared folders

Shared folders are provisioned to a user, based on group membership, and are kept in sync, peer to peer, without 3rd party provider, or additional fees. All data remains within your organization.

Powered by [Syncthing](https://syncthing.net/)

#### Backup

User backup and restore is handled centrally. Devices backup user accounts, directly to the configured provider, yet restore is possible only from _Central Management_.

- Only user data is backed up

##### Providers

Tarsnap, more coming soon
