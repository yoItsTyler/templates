import { useEffect, useState } from "react";



export const GetTime = () => {

    const [date, setDate] = useState(new Date());
    // const showTime = date.getHours()        + ':' + date.getMinutes()        + ":" + date.getSeconds();

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date())
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    }, []);

    const showTime = date.toLocaleTimeString();

    const [genTime, setGenTime] = useState();

    useEffect(() => {
      //  console.log('getTime', showTime);
    }, [showTime])
    useEffect(() => {
      //  console.log('gentime', genTime);
    }, [genTime]);



    return{
        date,
        showTime
    }
}