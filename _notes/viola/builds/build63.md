---
layout: Post
title: Exotic 7.0 (Beta 3) (build 63)
feed: hide
date: 2024-12-19
permalink: /viola/builds/build63
---

> Information:
> This build is the Beta 3 release. You can update in-app or do an manually with the APKs below.

# Changelogs
## Since Beta 2 Patch 1 (build 62.5)
- Improved new tabs page
    - Switched back to view-based version
    - Both search bars are now integrated with one another
- Added improved about screen
    - Changed "Exotic" banner image
- Added option to disable storage of History
- Added initial support for storing Download history
- Added support for detecting major file types
- Added support for updating to minor versions

## Since Beta 2 (build 62)
- Target Android 15 for modern variant
- Added download confirmation dialog
- Added support for clearing download queue
- Added option to download link in context menu
- Removed old favicon menu, replaced with SSL Lock menu
    - Added gestures for bringing up SSL Lock menu
- Fixed duplicated downloads of previously downloaded files
- Fixed crashes with empty update JSON
- Fixed crashes with downloaded files with no filename
- Fixed privileged pages not reloading properly
- Fixed favorites or history showing up as empty
- Fixed opening app links
- Fixed truncated URL being copied in context menu
- Fixed crashes with downloading favicon in context menu


# Known bugs / Missing features
- Download Manager: Internal download manager doesn't support HTTP/FTP downloads yet
- Scriptloader: Doesn't exist yet
- Changelogs are pointed to the wrong path

# Resources
- [Download (Modern)](https://codeberg.org/TipzTeam/viola/releases/download/7.0_beta3/app-modern-next.apk)
- [Download (Legacy)](https://codeberg.org/TipzTeam/viola/releases/download/7.0_beta3/app-legacy-next.apk)
- [Source Code](https://codeberg.org/TipzTeam/viola/src/tag/7.0_beta3)
