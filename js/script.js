console.log('funziona');

const authorized_emails = ['123', 'dapipposipappa@libero.it', 'cicciopasticcio@gmail.com', 'asdrubale245ac@virgilio.it', 'johndoe@yahoo.com', 'celafaremo69@aruba.com'];

const log_in = prompt('Inserisci la tua email');


for (let i = 0; i < authorized_emails.length; i++){
    const single_email = authorized_emails[i];
    
    if (log_in == single_email){

        document.querySelector('body').classList.add('bg-warning-subtle');
        document.querySelector('.container').classList.remove('d-none');

        console.log('entrato');
    }  
    
    //console.log(single_email);

}

const lanciaDadi = document.querySelector('button');

        lanciaDadi.addEventListener('click', function(){

            const dado = document.getElementById('dices').value;
            const userScore = document.getElementById('userScore');
            const pcScore = document.getElementById('pcScore');
            const verdetto = document.getElementById('verdetto');

            if (dado == 'd4'){

                const randomUser4 = Math.floor(Math.random() * 4) + 1;
                const randomPc4 = Math.floor(Math.random() * 4) + 1;
                userScore.innerHTML = `${randomUser4}`;
                pcScore.innerHTML = `${randomPc4}`;

                    if (randomUser4 > randomPc4){

                        verdetto.innerHTML = `<h1 class = 'text-success'>Hai vinto!</h1>`;

                    } else if (randomUser4 < randomPc4){

                        verdetto.innerHTML = `<h1 class = 'text-danger'>Hai perso!</h1>`;

                    } else {
                        
                        verdetto.innerHTML = `<h1 class = 'text-warning'>Pareggio!</h1>`;
                    }
                
            } else if (dado == 'd6'){

                const randomUser6 = Math.floor(Math.random() * 6) + 1;
                const randomPc6 = Math.floor(Math.random() * 6) + 1;
                userScore.innerHTML = `${randomUser6}`;
                pcScore.innerHTML = `${randomPc6}`;

                if (randomUser6 > randomPc6){

                    verdetto.innerHTML = `<h1 class = 'text-success'>Hai vinto!</h1>`;

                } else if (randomUser6 < randomPc6){

                    verdetto.innerHTML = `<h1 class = 'text-danger'>Hai perso!</h1>`;

                } else {
                    
                    verdetto.innerHTML = `<h1 class = 'text-warning'>Pareggio!</h1>`;
                        
                }
                
            } else if (dado == 'd8'){

                const randomUser8 = Math.floor(Math.random() * 8) + 1;
                const randomPc8 = Math.floor(Math.random() * 8) + 1;
                userScore.innerHTML = `${randomUser8}`;
                pcScore.innerHTML = `${randomPc8}`;

                if (randomUser8 > randomPc8){

                    verdetto.innerHTML = `<h1 class = 'text-success'>Hai vinto!</h1>`;

                } else if (randomUser8 < randomPc8){

                    verdetto.innerHTML = `<h1 class = 'text-danger'>Hai perso!</h1>`;

                } else {
                    
                    verdetto.innerHTML = `<h1 class = 'text-warning'>Pareggio!</h1>`;
                        
                }

            } else if (dado == 'd10'){

                const randomUser10 = Math.floor(Math.random() * 10) + 1;
                const randomPc10 = Math.floor(Math.random() * 10) + 1;
                userScore.innerHTML = `${randomUser10}`;
                pcScore.innerHTML = `${randomPc10}`;

                if (randomUser10 > randomPc10){

                    verdetto.innerHTML = `<h1 class = 'text-success'>Hai vinto!</h1>`;

                } else if (randomUser10 < randomPc10){

                    verdetto.innerHTML = `<h1 class = 'text-danger'>Hai perso!</h1>`;

                } else {
                    
                    verdetto.innerHTML = `<h1 class = 'text-warning'>Pareggio!</h1>`;
                        
                }

            } else if (dado == 'd12'){

                const randomUser12 = Math.floor(Math.random() * 12) + 1;
                const randomPc12 = Math.floor(Math.random() * 12) + 1;
                userScore.innerHTML = `${randomUser12}`;
                pcScore.innerHTML = `${randomPc12}`;

                if (randomUser12 > randomPc12){

                    verdetto.innerHTML = `<h1 class = 'text-success'>Hai vinto!</h1>`;

                } else if (randomUser12 < randomPc12){

                    verdetto.innerHTML = `<h1 class = 'text-danger'>Hai perso!</h1>`;

                } else {
                    
                    verdetto.innerHTML = `<h1 class = 'text-warning'>Pareggio!</h1>`;
                        
                }

            } else if (dado == 'd20'){

                const randomUser20 = Math.floor(Math.random() * 20) + 1;
                const randomPc20 = Math.floor(Math.random() * 20) + 1;
                userScore.innerHTML = `${randomUser20}`;
                pcScore.innerHTML = `${randomPc20}`;

                if (randomUser20 > randomPc20){

                    verdetto.innerHTML = `<h1 class = 'text-success'>Hai vinto!</h1>`;

                } else if (randomUser20 < randomPc20){

                    verdetto.innerHTML = `<h1 class = 'text-danger'>Hai perso!</h1>`;

                } else {
                    
                    verdetto.innerHTML = `<h1 class = 'text-warning'>Pareggio!</h1>`;
                        
                }

            } else {

                userScore.innerHTML = "Errore";
                pcScore.innerHTML = "Errore";

            }

        })