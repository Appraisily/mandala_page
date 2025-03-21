# Mandala Netlify Comprehensive Test Report

Test performed: 21/3/2025, 16:56:25

## Overall Summary

- Base URL: https://mandala-new.netlify.app
- Routes tested: 9
- Devices tested: 6

## Broken Images Summary

- Total broken images found: 76
- Routes with broken images: /, /about, /terapias

## Responsive Issues Summary

No responsive issues found across all devices and routes.

## Resource Errors Summary

### Most Frequent Resource Errors

| Resource | Count | Type | Error |
|---------|-------|------|-------|
| https://www.googletagmanager.com/gtm.js?id=GTM-... | 54 | script | net::ERR_BLOCKED_BY_ORB |
| https://www.instagram.com/embed.js?username=man... | 6 | script | net::ERR_BLOCKED_BY_RESPONSE |

### Resource Errors by Type

- **script**: 60 error(s)

## Console Errors Summary

| Error | Count | Affected Routes |
|-------|-------|----------------|
| Failed to load resource: the server responded w... | 46 | /, /about, /terapias, /horarios-precios, /contacto, /noticias, /yoga/hatha-yoga, /yoga/nidra-yoga-meditacion, /yoga/yin-yoga |

## Performance Metrics

| Route | Device | Load Time | DOM Ready Time |
|-------|--------|-----------|---------------|
| / | Mobile Small | 1118ms | 1118ms |
| / | Mobile Medium | 138ms | 138ms |
| / | Mobile Large | 148ms | 148ms |
| / | Tablet | 611ms | 611ms |
| / | Desktop | 319ms | 319ms |
| / | Large Desktop | 146ms | 146ms |
| /about | Mobile Small | 134ms | 134ms |
| /about | Mobile Medium | 126ms | 125ms |
| /about | Mobile Large | 134ms | 134ms |
| /about | Tablet | 117ms | 117ms |
| /about | Desktop | 119ms | 119ms |
| /about | Large Desktop | 102ms | 102ms |
| /terapias | Mobile Small | 340ms | 340ms |
| /terapias | Mobile Medium | 119ms | 119ms |
| /terapias | Mobile Large | 134ms | 134ms |
| /terapias | Tablet | 132ms | 132ms |
| /terapias | Desktop | 164ms | 164ms |
| /terapias | Large Desktop | 121ms | 121ms |
| /horarios-precios | Mobile Small | 310ms | 310ms |
| /horarios-precios | Mobile Medium | 135ms | 135ms |
| /horarios-precios | Mobile Large | 92ms | 92ms |
| /horarios-precios | Tablet | 117ms | 117ms |
| /horarios-precios | Desktop | 121ms | 121ms |
| /horarios-precios | Large Desktop | 122ms | 122ms |
| /contacto | Mobile Small | 783ms | 783ms |
| /contacto | Mobile Medium | 340ms | 340ms |
| /contacto | Mobile Large | 321ms | 321ms |
| /contacto | Tablet | 343ms | 343ms |
| /contacto | Desktop | 104ms | 104ms |
| /contacto | Large Desktop | 347ms | 347ms |
| /noticias | Mobile Small | 901ms | 901ms |
| /noticias | Mobile Medium | 891ms | 891ms |
| /noticias | Mobile Large | 938ms | 938ms |
| /noticias | Tablet | 1360ms | 1360ms |
| /noticias | Desktop | 648ms | 648ms |
| /noticias | Large Desktop | 747ms | 747ms |
| /yoga/hatha-yoga | Mobile Small | 296ms | 296ms |
| /yoga/hatha-yoga | Mobile Medium | 120ms | 120ms |
| /yoga/hatha-yoga | Mobile Large | 116ms | 116ms |
| /yoga/hatha-yoga | Tablet | 121ms | 121ms |
| /yoga/hatha-yoga | Desktop | 123ms | 123ms |
| /yoga/hatha-yoga | Large Desktop | 102ms | 102ms |
| /yoga/nidra-yoga-meditacion | Mobile Small | 298ms | 298ms |
| /yoga/nidra-yoga-meditacion | Mobile Medium | 129ms | 129ms |
| /yoga/nidra-yoga-meditacion | Mobile Large | 122ms | 122ms |
| /yoga/nidra-yoga-meditacion | Tablet | 142ms | 142ms |
| /yoga/nidra-yoga-meditacion | Desktop | 124ms | 124ms |
| /yoga/nidra-yoga-meditacion | Large Desktop | 132ms | 132ms |
| /yoga/yin-yoga | Mobile Small | 271ms | 271ms |
| /yoga/yin-yoga | Mobile Medium | 120ms | 120ms |
| /yoga/yin-yoga | Mobile Large | 119ms | 119ms |
| /yoga/yin-yoga | Tablet | 117ms | 117ms |
| /yoga/yin-yoga | Desktop | 129ms | 129ms |
| /yoga/yin-yoga | Large Desktop | 124ms | 124ms |

