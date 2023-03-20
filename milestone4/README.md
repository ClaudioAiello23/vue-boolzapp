# Boolzapp - a (not very) innovative messaging platform

## Milestone 4
Milestone 4
● Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i
contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo
“mar” rimangono solo Marco e Martina)

Svolgimento:
- fix milestone precedenti: time message nel main central; inserita data messaggio più in basso nel box message;
- fix milestone precedenti: lista contatti Aside, reso il bordo meno visibile;
- fix milestone precedenti: lista contatti Aside, rimossa l'altezza calcolata male e gestito il tutto inserendo un flex dir.column sul contenitore principale aside; in questo modo, inserendo l'overflow CSS sul box principale dei contatti, si è sistemata la barra overflow che ora si estende fino al bordo inferiore del container.
- miglioramento comportamento responsive con media query, restringimento aside container con schermo più ristretto.
- inserimento data automatica casuale in caso di invio nuovi messaggi (impostate 2 funzioni in methods VueJS per le ore e i minuti).
- Milestone4: inserimento funzione per filtrare i nomi dell'Array dei contatti, in modo da utilizzare il campo Search in maniera corretta e visualizzare soltanto i contatti che contengono le lettere digitate nel campo input. Richiamata la funzione in HTML sia nel campo Search sia nel ciclo v-for del box contatti, in modo da visualizzare solo i contatti filtrati dalle lettere digitate nel Search, e mostrare invece tutti i contatti se il campo Search viene svuotato.
- Milestone4: miglioramento funzione per filtrare i nomi dell'Array contatti nel campo Search; aggiunto il controllo che permette un confronto più preciso grazie alla funzione toLowerCase();