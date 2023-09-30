import { HashRouter, Routes, Route, Link } from "react-router-dom";

import Myser from "./basic/user.js";
import Myproduct from "./basic/product.js";
import Mycustomer from "./basic/customer.js";
import Itemlist from "./basic/item.js";
import Myhook1 from "./hooks/hook1.js";
import Myhook2 from "./hooks/hook2.js";
import Myhook3 from "./hooks/hook3.js";
import Myhook4 from "./hooks/hook4.js";
import Myhook5 from "./hooks/hook5.js";
import Myhook6 from "./hooks/hook6.js";
import Myapi1 from "./api/api1.js";
import Myapi2 from "./api/api2.js";

function App() {
  return (
    <HashRouter>
      <ul id="topnav">
          <li> <Link to="/user-list" className="toplink"> User List </Link> </li>
          <li> <Link to="/product-list" className="toplink"> Product List </Link> </li>
          <li> <Link to="/customer-list" className="toplink"> Customer List </Link> </li>
          <li> <Link to="/item-list" className="toplink"> Props </Link> </li>
          <li> <Link to="/state1" className="toplink"> State-1 </Link> </li>
          <li> <Link to="/state2" className="toplink"> State-2 </Link> </li>
          <li> <Link to="/state3" className="toplink"> State-3 </Link> </li>
          <li> <Link to="/state4" className="toplink"> State-4 </Link> </li>
          <li> <Link to="/state5" className="toplink"> State-5 </Link> </li>
          <li> <Link to="/state6" className="toplink"> State-6 </Link> </li>
          <li> <Link to="/api1" className="toplink"> Api1 </Link> </li>
          <li> <Link to="/api2" className="toplink"> Api2 </Link> </li>
      </ul>

      <Routes>
      <Route exact path="/api2" element={ <Myapi2/> }/>
        <Route exact path="/api1" element={ <Myapi1/> }/>
        <Route exact path="/state6" element={ <Myhook6/> }/>
        <Route exact path="/state5" element={ <Myhook5/> }/>
        <Route exact path="/state4" element={ <Myhook4/> }/>
        <Route exact path="/state3" element={ <Myhook3/> }/>
        <Route exact path="/state2" element={ <Myhook2/> }/>
        <Route exact path="/state1" element={ <Myhook1/> }/>
        <Route exact path="/item-list" element={ <Itemlist/> }/>
        <Route exact path="/user-list" element={ <Myser/> }/> 
        <Route exact path="/product-list" element={ <Myproduct/> }/>
        <Route exact path="/customer-list" element={ <Mycustomer/> }/>
      </Routes>

    </HashRouter>
  );
}

export default App;


