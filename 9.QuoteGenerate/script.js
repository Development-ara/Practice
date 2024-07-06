function generateQuote(){
    fetch('http://api.quotable.io/random')
    .then(response => response.json())
    .then(data =>{
        const quote =`${data.content} - ${data.author}`;
        document.getElementById('quote').innerText = quote;
    })
    .catch(errorHandler)

.catch(error =>{getElementById('quote').innerText = 'something is wrong with server! try again later'

});
};
generateQuote();