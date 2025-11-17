---
title: Migrare i dischi di un NAS ad un altro modello
description:
date: 2025-11-17
tags: ["software"]
---

##  Premessa

Ho riacquistato un NAS [Ugreen DXP2800](https://nas-eu.ugreen.com/en-it/products/ugreen-nasync-dxp2800-nas-storage?from=mega-menu) dopo che lo scorso si era rotto a seguito di un temporale.

Il mio dubbio al riacquisto è stato se fosse possibile portare i dati da uno all'altro "nativamente", ed effettivamente così è stato

##  Migrare i dischi

Come indicatomi nel [thread che ho aperto su Reddit](https://www.reddit.com/r/UgreenNASync/comments/1oovk2g/ugreen_dxp2800_nas_doesnt_recognize_old_raid/) dall'assistenza stessa, il processo è molto semplice:

- inserire i dischi nel nuovo NAS
- all'accensione, quando viene suggerito di creare un nuovo Pool, declinare
- Aprire l'app "Storage" .
- Fare clic su "Hard Drive" > "HDD/SDD" e individuare le unità migrate dal vecchio NAS.
- Fare clic sul pulsante "···" accanto all'unità di destinazione e selezionare "Usa"
- Nella pagina "Usa disco rigido", seleziona "Memoria interna"
- Qui compare un messaggio di cui non ricordo il contenuto, ma dice che l'operazione è irreversibile. Accettare

Una volta completata l'operazione, tutti i nostri vecchi file saranno tornati a nostra disposizione. Notare che le applicazioni installate e i Docker invece andranno riconfigurati da zero.

Devo capire se c'è una soluzione per backuppare l'intero NAS, così da non dover riconfigurare tutto la prossima volta nella quale qualcosa va storto
