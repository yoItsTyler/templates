import { useEffect, useState } from 'react';
import { GetLocation } from '../GetLocation';
import styles from './styles.module.css';
import { Locations } from '../Locations/Locations';

const getStoredCities = () => {
    const storedCities = localStorage.getItem('recentCities');
    return storedCities ? JSON.parse(storedCities) : [];
};


export const Navbar = ({ onLocationChange }) => {
    const [pastCities, setPastCities] = useState(
    );
    const [locationData, setLocationData] = useState(null);

    useState(() => {
        console.log('!NAVBAR! "pastCities changing" => ', pastCities)
    }, [pastCities]);

    useEffect(() => {        
        setPastCities(JSON.parse(localStorage.getItem('recentCities')) || []);
    }, []);


    const saveCityData = (newCity) => {
        console.log('Past cities before update:', pastCities);

        // Create a new array with the new city at the beginning, filter out duplicates
        const updatedCities = [
            newCity,
            ...pastCities.filter(
                city => city.cityName !== newCity.cityName || city.stateShort !== newCity.stateShort
            )
        ].slice(0, 5); // Ensure the array is limited to 5 items

        // Update state and local storage
        setPastCities(updatedCities);

        // Update local storage
        localStorage.setItem('recentCities', JSON.stringify(updatedCities));

        console.log('Updated cities after update:', updatedCities);
    };

    useEffect(() => {
        console.log('!!!Updated pastCities:', pastCities);
    }, [pastCities]);





    const handleLocationChange = (newLocationData) => {
        console.log('handle location change from Navbar.js', 'newLocationData', newLocationData)
        setLocationData(newLocationData);
        saveCityData(newLocationData);
        onLocationChange(newLocationData);//pass data to parent components

    }
    //   <GetLocation onLocationChange={handleLocationChange}/>
    return (
        <div className={styles.main}>
            {locationData &&
                <Locations onLocationChange={handleLocationChange} currentLocationData={locationData} pastCities={pastCities} />
            }
            {(locationData == null || undefined) &&
                <GetLocation onLocationChange={handleLocationChange} currentLocationData={locationData} />
            }


        </div>

    )
}