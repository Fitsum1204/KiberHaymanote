import { Fragment } from "react";
import { Routes,Route } from "react-router-dom";
import Navigation from "./components/routes/navigation/Navigation";


import Home from "./components/routes/home/Home";
import About from "./components/routes/about/About";
import News from "./components/routes/news/News";
import OtherPages from "./components/routes/otherPages/OtherPages";

const App =()=> {
  return (
    <Fragment>
      <Routes>
        <Route path="/" Component={Navigation}>
          <Route index Component={Home}/>
          <Route path='about/*'Component={About}/>
      
        </Route>
        <Route path="news" Component={News} />
        {/*<Route path="us" Component={OtherPages} />*/}
      </Routes>
    </Fragment>
  );
}

export default App;
