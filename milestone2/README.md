# Boolzapp - a (not very) innovative messaging platform

## Milestone 2
● A-Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
● B-Click sul contatto mostra la conversazione del contatto cliccato

Svolgimento:
parte A:
- identificare chi è il contatto attivo; si potrebbe identificarlo attraverso l'indice di posizionamento dell'Array
- definire una variabile di stato selectedContact con valore default uguale a zero, e con delle funzioni Methods JS eguagliare tale variabile ad un argomento "position" (index) da gestire su html per identificare tramite indice il contatto da gestire.
- identificare dalla struttura Array degli oggetti i messaggi del contatto (proprietà MESSAGE).
- lanciare un ciclo v-for che attraversi l'array dei messaggi per agganciare al contatto i relativi messaggi.
- distinguere tra messaggio ricevuto e messaggio inviato utilizzando l'informazione proprietà STATUS (verificare se impostare il tutto con condizione IF su HTML).

parte B:
- fare in modo che, cliccando sul contatto nell'Aside Bar, venga visualizzata la relativa conversazione nel main central container.
