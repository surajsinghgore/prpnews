import '../css/hame.css';
import {Link} from "react-router-dom";
export default function Hemburger() {
    return (
        <nav>
        <div class="logo">PRP NEWS</div>
        <input type="checkbox" id="checkbox" />
        <label for="checkbox" id="icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
        <ul>
            <li className="active"><Link to="/">TOP NEWS</Link></li>
            <li><Link to="/business">BUSINESS</Link></li>
            <li><Link to="/science">SCIENCE</Link></li>
            <li><Link to="/world">WORLD</Link></li>
            <li><Link to="/technology">TECHNOLOGY</Link></li>
            <li><Link to="/sports">SPORTS</Link></li>
            <li><Link to="/health">HEALTH</Link></li>
            <li><Link to="/entertainment">ENTERTAINEMENT</Link></li>
        </ul>
    </nav>
    
    )
}
