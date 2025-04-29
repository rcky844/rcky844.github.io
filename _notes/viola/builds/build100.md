---
layout: Post
title: Fernando 8.0 (build 100)
feed: hide
date: 2025-04-29
permalink: /viola/builds/build100
---

# Changes
## New features
### Settings overhaul!
Many previously groupped together options have been split into separate screens to increase usability. We would like to hear from the community about how we can improve from the current point in time, as this is still not final.

Some key points to highlight are listed below:
- Improved theme picker with illustrations
- Added kill switch for homepage and search suggestions
- Simplified and updated text for many settings options

### Interactions
- Opening external links now has a new **Snackbar** for confirmation
- Insecure connections when enforcing HTTPS now shows a dialog for confirming downgrade to HTTP

### User interface
- SSL Lock dialog now appears at the top, and dismissed by tapping anywhere else
- Create shortcuts dialog now appears at the bottom, and dismissed by tapping anywhere else

### Developers!
- Console logs are now **MONOSPACED**!
- Console logs now prints their respective log level
- Console logs are no longer updated using timers
- Console dialog now has a proper fixed size, and you can now scroll through the logs

## Bug fixes
- Fixed sending Save Data requests
- Fixed sending DNT and GPC requests to sites not loaded manually
- Fixed Viola logo being cut off in About screen

## Optimizations & miscellaneous
- Simplified storage of build times by using Unix timestamps

# Resources
> Important:
> 
> Viola 7.0 introduced two variants for different Android versions.
> For Android 4.4.4 (including KitKat Wear) and below, use Legacy variant.
> For Android 5.0 and later, use Modern variant.

- [Download (Modern)](https://codeberg.org/TipzTeam/viola/releases/download/8.0_c100/app-modern-next.apk)
- [Download (Legacy)](https://codeberg.org/TipzTeam/viola/releases/download/8.0_c100/app-legacy-next.apk)
- [Source Code](https://codeberg.org/TipzTeam/viola/src/tag/8.0_c100)
