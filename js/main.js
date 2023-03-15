'use strict';

const { createApp } = Vue

createApp({
    data() {
        return {
            toDoTitle: 'LISTA DELLE COSE DA FARE',
            toDoList: [
                {
                    text: 'Comprare la pizza',
                    done: true, 
                },
                {
                    text: "guardare l'Inter",
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
        
    }
}).mount('#app')

