const url = 'https://api.openweathermap.org/data/2.5/weather?q=cognac&appid=a7da75044719ccd7ca2ee4780cb08ab0&units=metric&lang=fr';

fetch(url).then((response ) => 
response.json().then((data) => {
    console.log(data);
    document.querySelector('#city').innerHTML=data.name;
    document.querySelector('#temp').innerHTML=data.main.temp;
    document.querySelector('#humidity').innerHTML=data.main.humidity + '%';
    document.querySelector('#wind').innerHTML=data.wind.speed + 'Km/h';
})
);