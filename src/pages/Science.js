import '../css/home.css';
import Time from '../props/Time';
import React, { useState } from 'react'
import Dropdown from '../props/Dropdown';
import NewsCard from '../props/NewsCard';
import LoadingBar from 'react-top-loading-bar';
import Hemburger from '../props/Hemburger';
import Header from '../props/Header';
export default function Science() {
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

           <Dropdown top={false} bus={false} sci={true} wor={false}
               tec={false} spt={false} hea={false} ent={false}
           />
          <NewsCard apis="https://newsapi.org/v2/top-headlines?country=in&category=science" ppp={setProgress}/>
        </>
    )
}