## Detailed Route Analysis

### /

#### Broken Images

- https://mandala-new.netlify.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1536623975707-c4b3b2af565d%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D%26auto%3Dformat%26fit%3Dcrop%26w%3D2070%26q%3D80&w=3840&q=75 (Yoga Nidra & Meditación)
- https://mandala-new.netlify.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1600334129128-685c5582fd35%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D%26auto%3Dformat%26fit%3Dcrop%26w%3D2070%26q%3D80&w=3840&q=75 (Terapias holísticas en Mandala Ourense)
- https://mandala-new.netlify.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1544367567-0f2fcb009e0b%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D%26auto%3Dformat%26fit%3Dcrop%26w%3D1220%26q%3D80&w=3840&q=75 (Terapia ayurvédica)
- https://mandala-new.netlify.app/_next/image?url=https%3A%2F%2Frandomuser.me%2Fapi%2Fportraits%2Fwomen%2F44.jpg&w=3840&q=75 (Laura García)
- https://mandala-new.netlify.app/_next/image?url=https%3A%2F%2Frandomuser.me%2Fapi%2Fportraits%2Fmen%2F86.jpg&w=3840&q=75 (Carlos Rodríguez)
- https://mandala-new.netlify.app/_next/image?url=https%3A%2F%2Frandomuser.me%2Fapi%2Fportraits%2Fwomen%2F65.jpg&w=3840&q=75 (Marta Fernández)
- https://mandala-new.netlify.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1593810450967-f9c2004f8a69%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D%26auto%3Dformat%26fit%3Dcrop%26w%3D2070%26q%3D80&w=3840&q=75 (Yoga meditation background)

#### Screenshots

- **Mobile Small**: comprehensive-screenshots\home\Mobile_Small.png
- **Mobile Medium**: comprehensive-screenshots\home\Mobile_Medium.png
- **Mobile Large**: comprehensive-screenshots\home\Mobile_Large.png
- **Tablet**: comprehensive-screenshots\home\Tablet.png
- **Desktop**: comprehensive-screenshots\home\Desktop.png
- **Large Desktop**: comprehensive-screenshots\home\Large_Desktop.png

### /about

#### Broken Images

- https://mandala-new.netlify.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1592427242959-bbce4c6a8670%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D%26auto%3Dformat%26fit%3Dcrop%26w%3D2072%26q%3D80&w=3840&q=75 (Mandala Ourense yoga studio)
- https://mandala-new.netlify.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1594751543129-6701ad444259%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D%26auto%3Dformat%26fit%3Dcrop%26w%3D1170%26q%3D80&w=3840&q=75 (Ana García - Profesora de Hatha Yoga)
- https://mandala-new.netlify.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1611695267521-9891f56679a6%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D%26auto%3Dformat%26fit%3Dcrop%26w%3D735%26q%3D80&w=3840&q=75 (Carlos Martínez - Profesor de Daoyin Yoga)
- https://mandala-new.netlify.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1512291313931-d4291048e7b6%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D%26auto%3Dformat%26fit%3Dcrop%26w%3D1074%26q%3D80&w=3840&q=75 (Lucía Fernández - Instructora de Meditación)
- https://mandala-new.netlify.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1545205597-3d9d02c29597%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D%26auto%3Dformat%26fit%3Dcrop%26w%3D1170%26q%3D80&w=1200&q=75 (Mandala Ourense yoga studio space)

#### Screenshots

- **Mobile Small**: comprehensive-screenshots\about\Mobile_Small.png
- **Mobile Medium**: comprehensive-screenshots\about\Mobile_Medium.png
- **Mobile Large**: comprehensive-screenshots\about\Mobile_Large.png
- **Tablet**: comprehensive-screenshots\about\Tablet.png
- **Desktop**: comprehensive-screenshots\about\Desktop.png
- **Large Desktop**: comprehensive-screenshots\about\Large_Desktop.png

### /terapias

#### Broken Images

