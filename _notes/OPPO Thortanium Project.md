---
layout: Post
title: OPPO Thortanium Project
date: 2026-02-03
permalink: /oppo-thortanium
format: list
---

```cpp
#include <std_disclaimer.h>
/*
*
* We are not responsible for bricked devices, dead SD cards,
* thermonuclear war, or you getting fired because the alarm app failed. Please
* do some research if you have any concerns about features included in this ROM
* before flashing it! YOU are choosing to make these modifications, and if
* you point the finger at us for messing up your device, we will laugh at you.
*
*/
```

This page contains information for the **OPPO Thortanium devices**, which contains Qualcomm Snapdragon MSM8937/MSM8952/MSM8953 SoCs. This project aims to bring up-to-date software for these legacy and left-behind devices.

![Photo](/assets/img/notes/oppo_thortanium_devices.jpg "Photo with OPPO A57, R9s & R9s Plus")

## Supported devices
### OPPO A57 (2016)
* A57 (China)
* A57t (China; China Mobile)
* CPH1701 (Global)
* CPH1701fw (Global, Indonesia)

They differ in available modem bands, display panels, and camera modules.

### OPPO R9s / R9sk
* R9s (China)
* R9sk (China; LCD)
* CPH1607 (Global)

They differ in available modem bands and camera modules.

### OPPO R9s Plus / F3 Plus
* R9s Plus (China, Global; Single front camera)
* CPH1611 (Global; Single front camera)
* CPH1613 (Global; Dual front camera)

They differ in available modem bands, camera modules, and potentially display panels.

## Feature matrix
### Downstream Android
<div class="full-width">
<table class="ColorTable">
        <tbody><tr>
            <td><strong>Features</strong></td>
            <td><strong>A57</strong></td>
            <td><strong>R9s</strong></td>
            <td><strong>R9sPlus</strong></td>
        </tr>
        <tr>
            <td>Display</td>
            <td class="done">Y</td>
            <td class="partial">P<sup>1</sup></td>
            <td class="partial">P<sup>1</sup></td>
        </tr>
        <tr>
            <td>GPU Acceleration</td>
            <td class="done">Y</td>
            <td class="done">Y</td>
            <td class="done">Y</td>
        </tr>
        <tr>
            <td>WiFi</td>
            <td class="done">Y</td>
            <td class="done">Y</td>
            <td class="partial">P<sup>2</sup></td>
        </tr>
        <tr>
            <td>Bluetooth</td>
            <td class="done">Y</td>
            <td class="done">Y</td>
            <td class="done">Y</td>
        </tr>
        <tr>
            <td>Modem<sup>3</sup></td>
            <td class="done">Y</td>
            <td class="done">Y</td>
            <td class="done">Y</td>
        </tr>
        <tr>
            <td>GNSS<sup>4</sup></td>
            <td class="done">Y</td>
            <td class="done">Y</td>
            <td class="done">Y</td>
        </tr>
        <tr>
            <td>Audio Codec</td>
            <td class="done">Y</td>
            <td class="done">Y</td>
            <td class="done">Y</td>
        </tr>
        <tr>
            <td>Video Codec</td>
            <td class="done">Y</td>
            <td class="done">Y</td>
            <td class="done">Y</td>
        </tr>
        <tr>
            <td>Battery</td>
            <td class="done">Y</td>
            <td class="partial">P<sup>5</sup></td>
            <td class="partial">P<sup>5</sup></td>
        </tr>
        <tr>
            <td>Rear Camera</td>
            <td class="done">Y</td>
            <td class="partial">P<sup>6</sup></td>
            <td class="broken">N</td>
        </tr>
        <tr>
            <td>Front Camera</td>
            <td class="done">Y</td>
            <td class="done">Y</td>
            <td class="broken">N</td>
        </tr>
        <tr>
            <td>Sensors</td>
            <td class="done">Y</td>
            <td class="done">Y</td>
            <td class="done">Y</td>
        </tr>
        <tr>
            <td>Touchscreen</td>
            <td class="done">Y</td>
            <td class="partial">P<sup>7</sup></td>
            <td class="partial">P<sup>7</sup></td>
        </tr>
        <tr>
            <td>Touchkeys</td>
            <td class="done">Y</td>
            <td class="done">Y</td>
            <td class="done">Y</td>
        </tr>
        <tr>
            <td>Fingerprint Reader</td>
            <td class="done">Y</td>
            <td class="done">Y</td>
            <td class="done">P<sup>2</sup></td>
        </tr>
        <tr>
            <td>Buttons</td>
            <td class="done">Y</td>
            <td class="done">Y</td>
            <td class="done">Y</td>
        </tr>
        <tr>
            <td>Haptics</td>
            <td class="done">Y</td>
            <td class="done">Y</td>
            <td class="done">Y</td>
        </tr>
        <tr>
            <td>LEDs</td>
            <td class="done">Y</td>
            <td class="done">Y</td>
            <td class="partial">P</td>
        </tr>
</tbody></table>
</div>

#### Notes
<sup>1</sup> `R9s` & `R9sPlus` have trouble with display blanking, which cause kernel panic with ambient display.

<sup>2</sup> WiFi & Fingerprint Reader do not function during first boot.

<sup>3</sup> Feature availability depends on device variants and region. Users living in some countries (e.g. India, Australia) may face issues with calling due to restrictions on IMS/VoLTE.

<sup>4</sup> GPS takes some time to warm up. This may require further investigation.

<sup>5</sup> VOOC charging activation requires driver writing.

