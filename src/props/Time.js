import '../css/home.css';
import {TiWeatherPartlySunny} from "react-icons/ti";
import { useState } from 'react';
export default function Time() {
    const [times,setTimes]=useState();
    const [days,setDays]=useState();
    const [dates,setDates]=useState();
    const [yearsss,setYearsss]=useState();
    const [yearss,setYearss]=useState();
    const [milli,setMilli]=useState();
    function clock() {
        let d = new Date();
    let date=d.getDate();
    let year=d.getFullYear();
    let hours=d.getHours();
    let second=d.getSeconds();
    let minutes=d.getMinutes();
    let t;
    let millisecond;
    if(second<=9){
        millisecond=`0${second}`
    }
    else{
        millisecond=`${second}`
    }
    if(minutes<=9){
        t=`0${minutes}`
    }
    else{
        t=`${minutes}`
    }
    let time=` ${hours}:${t}`;
    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    let day= weekday[d.getDay()];
    let month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    let years = month[d.getMonth()];

    setTimes(time)
    setMilli(millisecond)
setDays(day)
setDates(date);
setYearss(year)
setYearsss(years)

        }
    setInterval(clock, 1000);
    return (
        <div className="time">
         <span>INDIA,IN</span><TiWeatherPartlySunny id="icons"/>
            <div className="top" id="tops">
<p>{days} {dates} {yearsss} {yearss} / {times}: {milli}</p>
       
               </div>
        </div>
    )
}
