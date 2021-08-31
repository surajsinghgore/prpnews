import { useEffect, useState, useRef } from "react";
import "../css/newscard.css";
export default function NewsCard(props) {

 let api = 'bbde160bb82449338b4c5bc1fe25569f';
  const [datas, setDatas] = useState([]);
const[pageNum,setPageNum]=useState(1);
const[loading,setLoading]=useState(false);


  const worldData = async () => {
    props.ppp(10)
    const res = await fetch(
      `${props.apis}&apiKey=${api}&page=${pageNum}`
    );
    props.ppp(30)
    const data = await res.json(); 
    props.ppp(50)
    // setDatas(data.articles);
    setDatas(d=>[...d, ...data.articles]);
    props.ppp(70)
    setLoading(true)
    props.ppp(100)
  };

 

const ff=()=>{
  setPageNum(p=>p+1)
}
  useEffect(() => {
    worldData();
  },[pageNum]);

const pageEnd=useRef();
let num=1;
  useEffect(()=>{
if(loading){
const observer= new IntersectionObserver(function(entries, observer){
  console.log(entries)
if(entries[0].isIntersecting){
num++;
  ff();
  if(num>=3){
    observer.unobserve(pageEnd.current)
  }
}
},{threshold: 1});;
observer.observe(pageEnd.current)
}
  },[loading,num])

  return (
    <div className="news" id="news">
      {datas.map((elm, index) => {
        if (!elm.urlToImage) {
          return (
            <>
              <div className="card" >
              <div className="title">{elm.source.name}</div>
                <a href={elm.url} rel="noreferrer" target="_blank">
                  <div className="imgs">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-03e4HibIBeTQo4CnHFOOXn7Cpr5OFzzbuKbcdzzdZfU0cQ8ngElytu-_qPSfJ8edYM&usqp=CAU"
                      alt="nlt"
                    />
                    <div className="bottom">
                      <h1>{elm.title}</h1>
                    </div>
                  </div>
                </a>
              </div>
            </>
          );
        }
         else{
        return(
        <>
        <div className="card" key={index}>
        <div className="title">{elm.source.name}</div>
            <a href={elm.url} target="_blank">      
<div className="imgs">
    <img src={elm.urlToImage} alt={elm.urlToImage} />
    <div className="bottom">
    <h1>{elm.title}</h1>
    </div>
</div>
</a>

 </div>
        </>
    ) 
    }
  
      })}
       
      <div className="loading">
 
  <h1>LOADING ...</h1>
 
</div> 
<div className="button" ref={pageEnd}></div>
 {/* <button onClick={ff} >
 Load more
 </button>   */}
    </div>
  );
}
