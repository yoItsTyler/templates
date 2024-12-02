import { useLoadScript } from "@react-google-maps/api";
import { useState, useRef, useEffect } from "react";
import styles from './styles.module.css';


const libraries = ['places'];

export const GetLocation = ({ onLocationChange, currentLocationData }) => {
    const [longitude, setLongitude] = useState(null);
    const [latitude, setLatitude] = useState(null);
   // const [city, setCity] = useState();
    //const [state, setState] = useState();
    const [alreadyAsked, setAlreadyAsked] = useState(false);
    const [autoCompleteFilled, setAutoCompleteFilled] = useState(false);

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyCZqR34N36tuWkPe0vvI6geC4IPF4QhSoQ',
        libraries: libraries,
    });

    //console.log('areadyAsked', alreadyAsked)

    const getUserLocation = () => {
        if (navigator?.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                    setAlreadyAsked(!alreadyAsked);
                    console.log('setting Already Asked', alreadyAsked)
                },
                (err) => {
                    console.error('Error getting location', err);
                    // Check for specific errors
                    switch (err.code) {
                        case err.PERMISSION_DENIED:
                            alert("User denied the request for Geolocation.");
                            break;
                        case err.POSITION_UNAVAILABLE:
                            alert("Location information is unavailable.");
                            break;
                        case err.TIMEOUT:
                            alert("The request to get user location timed out.");
                            break;
                        case err.UNKNOWN_ERROR:
                            alert("An unknown error occurred.");
                            break;
                    }
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
            alert("Geolocation is not supported by this browser.");
        }
    };


    useEffect(() => {
        if ((longitude == null || latitude == null) && alreadyAsked == false && currentLocationData == null) {
            getUserLocation();
            console.log('running getUserLocation from GetLocation')
            console.log('Already Asked from long lat uE', alreadyAsked)
            console.log('!currentLocationData from GetLocations.js',currentLocationData);
        }
        console.log('getUserLoc useEffect', 'lng-lat', longitude, latitude, alreadyAsked)

        if (longitude !== null && latitude !== null && isLoaded && !autoCompleteFilled) {
            getCityName(latitude, longitude);
            console.log('Running getCityName');
        }
    }, [longitude, latitude]);

    const getCityName = (lat, lng) => {
        const geocoder = new window.google.maps.Geocoder();
        const latLng = new window.google.maps.LatLng(lat, lng);

        geocoder.geocode({ location: latLng }, async (results, status) => {
            if (status === 'OK' && results && results.length > 0) {
                const cityResult = results[0]?.address_components.find(
                    (component) => component.types.includes('locality')
                );
                const stateF = results[0]?.address_components.find(
                    (component) => component.types.includes('administrative_area_level_1')
                );
                //administrative_area_level_1
              //  console.log('getCityName results:', results, "state", state)
                const cityName = cityResult ? cityResult?.short_name : '';
                const state = stateF ? stateF?.short_name : '';
                //setCity(cityName);
               // setState(state.short_name);
                console.log('getCityNameResults', results, 'cityName', cityName, 'latitude', latitude, 'state', state)
                //, 'stateShort', stateShort
                onLocationChange({ cityName, latitude, longitude, state });
            } else {
                console.error('Geocoder returned no results or failed.');
            }
        });
    };

    const autoCompleteRef = useRef(null);
    const inputRef = useRef(null);
    const options = {
        componentRestrictions: { country: "us" },
        fields: ["address_components", "geometry"],
        types: ["(cities)"],
    };

    useEffect(() => {
        if (isLoaded && inputRef.current) {
            autoCompleteRef.current = new window.google.maps.places.Autocomplete(
                inputRef.current,
                options
            );

            autoCompleteRef.current.addListener("place_changed", async () => {
                const place = await autoCompleteRef.current.getPlace();
                console.log({ place }); // Log the place object for debugging

                if (place && place.address_components) {
                    const cityName = place.address_components.find(
                        (component) => component.types.includes('locality')
                    )?.long_name || '';
                    const state = place.address_components.find(
                        (component) => component.types.includes('administrative_area_level_1')
                    )?.short_name || '';
                    const latitude = place.geometry?.location?.lat();
                    const longitude = place.geometry?.location?.lng();

                    if (cityName && state && latitude && longitude) {
                        setAutoCompleteFilled(true);
                       // setCity(cityName);
                       // setState(state);
                        setLatitude(latitude);
                        setLongitude(longitude);

                        // Trigger onLocationChange only when data is valid and changes occur
                        if (onLocationChange) {
                            onLocationChange({ cityName, latitude, longitude, state });
                        }
                    } else {
                        console.error("City, state, latitude, or longitude is undefined.");
                    }
                } else {
                    console.error("Place is undefined or has no address components.");
                }
            });
        }
    }, [isLoaded]);

    if (loadError) {
        return <div>Error loading maps</div>;
    }

    return (
        <div>
            <div className={styles.inputCont}>
                <input ref={inputRef} className={styles.locationInput} placeholder="Enter a city" />
            </div>
        </div>
    );
};
