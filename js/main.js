'use strict';

const { createApp } = Vue

createApp({
    data() {
        return {
            toDoTitle: 'LISTA DELLE COSE DA FARE',
            index: '',
            toDoList: [
                {
                    text: 'Comprare la pizza',
                    done: true, 
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
                    done: true
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
        }
    }
}).mount('#app')

