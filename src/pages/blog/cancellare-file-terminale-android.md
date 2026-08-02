---
layout: ../../layouts/MarkdownPostLayout.astro
title: Cancellare file su Android utilizzando il terminale di un pc
description: Può tornare utile se vi è mai capitato di non poter avviare un dispositivo correttamente perchè troppo pieno
date: 2026-06-27
tags: ['software']
---

Innanzitutto, per collegare un dispositivo Android al pc e riuscire ad operare sopra ad esso ci sono due prerequisiti:

- sul pc, avere gli **Android Platform Tools** installati
- sul dispositivo Android, avere il **Debug USB** attivo

Possiamo verificare se abbiamo gli **Android Platform Tools** installati aprendo un terminale e dando il comando

```bash
adb version
```

Se riceveremo un errore, possiamo installarli tramite `winget` (il gestore di pacchetti di Windows 10/11) con l'istruzione

```bash
winget install --id Google.PlatformTools
```

e riavviando il pc (non dovrebbe essere necessario, ma a me non hanno funzionato senza).

Per verificare invece se **Debug USB** è attivo sul nostro Android, apriamo le **Opzioni Sviluppatore** nelle impostazioni dello smartphone e andiamo a cercare proprio la spunta Debug USB per vedere se è attiva.

Una volta che abbiamo tutto, colleghiamo lo smartphone al pc.
Quando ci viene chiesto su Android che tipo di collegamento vogliamo, scegliamo **Trasmissione dati**.

Ora, se da Windows facciamo

```bash
adb devices
```

dovremmo vedere l'id del nostro dispositivo collegato.

Nel mio caso volevo sapere qual'era la cartella _più pesante_ presente sul telefono, backupparla sul mio pc e poi rimuoverla dallo smartphone.

```bash
adb shell 'du -sm /sdcard/* | sort -nr | head-20'
```

mi ha restituito la lista delle cartelle in ordine di grandezza.

Dato che nel mio caso il problema era la cartella dei media di WhatsApp, prima ho lanciato

```bash
adb pull /sdcard/Android/media/com.whatsapp/WhatsApp/Media
```

per backuppare sul pc quella cartella, e poi ho usato

```bash
adb shell rm -rf /sdcard/Android/media/com.whatsapp/WhatsApp/Media/*
```

per cancellare i file stessi. Ho poi riavviato lo smartphone da terminale facendo

```bash
adb reboot
```
