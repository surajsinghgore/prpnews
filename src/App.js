import Home from './pages/Home';

import Sports from './pages/Sports';
import Business from './pages/Business';
import Science from './pages/Science';
import World from './pages/World';
import Technology from './pages/Technology';
import Health from './pages/Health';
import Entertainment from './pages/Entertainment';
import { Switch, Route} from "react-router-dom";

import './App.css';
function App() {
   
  return (
    <div className="App">
    
      <Switch>
         <Route exact path="/">
            <Home />
         </Route>
         <Route exact path="/prpnews">
            <Home />
         </Route>
         <Route exact path="/business">
            <Business />
         </Route>
         <Route exact path="/science">
            <Science />
         </Route>
         <Route exact path="/world">
            <World />
         </Route>
         <Route exact path="/technology">
            <Technology />
         </Route>
         <Route exact path="/sports">
            <Sports />
         </Route>
         <Route exact path="/health">
            <Health />
         </Route>
         <Route exact path="/entertainment">
            <Entertainment />
         </Route>
         
        
        
 </Switch>
    </div>
  );
}

export default App;
