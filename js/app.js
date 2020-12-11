document.addEventListener('DOMContentLoader', function(event){

    const sw = "Service Worker"
    
    document.getElementById('bot-result').innerHTML = search(sw)
   

});


const search =  async  function(tag){
    const url=`https://www.google.com/search?q=${tag}`
    
    const retorno = await fetch(url)
   
    return retorno 
}