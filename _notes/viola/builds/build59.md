---
layout: Post
title: Exotic 7.0 (build 59)
feed: hide
date: 2024-08-06
permalink: /viola/builds/build59
---

> Information:
> This build is a proof-of-concept for the upcoming Exotic 7.0 update. Many features still weren't added yet, or doesn't have full functionality, but getting this build out early can allow testers to provide feedback.

# Changelogs
## Features
- SSL Lock dialog now replaces the traditional favicon menu
- SSL Lock dialog now show information for unknown certificates
- Added options to disable force dark

## Behavious changes
- Improved URI validation
- Improved user agent handling
- Made search inputbox dropdown wider

## Bug fixes
- Fixed crashes when searching
- Fixed loading Startpage on refresh

# Known bugs / Missing features
## Bussin WebX
- Lua scripts do not work
- Relative links do not work

## Legacy favicon button
- When switching user agents, the icon may be hidden and missing
Temporary fix: Disable legacy favicon button / Reload the webpage

# Resources
- [Download (Modern)](https://gitlab.com/-/project/22143649/uploads/194bd7ec219c9137edc66c966507e756/app-modern-next.apk)
- [Download (Legacy)](https://gitlab.com/-/project/22143649/uploads/c0822367e92f3737c35a9fcb21ae2352/app-legacy-next.apk)
- [Source Code](https://gitlab.com/TipzTeam/viola/-/tree/bda54d37fbca4ec39dde7953e6bc962fe9466e4c)