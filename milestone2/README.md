# Boolzapp - a (not very) innovative messaging platform

## Milestone 2
● A-Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i
messaggi relativi al contatto attivo all’interno del pannello della conversazione
● B-Click sul contatto mostra la conversazione del contatto cliccato

Svolgimento:
parte A:
- identificare dalla struttura Array degli oggetti i messaggi del contatto (proprietà MESSAGE).
- lanciare un ciclo v-for che attraversi l'array per agganciare al contatto i relativi messaggi.
- distinguere tra messaggio ricevuto e messaggio inviato a utilizzando l'informazione proprietà STATUS.
- identificare chi è il contatto attivo; si potrebbe identificarlo attraverso l'indice di posizionamento dell'Array.

parte B:
- fare in modo che, cliccando sul contatto nell'Aside Bar, venga visualizzata la conversazione nel main central container.
