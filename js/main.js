'use strict';

const { createApp } = Vue

createApp({
    data() {
        return {
            toDoTitle: 'LISTA DELLE COSE DA FARE',
            toDoList: [
                {
                    text: 'Comprare la pizza',
                    done: false
                },
                {
                    text: "guardare l'Inter",
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
    }
}).mount('#app')

console.log(createApp)