# Boolzapp - a (not very) innovative messaging platform

## Milestone 3
● A- Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando
“enter” il testo viene aggiunto al thread sopra, come messaggio verde
● B- Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà
un “ok” come risposta, che apparirà dopo 1 secondo.

Svolgimento:
parte A:
- prova di inserimento messaggio; il messaggio deve essere un oggetto che contiene la data messaggio, il testo del messaggio e lo status "sent" in quanto è inviato dall'utente che usa l'applicativo; l'oggetto deve essere inserito con una funzione nell'Array dei messaggi dell'utente selezionato. 
- per inviare il messaggio si dovrà premere il tasto INVIO, pertanto andrà impostato l'invio con un evento keyup.enterm da html.

parte B:
- si dovrà impostare una funzione di tipo Timeout (probabilmente da impostare in un ciclo di vita "mounted" sul file JS-Vuejs) che, 1 secondo dopo aver inviato il messaggio, faccia apparire una risposta (status "received") con testo "ok".
