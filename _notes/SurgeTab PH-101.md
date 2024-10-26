---
layout: Post
title: SurgeTab PH-101
date: 2024-10-26
format: list
---

![SurgeTab PH-101 front](/assets/img/notes/surgetab_front.jpg "Front of the device")

The **SurgeTab PH-101** is a mid-range tablet computer manufactured by WeiYan (伟彦). It was released in September 2013, with subsequent updated models unveiled on 11 November 2013 during the "爱上微笑" event.

# Specifications
<table><thead>
  <tr>
    <th>Variants</th>
    <th>Processor</th>
    <th>RAM</th>
    <th>Storage</th>
    <th>Connectivity</th>
    <th>Display</th>
    <th>Cameras</th>
    <th>Dimensions</th>
    <th>Operating system</th>
    <th>Launch Price</th>
  </tr></thead>
<tbody>
  <tr>
    <td>Basic (基础版)</td>
    <td rowspan="5">Intel Celeron N2910<br><br>(BayTrail-M)<br><br>4 * 1.6GHz</td>
    <td rowspan="2">2GB LPDDR3</td>
    <td>32GB NGFF SSD</td>
    <td rowspan="3">Realtek (WiFi 2.4GHz / BT)</td>
    <td rowspan="5">10.1" IPS LCD<br>1280x800<br>N101ICG-L21<br><br>Token 10A01-FPC-1<br>Touchscreen</td>
    <td rowspan="5">0.2MP<br>(Front &amp; Back)</td>
    <td rowspan="5">258.6 cm (W) *<br>173.3 cm (H) *<br>9.9 cm (D)</td>
    <td rowspan="5">Windows 8 &amp;<br>Android 4.2<br></td>
    <td>¥1990</td>
  </tr>
  <tr>
    <td>Upgraded (升级版)</td>
    <td rowspan="3">64GB NGFF SSD</td>
    <td>¥2290</td>
  </tr>
  <tr>
    <td>Elite (菁英版)</td>
    <td rowspan="3">4GB LPDDR3</td>
    <td>¥2490</td>
  </tr>
  <tr>
    <td>Pro (全能版)</td>
    <td rowspan="2">Realtek (WiFi 2.4GHz / BT) &amp;<br>Huawei MU736 HSPA / UMTS / GPS</td>
    <td>¥2690</td>
  </tr>
  <tr>
    <td>Extreme (奢华版)</td>
    <td>128GB NGFF SSD</td>
    <td>¥2990</td>
  </tr>
</tbody></table>

## IO
![SurgeTab PH-101 side](/assets/img/notes/surgetab_io.jpg "Side of the device, showing its ports")

The SurgeTab PH-101 came with the following ports:
- 3.5mm headphone jack
- Mini HDMI
- microUSB 3.0 (Micro-B SuperSpeed)
- 12V 2A DC
- MicroSD card slot

All devices also has a slot for inserting a full-sized SIM card.

## Design
![SurgeTab PH-101 back](/assets/img/notes/surgetab_back.jpg "Back of the device")

The device has an aluminium back with plastic mid-frame.

# Support
## Original operating system
The tablet shipped with Windows 8 and Android 4.2 originally. Some earlier revisions of this tablet came with a 32-bit BIOS and can only run 32-bit versions of these operating systems. Later versions received 64-bit support, and their BIOS are cross-compatible.

> [!note]
> The original software has been lost to time, if you have an original copy / dump of the software, please feel free to contact us for archival purposes.

## Custom operating system
The following is an exhaustive list of tested operating systems:
- **Android-x86** is a good option for those wanting a newer build of Android, but drivers for WiFi chip may need to be added manually. Latest known working is android-7.1-rc2.
- **Linux** is fully functional on this tablet, except for the lacking support for both cameras. **Arch Linux** on Linux 6.11 has been extensively tested by myself, and it a good option paired with Plasma Mobile.
- **Windows 11** works fine on this tablet, but may prove too intensive and generate too much heat that it could trigger a bugcheck and fry the WiFi chip.

> [!tip]
> The Intel BayTrail series of CPUs have an erratum for a faulty C-State (C6).
> It is best advised to disable C6 states so that you will not run into random freezes and gain the benefits of better responsiveness.
> For more, refer to [this utility](https://github.com/UnRealSKY/Intel-bay-trail-linux-cstatefix).

## Parts and repairs
- If you broke the **touchscreen** (which is very easy to do), you can grab a **10A01-FPC-A1** from Chinese shopping sites (e.g. TaoBao, Aliexpress). Once receiving it, hook up the display to your **original touch controller board** and it should function.
- If your **WiFi chip** is fried and not detected, you can desolder the original WiFi module. The WiFi module is connected via USB, so you can either salvage a module from small WiFi USB sticks or choose purpose built ones (I have personally replaced mine with a 5GHz rt8821cu).
- Upgrading the **SSDs** are possible, the device supports only **NGFF SATA SSDs** (not mSATA!).
