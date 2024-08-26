// Elements
const imgHidden = document.querySelector('.text');
const textHidden = document.querySelector('.img');
const successCard = document.querySelector('.success-card');
const btnStart = document.getElementById('btn')
const btnEnd = document.getElementById('btn-dismiss');
const inputEmail = document.getElementById('email');
const errorMessage = document.getElementById('error-message');
const form = document.getElementById('form');
const defaultEmail = 'email@company.com';

    inputEmail.addEventListener('focus', function() {
        

        if (this.value === defaultEmail) {
            this.value = '';
        }
    });

    inputEmail.addEventListener('blur', function() {
        if (this.value === '') {
            this.value = defaultEmail;
        }
    });

    inputEmail.addEventListener('input',function(){
        if(!this.checkValidity()){
            errorMessage.textContent = 'Valid Email Required';
            inputEmail.style.color = 'hsl(4, 100%, 67%)';
            inputEmail.style.borderColor =  'hsl(4, 100%, 67%)';
        }
        else{
            errorMessage.textContent = '';
            inputEmail.style.color = '';
            inputEmail.style.borderColor = '';

        }
    });

    btnStart.addEventListener('click',function(e){
        if(!inputEmail.checkValidity() || inputEmail.value === defaultEmail){
            alert('Incorrect email format!');
        }else{
            imgHidden.classList.add('hidden');
            textHidden.classList.add('hidden');
            successCard.classList.remove('card-hidden');
        }
    })

    btnEnd.addEventListener('click',()=>{
        imgHidden.classList.remove('hidden');
        textHidden.classList.remove('hidden');
        successCard.classList.add('card-hidden');
    })