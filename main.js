//Attraverso l'apposita API di Boolean
//https://flynn.boolean.careers/exercises/api/random/mail
//generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

const randomEmailApi = "https://flynn.boolean.careers/exercises/api/random/mail"
 const randomEmail = []
 //selezione dom
 const ulEl = document. getElementById("email-list")
 const buttonEl = document.querySelector("button")
 const formEl = document.querySelector("form")

 for (let i = 0; i <10; i++) {
     axios.get(randomEmailApi)
         .then(response => {
             //Handle the response promise
             //console.log(response);
             //codice da eseguire in caso di successo
             const email = response.data.response
             console.log(email);
             randomEmail.push(email)
             console.log(randomEmail); 

             //stampa in pagina la lista email
             const li = document.createElement("li")
             li.textContent = email
             ulEl.appendChild(li)
             })

}
            
formEl.addEventListener('submit',(e) => {
    e.preventDefault()

    //pulisce la pagina
    ulEl.innerHTML = ""

     for (let i = 0; i <10; i++) {
        fetch(randomEmailApi)
            .then(response => response.json())
            .then (data => {
            const email = data.response
            console.log(email);
            console.log(randomEmail); 
            
            //stampa in pagina la lista email
            const li = document.createElement("li")
            li.textContent = email
            ulEl.appendChild(li)
                })
    }             
})