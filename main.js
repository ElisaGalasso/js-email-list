//Attraverso l'apposita API di Boolean
//https://flynn.boolean.careers/exercises/api/random/mail
//generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

const randomEmailApi = "https://flynn.boolean.careers/exercises/api/random/mail"
 const randomEmail = []

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
             })
 }
