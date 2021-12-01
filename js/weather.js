const API_KEY = "d31c4bd4555b087a1f76173d3d99ca91"

function onGeoOK(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const ZooSo = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(ZooSo).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`

    });
}
function onGeoNO(){
    alert("정보를 찾을 수 없었습니다..");
}
navigator.geolocation.getCurrentPosition(onGeoOK,onGeoNO);
