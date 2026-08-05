---
title: Configure DHCP Server [Unix/Ubuntu]
date: "2014-06-11T23:43:51"
modified: "2014-06-10T23:58:12"
author: osify
categories:
  - Unix OS
tags:
  - DHCP
  - Tips
  - Ubuntu
  - Unix
  - Unix Tips
lang: en
excerpt: Here is a small draft steps in order to allow you to setup and configure DHCP server on Unix/Ubuntu. If anything to improve or comment, please put your comment in below. Install DHCP server Packet Enable DHCP server…
origin:
  site: ask
  id: 487
  url: https://ask.osify.com/qa/487
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/487
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

Here is a small draft steps in order to allow you to setup and configure DHCP server on Unix/Ubuntu.

If anything to improve or comment, please put your comment in below.

**Install DHCP server Packet**

```actionscript
sudo apt-get install isc-dhcp-server
```

**Enable DHCP server Network Interface**

Enable the DCHP server on your network interface (in my case eth0):

```actionscript
sudo nano /etc/default/isc-dhcp-server

Set INTERFACES="" to the name of the network interface that you want to enable the DHCP server on:
<em>INTERFACES="eth0"</em>
```

**Configuration**

Edit the DHCP server configuration:

```actionscript
mv /etc/dhcp/dhcpd.conf /etc/dhcp/dhcpd.conf.org
sudo nano /etc/dhcp/dhcpd.conf

## ddns-update-style none; default-lease-time 600; max-lease-time 7200; option domain-name "test.lan"; option domain-name-servers 1.1.1.1; authoritative; log-facility local7; subnet 1.1.1.0 netmask 255.255.255.0 { option routers 1.1.1.254;}
```

**Restart Service**

```actionscript
sudo service isc-dhcp-server restart
```

**Configure DHCP Reservation**

```actionscript
ddns-update-style none; default-lease-time 600; max-lease-time 7200; option domain-name "test.lan"; option domain-name-servers 1.1.1.1; authoritative; log-facility local7; subnet 1.1.1.0 netmask 255.255.255.0 { option routers 1.1.1.254; option ntp-servers 1.1.1.1; option netbios-node-type 8; pool { deny unknown-clients; range 1.1.1.10 2.1.1.13; } }

####===Reservation MAC address===####
host xp-client

{

hardware ethernet 08:00:27:50:1c:21;

fixed-address 1.1.1.11;

}
```
