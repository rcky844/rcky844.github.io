---
layout: Post
title: Exotic 7.0 (build 70)
feed: hide
date: 2025-02-17
permalink: /viola/builds/build70
---

# New features
- Redesigned user interface: More lean, changing your browsing experience.
- Download Manager: Allows you to manage previous downloads
- Translate: Shortcut to bring you to Google Translate for website translations
- Fullscreen: Immersive browsing experience without address bars or toolbars
- Console logging: See what a webpage is doing with a long press on "View Page Source"
- History storage toggle: Allows you to disable preserving history when necessary
- Web content toggle: Allows you to disable website force darks
- Unified about page: Improved about page to improve support

## Translations
Viola 7.0 is the first version to be translated through [Crowdin](https://crowdin.com/project/viola). We would like to thank the following individuals for their contributions:
- **davigamer987**: Portuguese, Brazilian
- **Otus9051**: German
- **SirRGB**: German

**New languages added**:
- Portuguese, Brazilian
- Spanish

Extra translation support goes to the Chromium Authors and LineageOS project for their translations, which helped to improve translations for German, Spanish and Vietnamese.

Translations in this update is incomplete. If you would like to improve the translations of our project, please join our Crowdin.

## For developers
This update involved major overhauls to the source code. If you wish to adopt this version of Viola for other purposes, or contribute back into the project, you may need to rebase your changes onto this update, instead of merging.

Web developers targeting browsers can detect the use of this version of Viola by checking whether the user agent string includes `Viola/7.0`.

New JavaScript function has been added for web developers to get the build tag of the currently running version of Viola through `ViolaBrowser.getProductBuildTag()`.

## Miscellaneous
- Improved SSL Lock dialog (added favicon, proper text bolding, merged with favicon)
- Added Frogfind as a search engine
- Added "Download link" option in hit test dialog
- Added downloads confirmation dialog
- Added support for webcam and microphone
- Added display for current user agent in "Custom User Agent" dialog
- Added empty messages to History, Favorites lists
- Added HTTP downgrade confirmation dialogs when SSL errors occur 
- Improved default user agent strings
- Incorporated now defunt Bussin WebX support
- Enabled permission pop-up for locations
- Improved pull to refresh disabler detection
- Improved release & update mechanisms
- Improved update available dialog, adding release date
- Made start page wallpaper selection update automatically
- Made possible to reset custom update channel
- Disabled "Show favicon" by default, and redirect users to the new SSL Lock dialog
- Renamed Ad hosts to Ad blocklist for clarity

# Resources
> Important:
> Viola 7.0 introduces two variants for different Android versions.
> For Android 4.4.4 (including KitKat Wear) and below, use Legacy variant.
> For Android 5.0 and later, use Modern variant.

- [Download (Modern)](https://codeberg.org/TipzTeam/viola/releases/download/7.0/app-modern-release.apk)
- [Download (Legacy)](https://codeberg.org/TipzTeam/viola/releases/download/7.0/app-legacy-release.apk)
- [Source Code](https://codeberg.org/TipzTeam/viola/src/tag/7.0)
