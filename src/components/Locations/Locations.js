import styles from './styles.module.css';
import { useLoadScript } from "@react-google-maps/api";
import { useCallback, useEffect, useState, useRef } from "react";
import Icon from '@mdi/react';
import { mdiChevronDown, mdiChevronRight, mdiChevronUp, mdiMagnify, mdiMapMarker } from '@mdi/js';
import { GetLocation } from '../GetLocation';
import { useSpring, animated } from '@react-spring/web';
//import { GetLocation } from '../GetLocation';
const libraries = ['places'];
const getStoredCities = () => {
    const storedCities = localStorage.getItem('recentCities');
    console.log('RUNNING getStoredCities from Locations',)
    return storedCities ? JSON.parse(storedCities) : [];
};

export const Locations = ({ onLocationChange, currentLocationData, pastCities }) => {
    // const [pastCities, setPastCities] = useState(getStoredCities);
    const [locationData, setLocationData] = useState(currentLocationData);
    // const [currentLocationData, setCurrentLocationData] = useState();
    const city = useState(currentLocationData?.cityName);
    const [cityListOpen, setCityListOpen] = useState(false);
    const [searchBoxOpen, setSearchBoxOpen] = useState(false);


    const handleLocationChange = (newLocationData) => {
        console.log('NEW LOCATION DATA FROM LOCATIONS', newLocationData, 'currentLocation', currentLocationData)
        setLocationData(newLocationData);
        // saveCityData(newLocationData);
        onLocationChange(newLocationData);//pass data to parent components

    }

    const setClickedCity = (l) => {
        onLocationChange(l)
        setCityListOpen(!cityListOpen)
    }

    const [springMenuItem, api] = useSpring(() => ({
        from: { opacity: 0 },
        to: { opacity: 1 },
    }))

    const SavedCityList = () => {
        return (
            <div className={styles.cityListContainer}>
                {[...new Map(pastCities?.map(item => [`${item.cityName},${item.state}`, item])).values()].map((l, index) => (
                    <div key={index}>
                        <animated.div
                            onClick={() => setClickedCity(l)}
                            className={styles.cityNameContainer}
                            style={{ ...springMenuItem }}
                        >{l?.cityName}, {l?.state}</animated.div>
                    </div>
                ))}
            </div>
        );
    }
    const [alreadyAsked, setAlreadyAsked] = useState(false);

    const openSearch = () => {
        setSearchBoxOpen(!searchBoxOpen);
        setCityListOpen(false);
    }



    return (
        <div className={styles.main}>

            {!searchBoxOpen &&
                <div className={styles.locationContainer}>

                    <Icon path={mdiMapMarker} size={'20px'} className={styles.currentLocationPin} />
                    <div className={styles.selectedCity}>{currentLocationData?.cityName}, {currentLocationData?.state}</div>
                    <Icon className={styles.selectCityBtn} path={cityListOpen ? mdiChevronUp : mdiChevronDown} size={'33px'} onClick={() => setCityListOpen(!cityListOpen)} />

                    {cityListOpen &&
                        <SavedCityList />
                    }
                </div>
            }
            <div className={styles.searchContainer}  >
                {!searchBoxOpen &&
                    <Icon path={mdiMagnify} size={2} className={styles.searchBtn} onClick={openSearch} />
                }
            </div>
            {searchBoxOpen &&
                <div className={styles.searchContainer} >
                    <div onClick={() => setSearchBoxOpen(!searchBoxOpen)}>
                        <Icon path={mdiChevronRight} size={2} />
                    </div>

                    <div className={styles.slideFromRight}>
                        <GetLocation onLocationChange={handleLocationChange} currentLocationData={locationData} />
                    </div>

                </div>
            }
        </div>
    )
}