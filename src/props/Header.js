import '../css/home.css';

import { BsNewspaper } from "react-icons/bs";
export default function Header() {
  
    return (
<header>
<span>PRP <BsNewspaper id="ic"/> </span>

<div className="right">
<h1>Latest and Accurate news</h1>
<p>Used by 1000+user's Daily</p>
</div>

</header>
    )
}
