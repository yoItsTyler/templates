import axios from 'axios';
import styles from './styles.module.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { GetTime } from '../GetTime';
import { GetWeather } from '../GetWeather';

import Icon from '@mdi/react';
import { mdiCloud, mdiFlaskEmptyOutline, mdiWeatherFog, mdiWeatherLightningRainy, mdiWeatherNight, mdiWeatherNightPartlyCloudy, mdiWeatherPartlyCloudy, mdiWeatherPartlyRainy, mdiWeatherPartlySnowy, mdiWeatherPouring, mdiWeatherRainy, mdiWeatherSnowy, mdiWeatherSunny, mdiWeatherSunsetDown, mdiWeatherSunsetUp, mdiWeatherWindy } from '@mdi/js';
import { Chart, CategoryScale, LinearScale, ArcElement, Tooltip, Legend, PointElement, plugins } from "chart.js";
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { Navbar } from '../Navbar/Navbar';
import { color } from 'chart.js/helpers';
import sun from '../images/sunImg.png';
import rain from '../images/rain.png';
export const Home = () => {
    const visualCrossingAPI = "7ZMEN6KSKEPFA9Y25D4F5PV8N";
    const icons = {
        "partly-cloudy-day": mdiWeatherPartlyCloudy,
        "partly-cloudy-night": mdiWeatherNightPartlyCloudy,
        "cloudy": mdiCloud,
        "clear-day": mdiWeatherSunny,
        "clear-night": mdiWeatherNight,
        "snow": mdiWeatherSnowy,
        "snow-showers-day": mdiWeatherPartlySnowy,
        "snow-showers-night": mdiWeatherSnowy,
        "thunder-rain": mdiWeatherLightningRainy,
        "thunder-showers-day": mdiWeatherLightningRainy,
        "thunder-showers-night": mdiWeatherLightningRainy,
        "rain": mdiWeatherPouring,
        "showers-day": mdiWeatherPartlyRainy,
        "showers-night": mdiWeatherRainy,
        "fog": mdiWeatherFog,
        "wind": mdiWeatherWindy,
    }
    const googleIcons = {
        "partly-cloudy-day": "partly_cloudy_day",
        "partly-cloudy-night": "bedtime",
        "cloudy": "cloudy",
        "clear-day": "sunny",
        "clear-night": "bedtime",
        "snow": "ac_unit",
        "snow-showers-day": "cloudy_snowing",
        "snow-showers-night": "cloudy_snowing",
        "thunder-rain": "thunderstorm",
        "thunder-showers-day": "thunderstorm",
        "thunder-showers-night": "thunderstorm",
        "rain": "rainy_heavy",
        "showers-day": "rainy_light",
        "showers-night": "rainy_light",
        "fog": "mist",
        "wind": "air",
    };
    const time = GetTime().showTime;
    const date = GetTime().date;
    const [locationData, setLocationData] = useState(null);
    const location = GetWeather({ locationData });
    const [city, setCity] = useState();
    const [state, setState] = useState();
    //const { weatherData } = GetWeather({ locationData });
    const [weatherData, setWeatherData] = useState(null);
    const currentIcon = weatherData?.currentConditions?.icon;

    const [isLoading, setIsLoading] = useState(true);
    const [darkMode, setDarkmode] = useState(true);///////////////////////////////

    const handleLocationChange = (newLocationData) => {
        console.log('newLocationData from Home.js', newLocationData);
        if (newLocationData) {
            setLocationData(newLocationData);
            console.log('setLocationData success:', newLocationData)
        }
    }
    const getweatherDataForcast = () => {

        const res = fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationData.latitude},${locationData.longitude}?unitGroup=us&key=${visualCrossingAPI}&contentType=json`,
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
                setWeatherData(response);
                console.log('API Running')
            })
        setWeatherData(res);
        // setweatherData(res.data);
        // console.log('res header =>',res.headers);
    }

    useEffect(() => {
        if (weatherData == null || undefined) {
            return;
        }
        setIsLoading(false)
    }, [weatherData]);

    // Call GetWeather function to fetch weather data based on locationData
    useEffect(() => {
        if (locationData?.latitude && locationData?.longitude) {
            getweatherDataForcast();
            console.log('useEffect2 locationData DID run getweatherDataForcast')
        }
        console.log('useEffect2 locationData did not run getweatherDataForcast')
    }, [locationData]);

    useEffect(() => {
        setCity(location?.ParentCity?.LocalizedName);
        setState(location?.AdministrativeArea?.LocalizedName);
    }, [location])

    function getGoogleIconName(iconString) {
        return googleIcons[iconString] || null
    }

    const GetGoogleIcon = (props) => {
        //console.log('!!!props from GetGoogleICon', props)
        const icon = getGoogleIconName(props?.icon)

        return <div class="material-symbols-outlined" style={{ fontSize: props?.size }}>{icon}</div>
    }

    const [dailyForcast, setdailyForcast] = useState();
    const [hourlyForcast, setHourlyForcast] = useState();
    const [hoursLeft, setHoursLeft] = useState();
    const [hourlyMap, setHourlyMap] = useState();

    useEffect(() => {
        if (weatherData !== null || undefined) {
            console.log('weatherDatayyy', weatherData);
            //GetWeatherIcon(weatherData?.currentConditions?.icon);
            console.log('!!dailyForecast', weatherData?.days)
            setdailyForcast(weatherData?.days);
        }
        /// console.log('GetTime', time);
    }, [weatherData]);

    useEffect(() => {
        if (dailyForcast) {
            // console.log('daily forecast', dailyForcast);
            setHourlyForcast(dailyForcast[0]?.hours)
        }
    }, [dailyForcast]);

    useEffect(() => {
        if (hourlyForcast) {
            // console.log('Hourly Forecast', hourlyForcast);
            const currentTimeStamp = Math.floor(Date.now() / 1000);
            const hoursLeft = hourlyForcast?.filter((obj) => obj.datetimeEpoch >= currentTimeStamp);
            setHoursLeft(hoursLeft);
        }

    }, [hourlyForcast]);

    useEffect(() => {
        if (hoursLeft) {
            console.log('Hours Left', hoursLeft)
            if (hoursLeft.length < 12) {
                const hoursToPullFromNextDay = 12 - hoursLeft.length;
                console.log("hours left length", hoursLeft.length, "12 minus hours left", 12 - hoursLeft.length)
                const nextDayHourly = dailyForcast[1].hours.slice(0, hoursToPullFromNextDay)
                console.log("next day hourly", nextDayHourly);
                setHourlyMap(hoursLeft.concat(nextDayHourly));
                return;
            }
            setHourlyMap(hoursLeft);
        }

    }, [hoursLeft]);

    useEffect(() => {
        if (hourlyMap) {
            console.log("hourly MAP => ", hourlyMap)
        }
    }, [hourlyMap]);
    //rgb values
    const [firstIVal, setFirstIVal] = useState(0);
    const [secondIVal, setSecondIVal] = useState(117);
    const [thirdIVal, setThirdIVal] = useState(255);
    const [firstVal, setFirstVal] = useState();
    const [secondVal, setSecondVal] = useState();
    const [thirdVal, setThirdVal] = useState();


    //const hour = date.getHours();
    const hour = date.getHours();
    const [backGroundColor, setBackGroundColor] = useState();
    useEffect(() => {
        //setBackGroundColor();
        if (hour < 12) {
            setFirstVal(0);
            setSecondVal(117);
            setThirdVal(255);

        } else if (hour <= 17) {
            const diff = hour - 12
            setFirstVal(0);
            setSecondVal(secondIVal - (diff * 12))
            setThirdVal(thirdIVal - (diff * 20))

        }
    }, [hour]);

    const HourlyTempChart = () => {

        const [labels, setLabels] = useState([]);
        const [data, setData] = useState([]);

        useEffect(() => {
            if (hourlyMap) {
                setLabels(hourlyMap?.map(data => new Date(data?.datetimeEpoch * 1000).toLocaleTimeString('en-US', { hour: 'numeric', hour12: true })))
                setData(hourlyMap?.map((data) => data.temp));
                console.log('hourly map changing')
            }
        }, [hourlyMap]);

        const options = {

            responsive: true,
            scales: {
                y: {
                    labels: data,
                    beginAtZero: false,
                    ticks: {
                        precision: 0,
                        autoSkip: true,
                        color: "#ffffff",
                        font: {
                            size: 12,
                            weight: 600,
                            color: "#fff"
                        }
                    },
                    grid: {
                        display: false // Remove X-axis grid lines
                    }
                },
                x: {
                    type: 'category',
                    labels: labels,
                    ticks: {
                        autoSkip: true,
                        maxTicksLimit: 5,
                        color: "#fff",
                        font: {
                            size: 12,
                            weight: 600,
                            color: "rgba(255, 255, 255, .96)",
                            backGroundColor: "rgba(255, 255, 255, .96)"
                        }
                    },
                    grid: {
                        display: false // Remove X-axis grid lines
                    }
                }
            },
            plugins: {
                legend: {
                    display: false,
                    labels: {
                        font: {
                            color: 'red'
                        }
                    }

                }
            },
        };

        const chartData = {
            //  labels: labels,
            datasets: [
                {
                    lineTension: .33,
                    label: "Temperature",
                    data: data,
                    fill: true,
                    pointStyle: 'circle',
                    borderColor: 'rgba(255, 255, 255, .80)',
                    backgroundColor: `rgba(255, 255, 255, .33)`
                },
            ]
        }
        return (
            <div>
                {weatherData?.currentConditions &&
                    <Line data={chartData} options={options} className={styles.chart} />
                }
            </div>
        );

    }
    // .main style={{ backgroundColor: darkMode ? 'black' : 'white', color: darkMode ? 'white' : 'black'}}

    // currentContainer style={{ backgroundColor: darkMode ? 'rgb(33, 33, 33)' : 'rgba(255, 255, 255, 0.5)', color: darkMode ? 'rgba(255, 255, 255, 0.9)' : 'rgb(33, 33, 33)' }}
    return (

        <div className={styles.main}>

            <div className={styles.tOne}
            // style={{ background: `linear-gradient(180deg, rgba(0, 57, 155, 0.16) -4.01%, #00399B 100%)` }}
            //style={{backgroundImage: 'url(' + rain + ')', backgroundSize: 'cover', backgroundPosition: 'center', width: '100vw'}}
            >
                <Navbar onLocationChange={handleLocationChange} />
                <div className={styles.center}>
                    {isLoading &&
                        <div className={styles.loadContainer}
                        >Loading</div>
                    }
                    <div className={styles.topRow}>
                        <div className={styles.leftCol}>
                            <div className={styles.title}>{GetTime().date.toDateString()}</div>
                            {city && state &&
                                <div className={styles.title}>{city}, {state} </div>
                            }
                        </div>
                    </div>
                </div>

                <div className={styles.weatherInfo}>
                    <div className={styles.center} >

                        <div className={styles.currentContainer}
                        >
                            <div className={styles.topRow}>

                                <div className={styles.leftCol}>
                                    <div className={styles.currentIcon}>

                                        <GetGoogleIcon icon={currentIcon} size={'64px'} />
                                    </div>

                                    {weatherData?.currentConditions?.temp &&
                                        <div className={styles.currentTemp}>{weatherData?.currentConditions?.temp}

                                            <span className={styles.currentDegree}>&deg;<span className={styles.currentUnit}>F</span>
                                            </span>

                                        </div>
                                    }
                                    {weatherData?.currentConditions?.feelslike &&
                                        < div className={styles.feelsLike}>Feels Like: {weatherData?.currentConditions?.feelslike}&deg; F</div>
                                    }
                                </div>
                                {weatherData?.currentConditions?.humidity &&
                                    <div className={styles.rightCol}>
                                        <div className={styles.time}>{time}</div>
                                        <div>Humidity: {weatherData?.currentConditions?.humidity}</div>
                                    </div>
                                }
                            </div>

                            {weatherData?.currentConditions?.sunriseEpoch &&
                                <div className={styles.sunsetRow}>
                                    <div className={styles.sunContainer}><Icon path={mdiWeatherSunsetUp} size={1} className={styles.sunsetIcon} />Sun Rise: {new Date(weatherData?.currentConditions?.sunriseEpoch * 1000).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</div>
                                    <div className={styles.sunContainer}><Icon path={mdiWeatherSunsetDown} size={1} className={styles.sunsetIcon} />Sun Set: {new Date(weatherData?.currentConditions?.sunsetEpoch * 1000).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</div>
                                </div>
                            }
                        </div>
                    </div>



                    <div className={styles.center}>
                        <div className={styles.forecastContainer}
                        >
                            <div className={styles.forecastRow}>
                                {hourlyMap?.map((l, index) => {
                                    return (
                                        <div key={index} className={styles.forecastCollumn} >
                                            <div className={styles.hourlyHour}>{new Date(l?.datetimeEpoch * 1000).toLocaleTimeString('en-US', { hour: 'numeric', hour12: true })}</div>
                                            <div className={styles.hourlyTemp}>{l?.temp}&deg;</div>
                                            <GetGoogleIcon icon={l?.icon} size={"24px"} />
                                            <div className={styles.precipContainer}>
                                                <div class="material-symbols-outlined" size={'12px'} style={{ fontSize: '16px', height: '18px', justifySelf: 'center', alignSelf: 'center' }}>{'water_drop'}</div>
                                                <div className={styles.precipProb}>{l?.precipprob}%</div>
                                            </div>

                                        </div>
                                    )
                                })}

                            </div>

                        </div>
                    </div>

                    <div className={styles.center}>
                        <div className={styles.chartContainer}>
                            {HourlyTempChart()}
                        </div>
                    </div>



                    <div className={styles.center}>
                        <div className={styles.forecastContainer}
                        >
                            <div className={styles.forecastRow}>
                                {dailyForcast?.map((l, index) => {
                                    return (
                                        <div key={index} className={styles.forecastCollumn} >
                                            <div className={styles.hourlyHour}>{index === 0 && "Today" ||
                                                new Date(l?.datetimeEpoch * 1000).toLocaleDateString('en-US', { weekday: "short", day: "numeric" })
                                            }</div>

                                            <div className={styles.hourlyTemp}>{l?.temp} &deg;</div>
                                            <GetGoogleIcon icon={l?.icon} size={"24px"} />

                                            <div className={styles.precipContainer}>
                                                <div class="material-symbols-outlined" size={'12px'} style={{ fontSize: '16px', height: '18px', justifySelf: 'center', alignSelf: 'center' }}>{'water_drop'}</div>
                                                <div className={styles.precipProb}>{l?.precipprob}%</div>
                                            </div>

                                            {l?.preciptype &&
                                                <div>{l?.preciptype[0]}</div>
                                            }
                                            {l?.preciptype && l?.preciptype.length <= 2 &&
                                                <div>
                                                    <div>{l?.preciptype[0]}</div>
                                                    <div>{l?.preciptype[1]}</div>
                                                </div>
                                            }

                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>



            </div>

        </div >
    );
};