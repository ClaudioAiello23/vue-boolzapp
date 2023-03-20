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