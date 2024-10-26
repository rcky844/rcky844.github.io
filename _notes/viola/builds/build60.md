---
layout: Post
title: Exotic 7.0 (build 60)
feed: hide
date: 2024-08-09
permalink: /viola/builds/build60
---

> Information:
> Tipz Team is releasing **Exotic 7.0 (build 60)** today in preparing for the upcoming Viola 7.0 Exotic Beta 1.
> The Viola 7.0 Exotic update aims to introduce many useful features that will enhance the user experience. In this version, we plan to include many tweaks to the user interface, new Startpage, Download Manager and Scriptloader. Currently, we are around 60% done on the development of these features.
> Please feel free to provide input on the direction that Viola 7.0 should continue in over at our [GitLab Issues page](https://gitlab.com/TipzTeam/viola/-/issues)

# Changelogs
## Features
- Long clicking on the URL input box now opens the SSL Info dialog
- Long clicking on a search suggestions entry now copies it to the URL input box
- Long clicking on share button now copies the page's URL
- Custom user agent dialog now shows the current user agent

## Behavious changes
- Web content force dark is enabled by default again
- Use new Google search suggestions JSON to avoid XSSI attacks
- Now resolves encoding properly
- Improved URL input box & keyboard auto close handling behavior
- Restructured about dialog

## Bug fixes
- `about` URIs are accepted once again
- Search suggestions now update properly
- Remove `wv` from the user agent to prevent detection again

# Known bugs / Missing features
- Download Manager: Internal download manager doesn't support HTTP/FTP downloads yet
- Scriptloader: Doesn't exist yet
- Bussin WebX: Relative links are not supported
- Bussin WebX: Lua scripts are not supported
- Browser: URL input box loads search engine page with blank character

# Resources
- [Download (Modern)](https://gitlab.com/-/project/22143649/uploads/542fbe2ff2ed631f4d4443d5924c08a6/app-modern-next.apk)
- [Download (Legacy)](https://gitlab.com/-/project/22143649/uploads/66b03686fc7534062318892cbcac2a35/app-legacy-next.apk)
- [Source Code](https://gitlab.com/TipzTeam/viola/-/tree/f04076f989b3e0137953e764e3e9e602d5efce7e)
