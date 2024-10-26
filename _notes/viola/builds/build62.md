---
layout: Post
title: Exotic 7.0 (Beta 2) (build 62)
feed: hide
date: 2024-08-11
permalink: /viola/builds/build62
---

> Information:
> Tipz Team is releasing the Viola 7.0 "Exotic" Beta 2.
> The Viola 7.0 Exotic update aims to introduce many useful features that will enhance the user experience. In this version, we plan to include many tweaks to the user interface, new Startpage, Download Manager and Scriptloader. Currently, we are around 60% done on the development of these features.
> Please feel free to provide input on the direction that Viola 7.0 should continue in over at our [GitLab Issues page](https://gitlab.com/TipzTeam/viola/-/issues)

# Changelogs
## Features
- **Added a new SSL lock dialog gesture**
  Refined gesture for opening SSL lock dialog to not conflict with copy & paste context menu.
- **Added a console message dialog**
  This is accessible by long pressing the "View source" option once to activate logging, and long pressing it again to open the dialog.

## Behavious changes
- Removed "Copied to Clipboard" toast on API 33 and above
- Enforce HTTPS now enforces it on user input URLs
- SSL handshake errors are now handled with a dialog that attempts to fix it

# Known bugs / Missing features
- Download Manager: Internal download manager doesn't support HTTP/FTP downloads yet
- Scriptloader: Doesn't exist yet
- Bussin WebX: Relative links are not supported
- Bussin WebX: Lua scripts are not supported

# Resources
- [Download (Modern)](https://gitlab.com/-/project/22143649/uploads/eef809dff354a3e140d610f1e1780719/app-modern-next.apk)
- [Download (Legacy)](https://gitlab.com/-/project/22143649/uploads/76876bb6bb9f5b15fc08c35a89e9c467/app-legacy-next.apk)
- [Source Code](https://gitlab.com/TipzTeam/viola/-/tree/7.0_beta2)

<!-- Whoops
- [Download (Modern)](https://gitlab.com/-/project/22143649/uploads/ab6d096406f37f248f5ff64e99dfb52f/app-modern-next.apk)
- [Download (Legacy)](https://gitlab.com/-/project/22143649/uploads/ba0b5f58355c5761153850e51b79df49/app-legacy-next.apk)
-->
