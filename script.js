let shareButton = document.getElementById('btn');

shareButton.addEventListener('click', function(){
    if(navigator.share){
        navigator.share({
            url:'https://github.com/mdjasimuddim/Aynchronous-callback-promise-async-and-await'
        }).then(function(){
            console.log('Thanks for sharing and click');
        }).catch(function(err){
            console.log('Error 404');
        })
    }else{
        console.log('Can not support');
    }
})

