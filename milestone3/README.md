# Boolzapp - a (not very) innovative messaging platform

## Milestone 3
● A- Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando
“enter” il testo viene aggiunto al thread sopra, come messaggio verde
● B- Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà
un “ok” come risposta, che apparirà dopo 1 secondo.

Svolgimento:
parte A:
- inserimento messaggio dal campo input ('scrivi un messaggio'); il messaggio deve essere un oggetto che contiene la data messaggio, il testo del messaggio e lo status "sent" (in quanto è inviato dall'utente che usa l'applicativo); l'idea è di inizializzare una variabile vuota 'newSentMessage' (che rappresenta il valore della proprietà "message" dell'oggetto); da richiamare in una funzione che ha il compito di pushare l'oggetto aggiungendolo all'Array messaggi dell'interlocutore;
- per inviare il messaggio dal DOM si dovrà premere il tasto INVIO, pertanto andrà impostato l'invio con un evento keyup.enter nel campo input html.

parte B:
- si dovrà impostare una funzione di tipo Timeout (probabilmente da impostare in un ciclo di vita "mounted" sul file JS-Vuejs) che, 1 secondo dopo aver inviato il messaggio, faccia apparire una risposta (status "received") con testo "ok".