- https://mandala-new.netlify.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1598901865264-4f6405cb0fb6%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D%26auto%3Dformat%26fit%3Dcrop%26w%3D1074%26q%3D80&w=1200&q=75 (Reiki)
- https://mandala-new.netlify.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1554057009-dc20fe30502a%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D%26auto%3Dformat%26fit%3Dcrop%26w%3D1170%26q%3D80&w=1200&q=75 (Reflexología Podal)
- https://mandala-new.netlify.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1519415510236-718bdfcd89c8%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D%26auto%3Dformat%26fit%3Dcrop%26w%3D1170%26q%3D80&w=1200&q=75 (Aromaterapia)

#### Screenshots

- **Mobile Small**: comprehensive-screenshots\terapias\Mobile_Small.png
- **Mobile Medium**: comprehensive-screenshots\terapias\Mobile_Medium.png
- **Mobile Large**: comprehensive-screenshots\terapias\Mobile_Large.png
- **Tablet**: comprehensive-screenshots\terapias\Tablet.png
- **Desktop**: comprehensive-screenshots\terapias\Desktop.png
- **Large Desktop**: comprehensive-screenshots\terapias\Large_Desktop.png

### /horarios-precios

#### Screenshots

- **Mobile Small**: comprehensive-screenshots\horarios-precios\Mobile_Small.png
- **Mobile Medium**: comprehensive-screenshots\horarios-precios\Mobile_Medium.png
- **Mobile Large**: comprehensive-screenshots\horarios-precios\Mobile_Large.png
- **Tablet**: comprehensive-screenshots\horarios-precios\Tablet.png
- **Desktop**: comprehensive-screenshots\horarios-precios\Desktop.png
- **Large Desktop**: comprehensive-screenshots\horarios-precios\Large_Desktop.png

### /contacto

#### Screenshots

- **Mobile Small**: comprehensive-screenshots\contacto\Mobile_Small.png
- **Mobile Medium**: comprehensive-screenshots\contacto\Mobile_Medium.png
- **Mobile Large**: comprehensive-screenshots\contacto\Mobile_Large.png
- **Tablet**: comprehensive-screenshots\contacto\Tablet.png
- **Desktop**: comprehensive-screenshots\contacto\Desktop.png
- **Large Desktop**: comprehensive-screenshots\contacto\Large_Desktop.png

### /noticias

#### Screenshots

- **Mobile Small**: comprehensive-screenshots\noticias\Mobile_Small.png
- **Mobile Medium**: comprehensive-screenshots\noticias\Mobile_Medium.png
- **Mobile Large**: comprehensive-screenshots\noticias\Mobile_Large.png
- **Tablet**: comprehensive-screenshots\noticias\Tablet.png
- **Desktop**: comprehensive-screenshots\noticias\Desktop.png
- **Large Desktop**: comprehensive-screenshots\noticias\Large_Desktop.png

### /yoga/hatha-yoga

#### Screenshots

- **Mobile Small**: comprehensive-screenshots\hatha-yoga\Mobile_Small.png
- **Mobile Medium**: comprehensive-screenshots\hatha-yoga\Mobile_Medium.png
- **Mobile Large**: comprehensive-screenshots\hatha-yoga\Mobile_Large.png
- **Tablet**: comprehensive-screenshots\hatha-yoga\Tablet.png
- **Desktop**: comprehensive-screenshots\hatha-yoga\Desktop.png
- **Large Desktop**: comprehensive-screenshots\hatha-yoga\Large_Desktop.png

### /yoga/nidra-yoga-meditacion

#### Screenshots

- **Mobile Small**: comprehensive-screenshots\nidra-yoga\Mobile_Small.png
- **Mobile Medium**: comprehensive-screenshots\nidra-yoga\Mobile_Medium.png
- **Mobile Large**: comprehensive-screenshots\nidra-yoga\Mobile_Large.png
- **Tablet**: comprehensive-screenshots\nidra-yoga\Tablet.png
- **Desktop**: comprehensive-screenshots\nidra-yoga\Desktop.png
- **Large Desktop**: comprehensive-screenshots\nidra-yoga\Large_Desktop.png

### /yoga/yin-yoga

#### Screenshots

- **Mobile Small**: comprehensive-screenshots\yin-yoga\Mobile_Small.png
- **Mobile Medium**: comprehensive-screenshots\yin-yoga\Mobile_Medium.png
- **Mobile Large**: comprehensive-screenshots\yin-yoga\Mobile_Large.png
- **Tablet**: comprehensive-screenshots\yin-yoga\Tablet.png
- **Desktop**: comprehensive-screenshots\yin-yoga\Desktop.png
- **Large Desktop**: comprehensive-screenshots\yin-yoga\Large_Desktop.png

