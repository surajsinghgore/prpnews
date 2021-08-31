import '../css/home.css';
import React, { useState } from 'react'
import Time from '../props/Time';
import Dropdown from '../props/Dropdown';
import NewsCard from '../props/NewsCard';
import Header from '../props/Header';
import Hemburger from '../props/Hemburger';
import LoadingBar from 'react-top-loading-bar';
export default function World() {
    const [progress, setProgress] = useState(0)
    return (
        <> <LoadingBar
        color='#f11946'
        height={5}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
        <Time /> <Hemburger />
        <Header />
     
           <Dropdown top={false} bus={false} sci={false} wor={true}
               tec={false} spt={false} hea={false} ent={false}
           />
           <NewsCard apis="https://newsapi.org/v2/top-headlines?country=us" ppp={setProgress} />
          
        </>
    )
}
