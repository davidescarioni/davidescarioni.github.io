---
title: Installare ChromeOS Flex su un vecchio Celeron
description:
date: 2025-09-19
tags: ["tech"]
---

.. è assolutamente fattibile, e oserei dire che ne vale la pena.

## Premessa

Il notebook di mia madre (HP Stream 14, pc portatile con Intel Celeron N3060, 4GB di RAM, 32 GB di EMMC) non è mai stato un fulmine, ma considerando che il suo utilizzo è sempre stato quello di poter effettuare ricerche sul web,la consultazione della posta elettronica e la scrittura di qualche documento Word, non mi sembrava un cattivo prodotto quando glie l'ho regalato.
Ovviamente, con il senno di poi, quei 32 GB sono stati un collo di bottiglia incredibile: nonostante tutti i documenti fossero su archiviazione esterna, anche i soli aggiornamenti di Windows 10 non riuscivano a stare in quello spazio, e questo ha fatto sì che il pc ultimamente era inutilizzabile e lento, perchè Windows insisteva costantemente a scaricare aggiornamenti riempiendo lo spazio disponibile che si trovava a disposizione.
Dato che Windows 10 diventerà obsoleto tra poco più di un mese ho preso la palla al balzo e ho deciso di formattarlo.

Avevo due scelte davanti:

- installare una distribuzione linux *leggera*
- installare ChromeOS

La prima idea mi è sempre sembrata la più papabile, ma mi rendo conto che, non avendo un pc con Linux a casa, ogni tentativo di aiuto da remoto a mia madre sarebbe stato difficile.
Chrome OS invece mi ha dato un'ottima impressione dopo aver regalato un Chromebook a mio padre, che è stato contento dal primo giorno in cui l'ha avviato e mi dice ancora oggi che *gli ho regalato un Ferrari*, nonostante sia comunque un entry level (Samsung Chromebook 14).
Ho quindi optato per la scelta di Chrome OS in versione "Flex", che per chi non lo sapesse è la versione installabile da tutti sui propri pc con la limitazione di non poter usare le app Android ma solo la parte web e, eventualmente, il terminale linux.

## Prepararsi all'installazione

Per creare il supporto di installazione ci vuole una chiavetta usb da almeno 8gb veri (nel senso che la classica chiavetta usb da 8gb che il sistema rileva da 7,xx GB non va bene). Nel caso rientraste nel caso descritto tra parentesi andate al paragrafo [#workaround](#workaround).
Serve poi il browser Chrome (ma credo vada bene qualsiasi a base Chromium anche se non ho provato) nel quale installare l'estensione [Utilità ripristino Chromebook](https://chromewebstore.google.com/detail/chromebook-recovery-utili/pocpnlppkickgojjlmhdmidojbmbodfm).

Una volta installata, basta seguire le indicazioni e fare un *avanti avanti avanti*. L'unico step nel quale fare attenzione è quello di selezione del modello del pc dove, anzichè scegliere effettivamente il modello posseduto, va scelta la voce **Chrome OS Flex**.

### Workaround

Come dicevo prima, il software per creare la chiavetta di installazione è molto pignolo sul numero di GB. Se, come me, avete a disposizione solo una chiavetta da 8gb, installate il sistema tramite Rufus usando l'[iso del sistema più recente](https://dl.google.com/chromeos-flex/images/latest.bin.zip) (la url scarica sempre l'ultima versione disponibile, l'ho trovata in documentazione)

## Installazione

Il mio portatile aveva già la lettura da USB come primaria, quindi mi è bastato accendere il notebook con la chiavetta inserita per cominciare l'installazione. Se non è così sul vostro, potete premere un tasto per accedere alla scelta del disco da cui far partire il sistema (anche qui in [documentazione](https://support.google.com/chromeosflex/answer/11552352?sjid=12499755134570041330-EU#boot&zippy=%2Cchiavi-di-avvio), alla voce *Chiavi di avvio*"* trovate il pulsante da premere in base al marchio.

Una volta partito l'installer vi verrà chiesto se volete provare il sistema oppure cancellare completamente il disco e installare Chome OS Flex (non si può fare dual boot). L'opzione per provare il sistema a me non ha funzionato, così ho installato alla cieca. Il processo è veloce e non chiede praticamente altro per andare dall'inzio alla fine.

## Avvio del sistema

Niente, come dicevo il processo è molto veloce e l'OS è partito senza nessun problema di driver o simili.
Il sistema è più reattivo di prima: non è mai un fulmine, ma adesso accendere il pc per andare su una pagina web e navigarla è un'esperienza decisamente più piacevole.

Ora restituisco il portatile a mia madre dopo averlo provato sporadicamente per circa un'ora, aggiornerò l'articolo con un feedback se fosse necessario.