<sup>6</sup> Only lower resolutions work (under 5 MP). Higher resolutions causes VFE0 pixel pipelines to overflow.

<sup>7</sup> LCD display variants use the Synaptics S3320 touch IC, which is supposed to support touchscreen gestures (incl. DT2W) but do not work.

## Available downloads
### OPPO A57 (2016)
#### ROMs
* `A14` [LineageOS 21.0](https://xdaforums.com/t/rom-14-unofficial-a57-lineageos-21-for-oppo-a57.4735953/) <sup>`unofficial`</sup> <sup>`k4.9`</sup>
* `A13` [LineageOS 20.0](https://xdaforums.com/t/rom-13-unofficial-a57-lineageos-20-for-oppo-a57.4735540/) <sup>`unofficial`</sup> <sup>`k4.9`</sup>
* `A12` [LineageOS 19.1](https://xdaforums.com/t/rom-12-1-unofficial-a57-lineageos-19-1-for-oppo-a57.4677997/) <sup>`unofficial`</sup> <sup>`k3.18`</sup> <sup>`k4.9`</sup>
* `A11` [LineageOS 18.1](https://xdaforums.com/t/rom-11-0-unofficial-a57-lineageos-18-1-for-oppo-a57.4396409/) <sup>`unofficial`</sup> <sup>`k3.18`</sup> <sup>`k4.9`</sup>
* `A6` [ColorOS v3.0.0i Debloated](https://t.me/Oppoa57r9supdates/93) <sup>`k3.18`</sup>

#### Recovery
* `TWRP` [TeamWin Recovery Project](https://xdaforums.com/t/recovery-unofficial-twrp-for-oppo-a57-r9s-2016.4007685/) <sup>`unofficial`</sup> <sup>`k3.18`</sup> <sup>`k4.9`</sup>
* `OFox` [OrangeFox Recovery](https://sourceforge.net/projects/tipzbuilds/files/Recovery/OPPO%20A57/OrangeFox/) <sup>`unofficial`</sup> <sup>`k3.18`</sup> <sup>`k4.9`</sup>
* `PBRP` [PitchBlack Recovery](https://sourceforge.net/projects/tipzbuilds/files/Recovery/OPPO%20A57/PitchBlack/) <sup>`unofficial`</sup> <sup>`k3.18`</sup>

### OPPO R9s / R9sk
#### ROMs
* `A14` [LineageOS 21.0](https://xdaforums.com/t/rom-14-unofficial-r9s-lineageos-21-for-oppo-r9s-k.4772905/) <sup>`unofficial`</sup> <sup>`k4.9`</sup>

#### Recovery
* `TWRP` [TeamWin Recovery Project](https://xdaforums.com/t/recovery-unofficial-twrp-for-oppo-a57-r9s-2016.4007685/) <sup>`unofficial`</sup> <sup>`k4.9`</sup>
* `OFox` [OrangeFox Recovery](https://sourceforge.net/projects/tipzbuilds/files/Recovery/OPPO%20R9s/OrangeFox/) <sup>`unofficial`</sup> <sup>`k4.9`</sup>

### OPPO R9s Plus / F3 Plus
#### ROMs
* `A14` [LineageOS 21.0](https://xdaforums.com/t/rom-14-unofficial-r9s-lineageos-21-for-oppo-r9s-plus-f3-plus.4777207/) <sup>`unofficial`</sup> <sup>`k4.9`</sup>

#### Recovery
* `TWRP` [TeamWin Recovery Project](https://xdaforums.com/t/recovery-unofficial-twrp-for-oppo-a57-r9s-2016.4007685/) <sup>`unofficial`</sup> <sup>`k4.9`</sup>

## Building

Use the following `local_manifests.xml` to sync OPPO Thortanium projects on `lineage-21` branch:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<manifest>
  <remote name="codeberg" fetch="https://codeberg.org" revision="lineage-21" />

  <!-- Device repos -->
  <project name="TipzTeam/android_device_oppo_A57" path="device/oppo/A57" remote="codeberg" />
  <project name="TipzTeam/android_device_oppo_R9s" path="device/oppo/R9s" remote="codeberg" />
  <project name="TipzTeam/android_device_oppo_R9sPlus" path="device/oppo/R9sPlus" remote="codeberg" />
  <project name="TipzTeam/android_device_oppo_thortanium-common" path="device/oppo/thortanium-common" remote="codeberg" />
  <project name="TipzTeam/android_kernel_oppo_msm8937" path="kernel/oppo/msm8937" remote="codeberg" />
  <project name="TipzTeam/proprietary_vendor_oppo" path="vendor/oppo" remote="codeberg" />

  <!-- Dependencies -->
  <project name="LineageOS/android_hardware_oplus" path="hardware/oplus" revision="lineage-21" />
</manifest>
```

For GPL v3 compliance, we provide the kernel source for all available version with full commit history through the [Codeberg repo](https://codeberg.org/TipzTeam/android_kernel_oppo_msm8937).


## Support & Assistance
Please join the [Telegram group](https://t.me/TipzTeamCommunity) for any requests for support regarding the targets within this project.

You can also reach out through XDA Forums by posting in the designated forum posts.

## Credits
This project is developed under **Tipz Team**.

We acknowledge the **LineageOS team** for providing source codes and guidance.

Thanks to Sebastiano Barezzi (@SebaUbuntu) for his work on ASUS MSM8937 devices.

Sincere gratitude for Yumi Yukimura (@me-cafebabe) for the work on Mi8937.

Appreciation goes out to @Chippa-a for the work on the Sony Lorie platform.
