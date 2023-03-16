'use strict';

const { createApp } = Vue;

createApp({
    data() {
        return {
            toDoTitle: 'LISTA DELLE COSE DA FARE',
            userObj: '',
            index: '',
            // userObj: { //oggetto input utente - v-model - da verificare
            //         text: '',
            //         done: false
            // },
            toDoList: [
                {
                    text: 'Comprare la pizza',
                    done: false
                },
                {
                    text: "Guardare l'Inter",
                    done: false
                },
                {
                    text: "Bere la birra",
                    done: false
                },
                {
                    text: "Studiare Vue JS",
                    done: false
                }
            ]
        }
    },

    methods:{
        // rimozione elemento dall'Array di oggetti in base all'indice
        removeItem(index){
            this.toDoList[index];
            console.log(index);
            this.toDoList.splice(index, 1);
        },
        addItem(){
            console.log(this.userObj);
            this.toDoList.push({
                text:this.userObj, 
                done: false
            });
            this.userObj = ''; //svuota il campo input dopo aver pushato
        },
        changeBoolean(index){ //bonus2 - click su testo per barrare/non barrare il to-do
            if (this.toDoList[index].done === false) {
                this.toDoList[index].done = true;
                console.log('Il mio TO-DO è stato FATTO');
            } else {
                this.toDoList[index].done = false;
                console.log('Il mio TO-DO è DA FARE');
           } 
        //    Alternativa a if (commentata), posso impostare la chiave "done" uguale al suo contrario
        //    this.toDoList[index].done = ! this.toDoList[index].done
        }
    }
}).mount('#app')

