---
title: Rimuovere le barre nere dagli screenshot di Steam Deck
description: Risolviamo il problema con uno script.
date: 2026-03-18
tags: ["software"]
---

Quando si fanno **screenshot** da Steam Deck, spesso è possibile che questi presentino delle barre nere sopra e sotto all'immagine: questo è dovuto al fatto che molti giochi sono ottimizzati per schermi 16:9, mentre la nostra console/pc ne ha uno in 16:10.

Per risolvere ho usato un software da riga di comando, [ImageMagick](https://imagemagick.org/): è uno strumento per la manipolazione di immagini via CLI molto potente, quindi vi invito ad esplorarlo se avete anche problemi diversi oltre al ritaglio di immagini.

Lo script che riporto crea una cartella *cropped* e copia lì dentro le immagini **tagliate**, giusto per non perdere gli originali in caso di errore.
Le immagini saranno a risoluzione 1280x720, a partire da 40px verticali (la dimensione della barra nera in alto).

```BASH
mkdir cropped
magick *.jpeg -crop 1280x720+0+40 +repage cropped/%d.jpeg
```