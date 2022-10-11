
const adviceId = document.querySelector('#adviceId');
const quote = document.querySelector('#quote');
const dice = document.querySelector('.dice-wrapper img');

dice.addEventListener('click', () => {
    getAdvice()
        .then(data => updateUi(data))
        .catch(err => console.log(err));
})

// * API CALL
const getAdvice = async () => {
    const base = 'https://api.adviceslip.com/advice';
    
    const response = await fetch(base);
    
    const data = await response.json();

    return data
}

// * Update UI with data parameter received by any API call
const updateUi = (data) => {
    adviceId.innerHTML = data.slip.id;
    quote.innerHTML = data.slip.advice;
}