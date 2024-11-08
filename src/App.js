import { Fragment } from "react";
import { Routes,Route } from "react-router-dom";
import Navigation from "./components/routes/navigation/Navigation";


import Home from "./components/routes/home/Home";

const App =()=> {
  return (
    <Fragment>
      <Routes>
        <Route path="/" Component={Navigation}>
          <Route index Component={Home}/>
          {/*<Route path="home" Component={Home} />*/}
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
