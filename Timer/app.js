let btn = document.querySelector('button');

let interval;
let secondes = 10;


btn.addEventListener('click', start);

function decompte(){
    secondes --;
    if(secondes == 0){
        stop();
    }else
    {
        document.body.innerHTML += secondes + '<br>';
    }

}

function start(){
    interval = setInterval(decompte,1000);
   
}

function stop(){
    clearInterval(interval);
    document.body.innerHTML += 'stop !!';
}


