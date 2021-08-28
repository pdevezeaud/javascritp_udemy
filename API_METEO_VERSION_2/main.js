
/**Appel a l'API openweather avec ville en parametre de la fonction */

let apiCall = function(city) {
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a7da75044719ccd7ca2ee4780cb08ab0&units=metric&lang=fr`;

    fetch(url).then((response ) => 
response.json().then((data) => {
   
    document.querySelector('#city').innerHTML=data.name;
    document.querySelector('#temp').innerHTML= "<i class='fas fa-thermometer-half'></i>" +data.main.temp;
    document.querySelector('#humidity').innerHTML="<i class='fas fa-tint'></i>" + data.main.humidity + '%';
    document.querySelector('#wind').innerHTML="<i class='fas fa-wind'></i>"+ data.wind.speed + 'Km/h';
    })  
)
.catch((erreur) => console.log('erreur : ' + erreur));

};

/**Ecouteur d'evenement sur la soumission du fourmulaire */
document.querySelector('form').addEventListener('submit', function(e){
    // on casse l'element par défaut
    e.preventDefault();

    let ville = document.querySelector('#imputcity').value;

    /**function apicall */
    apiCall(ville);
});

apiCall('Rouen')