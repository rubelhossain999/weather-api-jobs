const api_key = `e6a838158c8db74ef8f2cc8a81e9b224`;

const getWeathenAPI = weatherAPI => {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${weatherAPI}&appid=${api_key}&units=metric`;
    fetch(apiURL)
    .then( weather => weather.json())
    .then( weatherdata => getWeathenAPIID(weatherdata))
}

const getWeathenAPIID = data => {
    const tempID = document.getElementById('temparature');
    tempID.innerText = data.main.temp;
}

document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    const searchResult = searchField.value;

    searchField.value = "";

    const cityList = document.getElementById('city-list');
    cityList.innerText = searchResult;

    getWeathenAPI(searchResult);
})

getWeathenAPI('Dhaka');