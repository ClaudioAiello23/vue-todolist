Esercizio: Vue To Do List
nome repo: vue-todolist

DESCRIZIONE:
Rifare l’esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all’interno di una lista HTML un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
BONUS
1.oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2.cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
----------------------------------------------------------------
ESERCIZIO - SVOLGIMENTO (Ipotesi)
- Creare da file JS array di oggetti ToDo di prova (lista già definita), e configurare il relativo Html e Css per la visualizzazione base. Nell'oggetto inserire le proprietà TEXT (stringa) e TODO-DONE (valore booleano).
-MILESTONE1: stampare la lista di partenza su Html e sbarrare il valore di text nel caso il valore di TODO-DONE sia settato su TRUE. Inserita la condizione IF sull'elemento LI dell'html; nella condizione IF impostata la classe "done" che imposta il testo sbarrato.
-MILESTONE2: impostare una X in html con font Awesome di fianco ad ogni elemento della toDoList; fare in modo che al click sulla X l'intero elemento cliccato scompaia. Inserita in JS una funzione split per eliminare dall'array l'elemento selezionato. Richiamata la funzione sul click sulla X in html.