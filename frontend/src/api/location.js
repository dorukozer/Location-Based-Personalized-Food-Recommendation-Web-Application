import axios from "axios";
const url = 'http://127.0.0.1:8000';

export const fetchLocation = async () => {
    const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
      
    const geoApiUrl = `https://geocode.maps.co/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`;
    const response = await fetch(geoApiUrl);
    const data = await response.json();
    const d_name = data.display_name;
    const town_name = data.address["town"]
    const location = {
        town : town_name,
        disp_name : d_name,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        accuracy: position.coords.accuracy
    };  
    axios.post(`${url}/home/`,location);
    const locationString = location.disp_name.split(',').slice(1, 3).join(",");
    sessionStorage.setItem("location", true);
    sessionStorage.setItem("locdata", locationString);
    sessionStorage.setItem("dist", location.town);

    return locationString;
};
