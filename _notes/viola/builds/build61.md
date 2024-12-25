---
layout: Post
title: Exotic 7.0 (Beta 1) (build 61)
feed: hide
date: 2024-08-10
permalink: /viola/builds/build61
---

> Information:
> Tipz Team is releasing the Viola 7.0 "Exotic" Beta 1.
> The Viola 7.0 Exotic update aims to introduce many useful features that will enhance the user experience. In this version, we plan to include many tweaks to the user interface, new Startpage, Download Manager and Scriptloader. Currently, we are around 60% done on the development of these features.
> Please feel free to provide input on the direction that Viola 7.0 should continue in over at our [GitLab Issues page](https://gitlab.com/TipzTeam/viola/-/issues)

# Changelogs
## Features
- **Added Downloads page**
  Currently, the full internal download manager is not finished yet and the Downloads page included at present is capable of tracking Downloads on the specific session.
- **Replaced the Startpage with a HTML-based variant**
  For users using the browser with JavaScript disabled, the input box will no longer pop-up.
- **Added fullscreen mode**
  This allows you to use the browser in immersive mode in instances other than fullscreen videos.
- **Restored support for API 14-18**
  Please note that these older APIs does not support swapping out the WebView implementation. This is mainly designed for KitKat users as some newer features do not support KitKat or older. For API 14-20, please switch to the legacy builds.
- **Added support for resolving Bussin WebX websites** (`buss://`)
  Only basic support will be added in Exotic 7.0, with no Lua scripting support.
- **Remove favicon by default and moving it to the SSL lock dialog**
  Long pressing the URL input box now opens the SSL lock dialog, and more information for pages without a certificate provided.
- Added the FrogFind! search engine
- Added option to disable web content force dark
- Added gestures for copying the URL by long pressing the share button
- Added gestures to copy to URL input box by long pressing the search suggestions item

## Behavious changes
- Improved behavior with the options in the toolbar
- Improved startup animations when launching the browser
- Now using new Google search suggestions JSON to avoid XSSI attacks
- Chrome inspecting mode is now enabled when ADB debugging is enabled
- Ad blocker hosts list now supports `localhost`
- Improved history and favorites page performance
- Improved URI validation and search engine processing
- Updates are now saved in app's data
- Release dates for update dialog are now displayed
- Feedback has been added for ad servers completing its download
- Now patches the device's user agent string instead of using a custom one
- User agent string can now show up in the custom user agent dialog

# Known bugs / Missing features
- Download Manager: Internal download manager doesn't support HTTP/FTP downloads yet
- Scriptloader: Doesn't exist yet
- Bussin WebX: Relative links are not supported
- Bussin WebX: Lua scripts are not supported

# Resources
- [Download (Modern)](https://codeberg.org/TipzTeam/viola/releases/download/7.0_beta1/app-modern-next.apk)
- [Download (Legacy)](https://codeberg.org/TipzTeam/viola/releases/download/7.0_beta1/app-legacy-next.apk)
- [Source Code](https://codeberg.org/TipzTeam/viola/src/tag/7.0_beta1)
