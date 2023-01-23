function getWeather()
{
    document.getElementById("temp").innerHTML = "";
    let city = document.getElementById("city").value;
    const reqURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=309192aac20e83c3f6de6c34277fc9af";
    fetch(reqURL)
        .then(resp => resp.json())
        .then((data, a) => {
            a = data.main.temp - 273.15;
            document.getElementById("temp").innerHTML = a.toFixed(2) + "&deg";
            console.log(a);
        })
}
