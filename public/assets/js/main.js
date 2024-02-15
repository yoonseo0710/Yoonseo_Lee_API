let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let cityRef = document.getElementById("city");

//Function to fetch weather details from API and display them
let getWeather = () => {
    let city = cityRef.value;

    //If input field is empty
    if(city.length == 0) {
        result.innerHTML = `<h3 class="msg">Please enter a city name</h3>`;
    }
    
    //If input field in NOT empty
    else{
        let url = `https://api.weatherapi.com/v1/current.json?key=0249468191004965b52172042241402&q=${city}`;
        fetch(url)
            .then((resp) => resp.json())

            //If city name is valid
            .then((data) => {
                console.log( data );
                console.log( data.location.lat );
                console.log( data.location.lon );
                console.log( data.location.name );
                console.log( data.location.region );
                console.log( data.current.temp_c );
                console.log( data.current.feelslike_c );  
                console.log( data.current.vis_km );

                result.innerHTML = `
                <h2>${data.location.name}</h2>
                <h4 class="weather">Latitude , Longtitude : ${data.location.lat} , ${data.location.lon} </h4>
                <p><img src="${data.current.condition.icon}" alt="${data.current.condition.text}" /> ${data.current.condition.text}</p>
                <h1>${data.current.temp_c} &#176;</h1>
                <div class="temp-container">
                    <div>
                    <h4 class="title">Feelslike</h4>
                    <h4 class="temp">${data.current.feelslike_c}</h4>
                    </div>

                    <div>
                    <h4 class="title">Visibility</h4>
                    <h4 class="temp">${data.current.vis_km}</h4>
                    </div>
                </div>`;
            })

            //If city name is NOT valid
            .catch(( )=> {
                result.innerHTML = `<h3 class="msg"> City not found</h3>`;
            });
    }
};
    

searchBtn.addEventListener("click", getWeather);
window.addEventListener("load", getWeather);