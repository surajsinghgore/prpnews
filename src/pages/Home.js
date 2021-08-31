import React, { useState } from 'react'
import '../css/home.css';
import Time from '../props/Time';
import LoadingBar from 'react-top-loading-bar';
import Dropdown from '../props/Dropdown';
import NewsCard from '../props/NewsCard';
import Hemburger from '../props/Hemburger';
import Header from '../props/Header';
export default function Home(props) {
    const [progress, setProgress] = useState(0)
    return (
        <div> 
           <LoadingBar
        color='#f11946'
        height={5}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
        <Time />
        <Hemburger />
       <Header />

           <Dropdown top={true} bus={false} sci={false} wor={false}
               tec={false} spt={false} hea={false} ent={false}
           />
           <NewsCard apis="https://newsapi.org/v2/top-headlines?country=in" ppp={setProgress} />
        </div>
    )
}
