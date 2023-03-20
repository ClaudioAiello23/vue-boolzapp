'use strict';

/*Salvare in una variabile locale la funzione createApp, presa 
dalla variabile globale Vue; createApp è come un valore
destrutturato di Vue*/
const { createApp } = Vue;

/*Inizializzare un'istanza dell'applicazione Vue, invocando 
la funzione createApp*/
createApp({
    data() {
        return {
            selectedContact: 0,
            newSentMessage: '',
            searchLetter: '',
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: 'img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]
        }
    },
    
    methods:{
        /*Funzione newTimeMex che dichiara la variabile Data() di JS, e
        crea nuova variabile 'time' che estrapola l'ora e i minuti; funzione
        utilizzata per mostrare l'orario corrente di invio di un nuovo
        messaggio. Richiamata nelle successive funzioni addMessage/addReceived*/
        newTimeMex() {
            let data = new Date();
            let time;
            time = data.getHours() + ":" + data.getMinutes();
            return time;
        },

        /*Funzione searchContacts che, se il campo di ricerca contatti non contiene lettere,
        mostra l'array di partenza 'contacts'; in caso di inserimento lettere nel campo 
        Search viene creato dall'array 'contacts' un array "filtrato" che mostra nell'elenco
        contatti dell'Aside solo quelli che includono le lettere digitate nel nome dell'elemento
        dell'Array. La funzione è stata poi richiamata nell'input SEARCH in HTML (con le istruzioni
        @keyup e v-model per l'individuazione delle lettere digitate); in più la funzione è stata
        richiamata in HTML nel box dei contatti all'interno dell'istruzione v-for (in caso non 
        vengano digitate lettere nel campo Search, verranno ciclati e mostrati tutti i contatti 
        dell'array principale). NB nel primo return è stata aggiunta una funzione utile per il 
        confronto, chiamata 'toLowerCase(); questa funzione "traduce" in minuscolo tutte le lettere
        dei contatti e tutte le lettere digitate nel campo search, per un confronto più preciso ( che
        funziona a prescindere che si digiti in maiuscolo o in minuscolo)*/
        searchContacts() {
            if (this.searchLetter !== '') {
                return this.contacts.filter(element => element.name.toLowerCase().includes(this.searchLetter.toLowerCase()));

            } else {
                return this.contacts;
            } 
        },

        /*Funzione isSelected che identifica un argomento "position" uguale alla
        variabile selectedContact (che di base è uguale a zero); in questo caso
        viene restituito il valore "is_selected" che corrisponde ad una
        classe CSS (sfondo grigio); richiamando la funzione isSelected
        sul contact_box aside Bar HTML, il contatto selezionato acquisirà
        la classe CSS restituita e avrà uno sfondo diverso.*/
        isSelected(position) {
            if (position === this.selectedContact) {
                return 'is_selected';
            }
        },

        /*Funzione activeContact che cerca la posizione del contatto selezionata; 
        si può applicare al click su un contatto AsideBar per far apparire il
        corrispondente contatto nel main central*/
        activeContact (position) {
            this.selectedContact = position;
        },

        /*Funzione addMessage che seleziona l'array dei messaggi e aggiunge
        un oggetto "messaggio" all'Array dell'interlocutore; la funzione viene
        poi richiamata in html nel campo input messaggio del central Footer e 
        si attiva alla pressione del tasto Enter per l'invio di un messaggio
        alla conversazione; nel campo input aggiungere anche il v-model per 
        replicare il testo digitato e trasmetterlo come messaggio. */
        addMessage(){
            this.contacts[this.selectedContact].messages.push(
                {
                    date: this.newTimeMex(),
                    message: this.newSentMessage,
                    status: 'sent'
                });
            this.newSentMessage = '';
        },

        /*Funzione addReceived che, come addMessage, aggancia un nuovo 
        oggetto "messaggio" all'Array messaggi dell'utente, in status
        "received"; impostato un tempo di 1 secondo; richiamata questa 
        funzione sempre dal campo input "scrivi messaggio"; quando
        il mittente scrive un messaggio e preme ENTER, dopo 1 secondo
        apparirà la risposta 'ok' impostata dalla seguente funzione*/
        addReceived(){
            setTimeout(() => {
                this.contacts[this.selectedContact].messages.push(
                    {
                        date: this.newTimeMex(),
                        message: 'ok',
                        status: 'received'
                    });
            },  1000);
        }  
    } 
}).mount('#app')

