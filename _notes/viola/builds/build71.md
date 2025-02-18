---
layout: Post
title: Exotic 7.1 (build 71)
feed: hide
date: 2025-02-17
permalink: /viola/builds/build71
---

# Changes
- Fullscreen mode:
    - Added information dialogs on the usage of fullscreen mode
    - Fixed issues with address bar visibility in fullscreen mode
    - Fixed fade out duration of exit fullscreen button
- Downloads:
    - Fixed downloading files on certain older Android versions
    - Added error dialogs showing reason for failed downloads
      (applicable to downloading updates and ad blocklist)
- Reintroduced CVE fixes for Android versions older than 4.4
- Fixed "Copy link text" option not being visible in some cases
- Fixed issues with console logging messages not being separated

## Translations
Viola 7.1 continues its translation activities at [Crowdin](https://crowdin.com/project/viola). We would like to thank the following individuals for their contributions:
- **Otus9051**: Bengali
- **davigamer987**: Portuguese, Brazilian
- **cat658011**: Russian
- **xenxynon**: Hindi

**New languages added**:
- Bengali
- Hindi
- Russian

Translations in this update is incomplete. If you would like to improve the translations of our project, please join our Crowdin.

## For developers
Web developers targeting browsers can detect the use of this version of Viola by checking whether the user agent string includes `Viola/7.1`.

New JavaScript function has been added for web developers to get the build tag of the currently running version of Viola through `ViolaBrowser.getProductBuildTag()`.

# Resources
> Important:
> 
> Viola 7.0 introduced two variants for different Android versions.
> For Android 4.4.4 (including KitKat Wear) and below, use Legacy variant.
> For Android 5.0 and later, use Modern variant.

- [Download (Modern)](https://codeberg.org/TipzTeam/viola/releases/download/7.1/app-modern-release.apk)
- [Download (Legacy)](https://codeberg.org/TipzTeam/viola/releases/download/7.1/app-legacy-release.apk)
- [Source Code](https://codeberg.org/TipzTeam/viola/src/tag/7.1)
