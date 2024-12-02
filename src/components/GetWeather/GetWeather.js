import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";



export const GetWeather = ({city, longitude, latitude}) => {
    //const history = useHistory();
    const accuAPI = "SNyq2IywKFoGGV3d6VTDd7i36AV7TxIT";
    const visualCrossingAPI = "7ZMEN6KSKEPFA9Y25D4F5PV8N";
    const googleAPI = 'AIzaSyCZqR34N36tuWkPe0vvI6geC4IPF4QhSoQ';
    const [ipAddress, setIpAddress] = useState(null);
    const [location, setLocation] = useState(city, longitude, latitude);
    const [weatherData, setweatherData] = useState();
    //const [longitude, setLongitude] = useState(longitude);
    //const [latitude, setLatitude] = useState(latitude);

    useEffect(() => {
        console.log('location from GetWeather', city, longitude, latitude)
    },[city, longitude, latitude])

    /* useEffect(() => {
       const getIpAddress = async () => {
            const response = await axios.get('https://api.ipify.org?format=json');
            setIpAddress(response.data.ip);
        };
        getIpAddress();
    }, []);

    useEffect(() => {
        if (ipAddress !== null || undefined) {
            console.log('ip', ipAddress);
        }

    }, [ipAddress])*/

    /*useEffect(() => {
        const getLoc = async () => {
            const res = await axios.get(`https://dataservice.accuweather.com/locations/v1/cities/ipaddress?apikey=${accuAPI}&details=true`);
            setLongitude(res.data.GeoPosition.Longitude);
            setLatitude(res.data.GeoPosition.Latitude);
            setLocation(res.data);
            
            console.log('LONGITUDE', res.data.GeoPosition.Longitude)
        };
        getLoc();
    }, []);*/

    useEffect(() => {
        const getweatherDataForcast = () => {
            //const res = fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Louisville%2CKY?unitGroup=us&key=${visualCrossingAPI}&contentType=json`,
              const res = fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${latitude},${longitude}?unitGroup=us&key=${visualCrossingAPI}&contentType=json`,
                {
                    method: 'GET',
                    headers: {
                    }
                }).then(response => {
                    if (!response.ok) {
                        throw response;
                    }
                    return response.json()
                }).then(response => {
                    setweatherData(response);
                    console.log('API Running')
                })
            setweatherData(res);
            // setweatherData(res.data);
            // console.log('res header =>',res.headers);
        }
        if (location != null != undefined && longitude && latitude != undefined || null) {
            getweatherDataForcast();
        }
    }, [location]);

    useEffect(() => {
        if(location || weatherData)
        console.log('location', location);
        console.log('fifteen Day Forcast', weatherData);

    }, [weatherData])




    return{
        location,
        weatherData
    }
}