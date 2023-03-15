'use strict';

const { createApp } = Vue

createApp({
    data() {
        return {
            toDoTitle: 'LISTA DELLE COSE DA FARE',
            index: '',
            userToDo: { //da verificare
                    text: '',
                    done: false
            },
            toDoList: [
                {
                    text: 'Comprare la pizza',
                    done: true
                },
                {
                    text: "Guardare l'Inter",
                    done: false
                },
                {
                    text: "Bere la birra",
                    done: true
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
        addItem(){ //da verificare
            console.log(this.userToDo);
            (this.toDoList).push(this.userToDo);
            console.log(this.toDoList)
        }
    }
}).mount('#app')

