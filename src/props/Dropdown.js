import "../css/dropdown.css";

import {Link} from "react-router-dom";
export default function Dropdown(props) {
  
  const filters = () => {
    if (props.top) {
        return (
            <>
             <Link to="/"> <li className="active">TOP NEWS</li></Link>
             <Link to="/business"><li >BUSINESS</li></Link>
             <Link to="/science"><li>SCIENCE</li></Link>
             <Link to="/world"><li>WORLD</li></Link>
             <Link to="/technology"><li>TECHNOLOGY</li></Link>
              <Link to="/sports"><li>SPORTS</li></Link>
              <Link to="/health"> <li>HEALTH</li></Link>
              <Link to="/entertainment"><li>ENTERTAINEMENT</li></Link>
            </>
          );
    } else if (props.bus) {
      return (
        <>
            <Link to="/"> <li>TOP NEWS</li></Link>
             <Link to="/business"><li className="active">BUSINESS</li></Link>
             <Link to="/science"><li>SCIENCE</li></Link>
             <Link to="/world"><li>WORLD</li></Link>
             <Link to="/technology"><li>TECHNOLOGY</li></Link>
              <Link to="/sports"><li>SPORTS</li></Link>
              <Link to="/health"> <li>HEALTH</li></Link>
              <Link to="/entertainment"><li>ENTERTAINEMENT</li></Link>
        </>
      );
    } else if (props.sci) {
      return (
        <>
           <Link to="/"> <li>TOP NEWS</li></Link>
             <Link to="/business"><li >BUSINESS</li></Link>
             <Link to="/science" ><li className="active">SCIENCE</li></Link>
             <Link to="/world"><li>WORLD</li></Link>
             <Link to="/technology"><li>TECHNOLOGY</li></Link>
              <Link to="/sports"><li>SPORTS</li></Link>
              <Link to="/health"> <li>HEALTH</li></Link>
              <Link to="/entertainment"><li>ENTERTAINEMENT</li></Link>
        </>
      );
    } else if (props.wor) {
      return (
        <>
            <Link to="/"> <li>TOP NEWS</li></Link>
             <Link to="/business"><li >BUSINESS</li></Link>
             <Link to="/science"><li>SCIENCE</li></Link>
             <Link to="/world"><li className="active">WORLD</li></Link>
             <Link to="/technology"><li>TECHNOLOGY</li></Link>
              <Link to="/sports"><li>SPORTS</li></Link>
              <Link to="/health"> <li>HEALTH</li></Link>
              <Link to="/entertainment"><li>ENTERTAINEMENT</li></Link>
        </>
      );
    } else if (props.tec) {
      return (
        <>
             <Link to="/"> <li>TOP NEWS</li></Link>
             <Link to="/business"><li >BUSINESS</li></Link>
             <Link to="/science"><li>SCIENCE</li></Link>
             <Link to="/world"><li>WORLD</li></Link>
             <Link to="/technology" ><li className="active">TECHNOLOGY</li></Link>
              <Link to="/sports"><li>SPORTS</li></Link>
              <Link to="/health"> <li>HEALTH</li></Link>
              <Link to="/entertainment"><li>ENTERTAINEMENT</li></Link>
        </>
      );
    } else if (props.spt) {
      return (
          <>
           <Link to="/"> <li>TOP NEWS</li></Link>
             <Link to="/business"><li >BUSINESS</li></Link>
             <Link to="/science"><li>SCIENCE</li></Link>
             <Link to="/world"><li>WORLD</li></Link>
             <Link to="/technology"><li>TECHNOLOGY</li></Link>
              <Link to="/sports"><li className="active">SPORTS</li></Link>
              <Link to="/health"> <li>HEALTH</li></Link>
              <Link to="/entertainment"><li>ENTERTAINEMENT</li></Link>
        </>
      );
    } else if (props.hea) {
      return (
        <>
   <Link to="/"> <li>TOP NEWS</li></Link>
             <Link to="/business"><li >BUSINESS</li></Link>
             <Link to="/science"><li>SCIENCE</li></Link>
             <Link to="/world"><li>WORLD</li></Link>
             <Link to="/technology"><li>TECHNOLOGY</li></Link>
              <Link to="/sports"><li>SPORTS</li></Link>
              <Link to="/health"> <li className="active">HEALTH</li></Link>
              <Link to="/entertainment"><li>ENTERTAINEMENT</li></Link>
        </>
      );
    } else {
      return (
        <>
      <Link to="/"> <li >TOP NEWS</li></Link>
             <Link to="/business"><li >BUSINESS</li></Link>
             <Link to="/science"><li>SCIENCE</li></Link>
             <Link to="/world"><li>WORLD</li></Link>
             <Link to="/technology"><li>TECHNOLOGY</li></Link>
              <Link to="/sports"><li>SPORTS</li></Link>
              <Link to="/health"> <li>HEALTH</li></Link>
              <Link to="/entertainment"><li className="active">ENTERTAINEMENT</li></Link>
        </>
      );
    }
  };

  return <div className="dropdown">{filters()}</div>;
}
